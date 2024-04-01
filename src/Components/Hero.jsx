import HeroSlider from "./HeroSlider";
import MovieDetailTextbox from "./MovieDetailTextbox";

const Hero = () => {
  return (
    <section className="section-hero">
      {/*  BANNER TEXT  */}
      <MovieDetailTextbox button={true} />

      {/* BANNER SLIDER  */}
      <HeroSlider />
    </section>
  );
};

export default Hero;
