import ContactForm from "../components/ContactPageComponents/ContactForm";
import ContactComponents from "../components/ContactPageComponents/index";

const Contact = () => {
  return (
    <section className="m-4 xl:flex xl:justify-center xl:items-center xl:h-screen ">
      <div className="xl:w-sw ">
        <div className="">
          <h3 className="text-accent text-xl xl:text-3xl">CONTACT US</h3>
          <h2 className="text-3xl xl:text-5xl">Get In Touch</h2>
          <p className="font-light text-lg xl:text-2xl xl:w-2/4">
            Akwaaba! We are so glad you are here! Please tell us about your
            project by filling the form below or you can send us an email here{" "}
          </p>
        </div>
        <div className="my-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
