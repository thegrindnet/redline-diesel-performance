import "./Hero.css";
import heroImage from "../../assets/images/redline-diesel-hero.webp";
import logo from "../../assets/images/logo.png";
import { business } from "../../utils/constants.js";
export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <img
        className="hero__photo"
        src={heroImage}
        alt="Illustrative diesel pickup truck in a repair workshop"
        fetchPriority="high"
        width="700"
        height="900"
      />
      <div className="hero__scrim" aria-hidden="true" />
      <div className="hero__layout">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="hero__signal" /> CHAPARRAL · NEW MEXICO
          </p>
          <h1 className="hero__heading" id="hero-heading">
            YOUR DIESEL.
            <br />
            <span className="hero__heading-accent">YOUR NEXT MOVE.</span>
          </h1>
          <p className="hero__description">
            Diesel concerns? Performance questions? Get straight to what
            matters. Talk directly with Redline Diesel Performance about your
            truck.
          </p>
          <div className="hero__actions">
            <a
              className="button button_view_primary"
              href={`tel:${business.tel}`}
            >
              CALL {business.phone}
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button_view_outline" href="#services">
              EXPLORE SERVICES <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero__note">
            DIRECT CONTACT <span aria-hidden="true">/</span> DIESEL INQUIRIES{" "}
            <span aria-hidden="true">/</span> CHAPARRAL, NM
          </p>
        </div>
        <div className="hero__badge">
          <img
            className="hero__badge-logo"
            src={logo}
            alt="Redline Diesel Performance logo"
          />
          <span className="hero__badge-caption">POWER STARTS HERE</span>
        </div>
      </div>
      <div className="hero__bottom">
        <span>REDLINE DIESEL PERFORMANCE</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
