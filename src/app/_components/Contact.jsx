import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import contactData from "../_data/contactData.json";
import sections from "../_data/sections.json";

const iconMap = {
  phone: FaPhoneAlt,
  email: FaEnvelope,
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  github: FaGithub,
};

function Contact() {
  return (
    <div className="lg:px-42 px-8 ">
      <SectionTitle title={sections.contact.title} />
      {/* <div className='w-1/2 '>
                    <Image alt='cv' src={'/cv.png'} width={1200} height={900} className='w-3/4 border-5 rounded-xl border-brand'></Image>
                </div> */}
      <div className="flex flex-col md:flex-row lg:flex-row gap-6 md:gap-8 lg:justify-between lg:items-center flex-wrap">
        {contactData.map((contact) => {
          const IconComponent = iconMap[contact.icon];
          return (
            <a href={contact.href}>
              <div
                key={contact.id}
                className="flex gap-5 items-center flex-shrink-0"
              >
                <a
                  className="rounded-full p-3 flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(161deg, #1f1238 0%, #8750F7 100%)",
                  }}
                >
                  {IconComponent && <IconComponent />}
                </a>
                <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold">
                  {contact.label}
                </h2>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
