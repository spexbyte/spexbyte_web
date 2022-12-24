import { useState } from "react";

const ContactForm = () => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
      setWebDev("web development");
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
    try {
      setLoading(true);
      const res = await fetch(`api/contact`, {
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
        // alert(data.message);
        setLoading(false);
        setIsSuccess(true);
      }
      if (!res.ok) {
        setLoading(false);
        setIsSuccess(false);
        throw new Error("Submission failed. Contact us another way?");
      }

      setEmail("");
      setName("");
      setMessage("");
      setBranding("");
      setDesign("");
      setWebDev("");
    } catch (error) {
      setLoading(false);
      setIsSuccess(false);
      alert(error.message);
    }
  };
  return (
    <form onSubmit={onSubmitEnquiry}>
      {/* Formwrapper */}
      <div className="space-y-8">
        <div className="flex-col">
          <label
            className="block font-semibold text-xl xl:text-2xl"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Your full name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="border-b-2 px-2 text-lg border-black w-3/4 xl:w-1/4"
          />
        </div>
        <div className="flex-col">
          <label
            className="block font-semibold text-xl xl:text-2xl"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            placeholder="Your email address"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="border-b-2 px-2 text-lg border-black w-3/4 xl:w-1/4"
          />
        </div>
        <div className="flex-col space-y-2">
          <div className="flex space-x-2">
            <input
              type="checkbox"
              name="branding"
              id="branding"
              value={branding}
              onChange={onBrandChange}
              className="w-5"
            />
            <label className=" text-xl xl:text-2xl" htmlFor="branding">
              Branding
            </label>
          </div>
          <div className=" flex space-x-2">
            <input
              type="checkbox"
              name="ui/ux"
              value={design}
              onChange={onDesignChange}
              className="w-5"
              id="ui/ux"
            />
            <label className=" text-xl xl:text-2xl" htmlFor="ui/ux">
              UI/UX Design
            </label>
          </div>
          <div className="flex space-x-2">
            <input
              type="checkbox"
              name="webdev"
              id="webdev"
              value={webdev}
              onChange={onWebDevChange}
              className="w-5"
            />
            <label className=" text-xl xl:text-2xl" htmlFor="webdev">
              Web Development
            </label>
          </div>
        </div>
        <div className="flex-col">
          <label
            className="block font-semibold text-xl xl:text-2xl"
            htmlFor="message"
          >
            Tell us about your project
          </label>
          <textarea
            placeholder="I need a custom built ecommerce store with multiple payment gateways"
            name="message"
            id=""
            cols="30"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border-b-2 px-2 text-lg border-black w-3/4 xl:w-2/4"
          ></textarea>
        </div>
        <div className="w-full">
          <button
            className="border border-black py-4 px-20 text-lg xl:text-2xl max-w-md ml-auto"
            type="submit"
            role="submit"
          >
            {isLoading ? "SUBMITTING" : "SUBMIT"}
          </button>
          {isSuccess && (
            <p className="text-2xl mt-2 font-bold">
              Thanks for reaching out. You will here from us soon
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
