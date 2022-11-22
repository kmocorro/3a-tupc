import Hero from "../components/Hero";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";
import Navbar from "../components/Navbar";

export default function TUPC() {
  return (
    <div>
      <Navbar />
      <Hero
        heading1="Technological University of the Philippines"
        heading3="Cavite Campus"
        pAddress="CQT Avenue, Salawag, Dasmarinas, Cavite"
      />
      <OurVision />
      <OurMission />
    </div>
  );
}
