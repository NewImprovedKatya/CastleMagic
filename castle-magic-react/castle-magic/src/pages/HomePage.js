import { Container } from "reactstrap";
import CastlesList from "../features/castles/CastlesList";
import Specialties from "../features/castles/Specialties";
import Hero from "../Components/Hero";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import ImageCarousel from "../Components/ImageCarousel";
import InfoCard from "../Components/InfoCard";

const HomePage = () => {
  return (
    <div>
      
      <Hero />
      <Container className="mt-5">
        <Specialties />
        <InfoCard />
        <h2 className=" text-center">Featured Builds</h2>
        <CastlesList />
        <ImageCarousel />
        
      </Container>
    </div>
  );
};

export default HomePage;
