import { Container } from "reactstrap";
import CastlesList from "../features/castles/CastlesList";
import Specialties from "../features/castles/Specialties";
import Hero from "../Components/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Container className="mt-5">
        <Specialties />
        <h2 className=" text-center">Featured Builds</h2>
        <CastlesList />
      </Container>
    </>
  );
};

export default HomePage;
