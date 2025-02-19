import { useState, useRef } from "react"; 
import vid from "../assets/image/pip-vid1.mp4";
import vid1 from "../assets/image/pip-vid.mp4";

// Image imports
import pip1 from "../assets/image/pip-1.jpg";
import pip2 from "../assets/image/pip-2.jpg";
import pip3 from "../assets/image/pip-3.jpg";
import pip4 from "../assets/image/pip-4.jpg";
import pip5 from "../assets/image/pip-5.jpg";
import pip6 from "../assets/image/pip-6.jpg";
import pip7 from "../assets/image/pip-67.jpg";
import pip8 from "../assets/image/pip-8.jpg";
import pip9 from "../assets/image/pip-13.jpg";
import pip10 from "../assets/image/pip-9.jpg";
import pip11 from "../assets/image/pip-10.jpg";
import pip12 from "../assets/image/pip-15.jpg";
import pip13 from "../assets/image/pip-14.jpg";
import pip14 from "../assets/image/pip-16.jpg";
import pip15 from "../assets/image/pip-12.jpg";
import pip16 from "../assets/image/pip-18.jpg";
import pip17 from "../assets/image/pip-19.jpg";
import pip18 from "../assets/image/pip-recept.jpg";
import pip19 from "../assets/image/pip-21.jpg";
import pip20 from "../assets/image/pip-parent.jpg";
import pip21 from "../assets/image/pip-12.jpg";
import pip22 from "../assets/image/pip-27.jpg";
import pip23 from "../assets/image/pip-23.jpg";
import pip24 from "../assets/image/pip-24.jpg";
import pip25 from "../assets/image/pip-25.jpg";
import pip26 from "../assets/image/pip-school.jpg";
import pip28 from "../assets/image/pip-28.jpg";
import pip27 from "../assets/image/pip-11.jpg";
import pip30 from "../assets/image/pip-29.jpg";
import pip31 from "../assets/image/pip-30.jpg";
import pip37 from "../assets/image/pip-1.jpg";
import pip32 from "../assets/image/pip-31.jpg";
import pip33 from "../assets/image/pip-66.jpg";
import pip34 from "../assets/image/pip-33.jpg";
import pip55 from "../assets/image/pip-36.jpg";
import pip39 from "../assets/image/pip-38.jpg";
import pip40 from "../assets/image/pip-39.jpg";
import pip41 from "../assets/image/pip-40.jpg";
import pip42 from "../assets/image/pip-41.jpg";
import pip43 from "../assets/image/pip-42.jpg";
import pip44 from "../assets/image/pip-43.jpg";
import pip45 from "../assets/image/pip-44.jpg";
import pip46 from "../assets/image/pip-45.jpg";
import pip47 from "../assets/image/pip-46.jpg";
import pip48 from "../assets/image/pip-47.jpg";
import pip49 from "../assets/image/pip-48.jpg";
import pip50 from "../assets/image/pip-49.jpg";
import pip51 from "../assets/image/pip-65.jpg";
import pip52 from "../assets/image/pip-51.jpg";
import pip53 from "../assets/image/pip-52.jpg";
import pip54 from "../assets/image/pip-53.jpg";
import pip67 from "../assets/image/pip-cre.jpg";
import pip56 from "../assets/image/pip-parent.jpg";
import pip57 from "../assets/image/pip-sport.jpg";
import pip58 from "../assets/image/pip-school.jpg";
import pip59 from "../assets/image/pip-boys.jpg";
import pip60 from "../assets/image/pip-nur.jpg";
import pip61 from "../assets/image/pip-girls.jpg";
import pip62 from "../assets/image/pip-pre.jpg";
import pip63 from "../assets/image/pip-60.jpg";
import pip65 from "../assets/image/pip-62.jpg";
import pip66 from "../assets/image/pip-63.jpg";
// Add other image imports...

const Gallery = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const videoRef1 = useRef(null);

  // Array of image sources
  const imageSources = [
    pip1, pip2, pip3, pip4, pip5, pip6, pip7, pip8, pip9, pip10, pip11, pip12, pip13, pip14, pip15, pip16, pip17, pip18, pip19, pip20, pip21, pip22, pip23, pip24, pip25, pip26, pip27, pip28, pip30, pip31, pip32, pip33, pip34, pip37, pip39, pip40, pip41, pip42, pip43, pip44, pip45, pip46, pip47, pip48, pip49, pip50, pip51, pip52, pip53, pip54, pip55, pip56, pip57, pip58, pip59, pip60, pip61, pip62, pip63, pip65, pip66, pip67
    // Add other images as necessary...
  ];

  // Play/Pause handler
  const togglePlayPause = (videoRef) => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="gallery-container px-4 py-6 mx-auto">

      {/* Video at the top */}
      <div className="video-container mb-4">
        <video
          ref={videoRef}
          src={vid}
          className="video-element w-full h-[300px] object-cover"
          onClick={() => togglePlayPause(videoRef)}
          controls
        ></video>
      </div>

      {/* Gallery Grid for images */}
      <div className="gallery-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {imageSources.map((image, index) => (
          <div key={index} className="image-item flex justify-center">
            <img src={image} alt={`Gallery Item ${index + 1}`} className="w-full h-auto object-cover rounded-md" />
          </div>
        ))}
      </div>

      {/* Video at the bottom */}
      <div className="video-container mt-4">
        <video
          ref={videoRef1}
          src={vid1}
          className="video-element w-full h-[300px] object-cover"
          onClick={() => togglePlayPause(videoRef1)}
          controls
        ></video>
      </div>

    </div>
  );
};

export default Gallery;