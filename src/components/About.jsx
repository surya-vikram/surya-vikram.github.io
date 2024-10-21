import { FaExternalLinkAlt } from "react-icons/fa";
import FadeInSection from "./FadeInSection";

function About() {
  return (
    <section
      className="about-section p-4 min-h-lvh flex flex-col justify-center items-center"
      id="about-section"
    >
      <FadeInSection>
        <div className="about-container flex flex-col items-center text-[--color-1]">
          <div className="sm:text-5xl text-3xl mb-20">
            <h1>
              <span className="rounded-lg p-4 font-bold text-black bg-white">
                ABOUT
              </span>
              ME
            </h1>
          </div>
          <div>
            <p className="w-3/4 sm:w-1/2 mx-auto text-justify mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis voluptatem temporibus quidem quas impedit officia
              fugiat officiis, accusamus nostrum at libero optio necessitatibus!
              Unde quam eaque cupiditate distinctio repellat in?
            </p>
          </div>
          <div className="">
            <button
              className="group relative overflow-hidden rounded bg-white text-lg shadow py-3 px-12 resume-btn glow-effect button"
              data-glow-offset="true"
            >
              <div className="absolute inset-0 w-7 bg-purple-900 transition-all duration-[500ms] ease-in-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white flex gap-6 items-center justify-center">
                <FaExternalLinkAlt></FaExternalLinkAlt> VIEW RÉSUMÉ
              </span>
              <svg className="glow-container">
                <rect
                  pathLength="100"
                  strokeLinecap="round"
                  className="glow-blur"
                ></rect>
                <rect
                  pathLength="100"
                  strokeLinecap="round"
                  className="glow-line"
                ></rect>
              </svg>
            </button>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default About;
