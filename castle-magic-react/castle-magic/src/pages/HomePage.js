import { Container } from "reactstrap";
import CastlesList from "../features/castles/CastlesList";
import Specialties from "../features/castles/Specialties";
import Hero from "../Components/Hero";
import ImageCarousel from "../Components/ImageCarousel";
import InfoCard from "../Components/InfoCard";
import GalleryList from "../features/gallery/GalleryList";
import katarynaSmall from "../assets/images/kataryna-castle-sm.jpg";
import GalleryImage from "../Components/GalleryImage";
import GALLERYPHOTOS from "../assets/information/GALLERYPHOTOS";
import Contact from "./Contact";

const HomePage = () => {
  return (
    <div>
      
      <Hero />
      <Container className="mt-5">
        <GalleryImage />
        <Contact />
        <InfoCard />
        <h2 className=" text-center">Featured Builds</h2>
        <CastlesList />
        <ImageCarousel />
        
      </Container>
    </div>
  );
};

export default HomePage;
