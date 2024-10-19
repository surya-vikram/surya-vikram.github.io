
import FadeInSection from './FadeInSection.jsx';
import { FaExternalLinkAlt } from "react-icons/fa";

function About(){
    return (
        <section className="about-section p-4 min-h-[100vh] flex flex-col justify-center items-center" id="about-section">
            <FadeInSection>
                <div className="about-container flex flex-col items-center text-[--color-1]">
                    <div className="sm:text-5xl text-3xl mb-20">
                        <h1>
                            <span className="rounded-lg p-4 font-bold text-black bg-white">ABOUT</span> ME
                        </h1>
                    </div>
                    <div>
                        <p className="w-3/4 sm:w-1/2 mx-auto text-justify mb-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatem temporibus quidem quas impedit officia fugiat officiis, accusamus nostrum at libero optio necessitatibus! Unde quam eaque cupiditate distinctio repellat in?
                        </p>
                    </div>
                    <div className=''>
    
                        <button class="group relative overflow-hidden rounded bg-white text-lg shadow py-3 px-12 resume-btn glow-effect button" data-glow-offset="true">
                            <div class="absolute inset-0 w-7 bg-purple-900 transition-all duration-[300ms] ease-out group-hover:w-full"></div>
                            <span class="relative text-black group-hover:text-white flex gap-6 items-center justify-center">
                            <FaExternalLinkAlt></FaExternalLinkAlt> VIEW RÉSUMÉ
                            </span>
                            <svg class="glow-container">
                                <rect pathLength="100" stroke-linecap="round" class="glow-blur"></rect>
                                <rect pathLength="100" stroke-linecap="round" class="glow-line"></rect>
                            </svg>
                        </button>
                    </div>
                </div>
            </FadeInSection>
        </section>
    )
}

export default About