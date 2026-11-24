import "./Services.css";
import { serviceTopics, business } from "../../utils/constants.js";
export default function Services() {
  return (
    <section
      className="services"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="services__inner">
        <div className="section-heading">
          <p className="section-heading__eyebrow">DIESEL / SERVICE INQUIRIES</p>
          <h2 className="section-heading__title" id="services-heading">
            KEEP THE CONVERSATION <span>MOVING.</span>
          </h2>
          <p className="section-heading__description">
            Every truck has a story. Tell us what yours is doing, and we'll talk
            through your diesel-related question.
          </p>
        </div>
        <div className="services__grid">
          {serviceTopics.map((topic) => (
            <article className="service-card" key={topic.title}>
              <span className="service-card__symbol" aria-hidden="true">
                {topic.icon === "engine"
                  ? "⚙"
                  : topic.icon === "tool"
                  ? "✦"
                  : topic.icon === "gauge"
                  ? "↗"
                  : "◈"}
              </span>
              <h3 className="service-card__title">{topic.title}</h3>
              <p className="service-card__description">{topic.description}</p>
              <a className="service-card__link" href={`tel:${business.tel}`}>
                LET'S TALK <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
        <div className="services__prompt">
          <p>
            NOT SURE WHERE TO START?{" "}
            <strong>CALL DAMEK AND DESCRIBE WHAT'S GOING ON.</strong>
          </p>
          <a href={`tel:${business.tel}`}>CALL NOW ↗</a>
        </div>
      </div>
    </section>
  );
}
