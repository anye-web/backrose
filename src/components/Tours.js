import Heading from "./Heading";
import { tours } from "../data";

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Heading title="Feature" subtitle="Tours" />

        <div className="section-center featured-center">
          {tours.map((link) => {
            return (
              <article className="tour-card">
                <div className="tour-img-container">
                  <img src={link.image} className="tour-img" alt="" />
                  <p className="tour-date">{link.date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{link.title}</h4>
                  </div>
                  <p>{link.info}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>
                      {link.location}
                    </p>
                    <p>{link.numDays}</p>
                    <p>from {link.price}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Tours;
