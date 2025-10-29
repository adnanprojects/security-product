sequenceDiagram
    title LockLizard DRM - Activation and Decryption Flow

    participant Publisher as Publisher / Safeguard Writer
    participant Admin as License / Admin Server
    participant User as End User / Secure PDF Viewer
    participant Device as Local Keystore / Device Hardware

    %% Step 1 - Document protection
    Publisher->>Publisher: Input: Plain PDF, Policy, Recipient email
    Publisher->>Publisher: Generate AES-256 DEK
    Publisher->>Publisher: Encrypt PDF with DEK → .PDC file
    Publisher->>Admin: Send DEK + DocumentID + Policy + Recipient info (TLS)

    %% Step 2 - License generation
    Admin->>Admin: Lookup user & device policy
    alt Device public key known
        Admin->>Admin: WrappedDEK = RSA_Encrypt(DevicePub, DEK)
    else Server-based key model
        Admin->>Admin: WrappedDEK = AES-KW(KEK_user, DEK)
    end
    Admin->>Admin: Create License = {DocID, WrappedDEK, Rights, Expiry, Signature}
    Admin->>User: Deliver License (via email/portal/push) over HTTPS

    %% Step 3 - Activation on user side
    User->>Device: Generate DeviceKeyPair (DevicePriv, DevicePub)
    User->>Admin: Send DevicePub + hardware fingerprint + activation token (TLS)
    Admin->>User: Return License Blob (signed) + WrappedDEK (RSA/AES-KW)
    User->>User: Verify Admin signature on License
    User->>Device: Decrypt WrappedDEK using DevicePriv or KEK_user → DEK
    User->>Device: Store DEK in local keystore bound to hardware

    %% Step 4 - Document open
    User->>User: Open .PDC file
    User->>Device: Retrieve DEK from keystore
    User->>User: Decrypt PDC with AES-256-GCM using DEK
    User->>User: Enforce rights (print, expiry, watermark)
    User->>User: Display plaintext in secure viewer
