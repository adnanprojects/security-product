import { useState } from "react";
import image1 from '../assests/digital_products1.jpg';
import image2 from '../assests/digital_products2.jpg';
import image3 from '../assests/digital_products3.jpg';
import image4 from '../assests/digital_products4.jpg';
import image5 from '../assests/digital_products5.jpg';
import image6 from '../assests/digital_products6.jpg';
import image7 from '../assests/digital_products7.jpg';
import image8 from '../assests/sp1.png';
import image9 from '../assests/sp2.png';
import image10 from '../assests/sp3.png';
import image11  from '../assests/sp4.png';
import image12  from '../assests/sp5.png';
// NOTE: the file in `src/assests` is named `aa` without an extension. Prefer renaming it to `aa.mp4`
// and importing with the extension: `import vid from '../assests/aa.mp4';`
// If you don't want to rename the file, the bundler may still resolve it, but the browser
// needs the correct MIME type. Using the `src` attribute on the <video> tag avoids
// forcing a hard-coded `type` value.
import vid from '../assests/aa.mp4';

export default () => {
    const [index, setIndex] = useState(0);
    const arr = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];
    const length = arr.length;

    return (
        <>
            <h1>Carousal</h1>
            {arr.map((img, id) => (
                <div key={id} style={{ display: id === index ? 'block' : 'none' }}>
                    <img src={img} alt={`Slide ${id + 1}`} style={{ width:'auto', height: '448px', margin: 'auto', display: 'flex' }} />
                </div>
            ))}
            <button onClick={() => setIndex((index - 1 + length) % length)}>Prev</button>
            <span>{index + 1} / {length}</span>
            <button onClick={() => setIndex((index + 1) % length)}>Next</button>
            {/* Use the `src` attribute so the browser determines the correct codec/MIME type.
                If the file actually is an mp4, rename to `aa.mp4` and change the import accordingly. */}
            <video
                // controls
                autoPlay
                loop
                src={vid}
                style={{ width: 'auto', height: '448px', margin: 'auto', display: 'flex' }}
            >
                Your browser does not support the video tag.
            </video>
        </>
    );
};



// ******** ---- This was prevous version ---- ********

// export default () => {
//     return(
//         <div className="contact_container">
//             <h1 className="contact_heading">About Us</h1>
//             <p className="contact_description">
//                 We are a company dedicated to providing the best services to our customers.<br /><br />
//                 <span style={{color:'red'}}>Form data will be handled with care and used to improve our offerings.</span>
//             </p>
//         </div>
//     );
// }