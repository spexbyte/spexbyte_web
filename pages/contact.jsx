import dynamic from "next/dynamic";

const ContactForm = dynamic(() =>
  import("../components/ContactPageComponents/ContactForm")
);
import Container from "../components/container";

const Contact = () => {
  return (
    <>
      <Container title="Contact - Spexbyte Digital - Freelance Digital Agency" />
      <section className="m-4 xl:mt-20 flex justify-center ">
        <div className="xl:w-sw">
          <div>
            <h3 className="text-accent text-xl xl:text-3xl">CONTACT US</h3>
            <h2 className="text-3xl xl:text-5xl">Get In Touch</h2>
            <p className="font-light text-lg xl:text-2xl xl:w-2/4">
              Akwaaba! We are excited to learn more about your project and how
              we can help. Please take a moment to fill out the form below and
              tell us about your project. We will be in touch shortly to discuss
              how we can work together to bring your ideas to life.
            </p>
          </div>
          <div className="my-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
