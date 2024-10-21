import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import FadeInSection from "./FadeInSection";

function Contact() {
  return (
    <section className="contact-section py-20 px-4" id="contact-section">
      <div className="flex flex-col items-center">
        <h1 className="contact-header text-6xl font-bold text-center">
          GET IN TOUCH
        </h1>
        <FadeInSection>
          <ul className="contact-icons py-16 flex justify-evenly sm:gap-14 gap-5 text-5xl">
            <li className="hover:-translate-y-4 transition-all duration-300 hover:shadow-xl rounded-full hover:shadow-gray-900">
              <FaGithub></FaGithub>
            </li>

            <li className="hover:-translate-y-4 transition-all duration-300 hover:shadow-xl rounded-full hover:shadow-gray-900">
              <SiLeetcode></SiLeetcode>
            </li>

            <li className="hover:-translate-y-4 transition-all duration-300 hover:shadow-xl rounded-full hover:shadow-gray-900">
              <MdAlternateEmail></MdAlternateEmail>
            </li>

            <li className="hover:-translate-y-4 transition-all duration-300 hover:shadow-xl rounded-md hover:shadow-gray-900">
              <FaLinkedin></FaLinkedin>
            </li>
          </ul>
        </FadeInSection>
      </div>
    </section>
  );
}

export default Contact;
