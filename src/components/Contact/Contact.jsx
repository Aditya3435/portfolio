import { ref, push, child, update } from "firebase/database";
import { database } from "@/../firebase";
import "./Contact.scss";
import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "message") {
      setMessage(value);
    }
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async () => {
    try {
      if (name == "") {
        setSubmitMessage("Please enter your name!")
      }
      else if (email == "" || !validateEmail(email)) {
        setSubmitMessage("Please enter correct email!");
      }
      else if (message == "") {
        setSubmitMessage("Message can't be empty!")
      }
      else {
        let details = {
          name: name,
          email: email,
          message: message,
        };

        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = details;

        await update(ref(database), updates);

        setName("");
        setEmail("");
        setMessage("");
        setSubmitted(true);
        setSubmitMessage("Messege sent ✅")
      }

    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <div className="z-10 contact-form w-screen h-full" id="contact">
      <div className="container">
        <div className="inner">
          <div className="panel panel-left">
            <div className="panel-content relative" data-aos="zoom-in">
              <div className="absolute top-1/2 left-1/3 text-3xl text-foreground max-md:hidden">Feel free to drop a message :)</div>
              <div className="image-background"></div>
            </div>
          </div>
          <div className="panel panel-right" >
            <div className="panel-content">
              <div className="form">
                <h1 className="font-bold text-5xl max-sm:text-4xl max-sm:text-center">CONTACT ME</h1>
                <div className="group">
                  <input type="text" value={name} onChange={(e) => handleInputChange(e)} id="name" required />
                  <span className="highlight"></span>
                  <label >Your name</label>
                </div>
                <div className="group">
                  <input type="email" value={email} onChange={(e) => handleInputChange(e)} id="email" required />
                  <span className="highlight"></span>
                  <label>Your email</label>
                </div>
                <div className="group">
                  <textarea type="text" value={message} onChange={(e) => handleInputChange(e)} id="message" required />
                  <span className="highlight"></span>
                  <label>Your Messege</label>
                </div>

                <div className="group w-full flex items-center justify-between">
                  {<div className="text-background-end max-sm:text-foreground">{submitMessage}</div>}
                  <button type="submit" onClick={() => handleSubmit()} className={`send-btn text-background-end border border-gray-500 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${submitted && 'hidden'}`}>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
