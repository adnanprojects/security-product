import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

// Predefined users for each profile
const USERS = {
    user: {
        email: 'user@example.com',
        password: 'user123',
        profile: 'user'
    },
    product_admin: {
        email: 'product@example.com',
        password: 'product123',
        profile: 'product_admin'
    },
    admin: {
        email: 'admin@example.com',
        password: 'admin123',
        profile: 'admin'
    }
};

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userProfile, setUserProfile] = useState(null);

    const login = (email, password, profile) => {
        const user = USERS[profile];
        if (user && user.email === email && user.password === password) {
            setIsLoggedIn(true);
            setUserProfile(profile);
            return { success: true };
        }
        return { 
            success: false, 
            error: 'Invalid credentials. Please check your email and password.' 
        };
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserProfile(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userProfile, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};