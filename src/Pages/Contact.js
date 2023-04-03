import React from "react";
import { Layout } from "../Layout";
import ContactCard from "./Components/ContactCard";

function Contact() {
  return (
    <Layout class={"flex flex-col items-center overflow-auto  "}>
      <h1 className="text-white text-5xl mt-5">Contact Us</h1>
      <h2 className="text-slate-200 text-xl my-10 text-center">
        Get in touch and let me know how can i help
      </h2>
      <div className="flex flex-wrap justify-around">
        <ContactCard
          logo={require("../img/email-logo.png")}
          alt={"Email"}
          link={"mailto:pouyayoosefi1@gmail.com"}
          linkExplaination={"Email To"}
        >
          You can Email me via link bellow
        </ContactCard>

        <ContactCard
          logo={require("../img/linkedin-logo.png")}
          alt={"Lnkedin"}
          link={"https://www.linkedin.com/in/pouya-yoosefi-ghasemi"}
          linkExplaination={"Go to Linkedin"}
        >
          I'm also on Linkedin , chekckout my profile
        </ContactCard>

        <ContactCard
          logo={require("../img/gitHub-logo.png")}
          alt={"GitHub"}
          link={"https://github.com/PouyaYoosefiGhasemi/Weather-App.git"}
          linkExplaination={"Go to Repository"}
        >
          Let's see the source of this project on GitHub
        </ContactCard>
      </div>
    </Layout>
  );
}
export default Contact;
