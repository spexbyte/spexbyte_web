import ContactForm from "./ContactForm";

const ContactComponents = () => {
  <section className="mt-10 flex flex-col items-center border">
    <div>
      <div>
        <h3 className="text-accent text-xl xl:text-3xl">CONTACT US</h3>
        <h2 className="text-3xl xl:text-5xl">Get In Touch</h2>
        <p className="font-light text-lg">
          Akwaaba! We are so glad you are here! Please tell us about your
          project by filling the form below or you can send us an email here{" "}
        </p>
      </div>
      <ContactForm />
    </div>
  </section>;
};

export default ContactComponents;
