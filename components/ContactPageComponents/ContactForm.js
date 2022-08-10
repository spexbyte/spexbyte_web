import { useState } from "react";

const ContactForm = () => {
  // declare form input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [branding, setBranding] = useState("");
  const [design, setDesign] = useState("");
  const [webdev, setWebDev] = useState("");

  // declare onChange handler functions for each input
  function onBrandChange(e) {
    if (e.target.checked) {
      setBranding("branding");
    } else {
      setBranding("");
    }
  }
  function onDesignChange(e) {
    if (e.target.checked) {
      setDesign("design");
    } else {
      setDesign("");
    }
  }
  function onWebDevChange(e) {
    if (e.target.checked) {
      setDesign("web development");
    } else {
      setWebDev("");
    }
  }

  // create form submit handler to send data to nodemailer on next server
  const onSubmitEnquiry = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please you cannot make an empty enquiry");
      return;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        branding,
        webdev,
        design,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message);
    }

    setEmail("");
    setName("");
    setMessage("");
    setBranding("");
    setDesign("");
    setWebDev("");
  };
  return (
    <form onSubmit={onSubmitEnquiry}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <div>
          <input
            type="checkbox"
            name="branding"
            value={branding}
            onChange={onBrandChange}
          />
          <label htmlFor="branding">Branding</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="ui/ux"
            value={design}
            onChange={onDesignChange}
          />
          <label htmlFor="design">UI/UX Design</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="webdev"
            value={webdev}
            onChange={onWebDevChange}
          />
          <label htmlFor="branding">Web Development</label>
        </div>
      </div>
      <div>
        <label htmlFor="message">Tell us about your project</label>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <button type="submit">Submit Enquiry</button>
    </form>
  );
};

export default ContactForm;
