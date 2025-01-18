import HeroComponent from '../components/HeroComponent';
import image1 from '../assets/Images/Hero/image 5.jpg';  // Image 1
import image2 from '../assets/Images/Hero/capacity.jpg';  // Image 2
import hands from '../assets/Images/Hero/image 3.jpg';  // Hands image
import univ from '../assets/Images/Hero/univ.jpg';  // Hands image
import newyear from '../assets/Images/Hero/vidhigh.mp4';  // Video

function Hero() {
  let slides = [
    hands, // Hands image for "I Am because We Are"
    image2, // Image 2 for "Africa-Centered Design-Thinking"
    image1, // Image 1 for "Ubuntu for capacity building!"
    hands, // Image 1 for "Ubuntu for capacity building!"
    univ, // Image 1 for "Ubuntu for capacity building!"
    { type: "video", src: newyear }, // Video slide for "Happy New Year"
  ];
  
  const titles = [
    "Eleos Groups", 
    "Eleos Groups", 
    "Eleos Groups", 
    "Eleos Groups", 
    "Eleos Groups", 
    "Eleos Groups", 
  ];
  
  const subtitles = [
    "Ubuntu for capacity building", // Subtitle for Hands image
    "Africa-Centered Design-Thinking", // Subtitle for Image 2
    "I am because we are", // Subtitle for Image 2
    "Howard univ events", // Subtitle for Image 2
    "Happy New Year!", // Subtitle for Image 1
    "Happy New Year!", // Subtitle for Video
  ];
  
  const buttonText = "CONTACT US";

  return (
    <div className="App" style={{ height: '100vh' }}>
      <HeroComponent
        slides={slides}
        titles={titles}
        subtitles={subtitles}
        buttonText={buttonText}
      />
    </div>
  );
}

export default Hero;
