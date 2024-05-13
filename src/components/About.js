import about_Img from "../images/about.jpeg";
import Heading from "./Heading";

const About = () => {
  return (
    <>
      <section className="section" id="about">
        <Heading title="about" subtitle="us" />
        <div className="section-center about-center">
          <div className="about-img">
            <img src={about_Img} className="about-photo" alt="awesome beach" />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <a href="#" className="btn" rel="noreferrer">
              read more
            </a>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
