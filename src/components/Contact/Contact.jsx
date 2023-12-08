import {ref,push,child,update} from "firebase/database";
import { database } from "@/../firebase";
import "./Contact.scss";
import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); 
  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log(e.target);
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
  
  const handleSubmit = () => {
    let details = {
      name: name,
      email: email,
      message: message,
    };
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = details;
    return  update(ref(database), updates);
  };
  
  return (
    <div className="z-10 contact-form w-screen h-full" id="contact">
      <div className="container">
        <div className="inner">
          <div className="panel panel-left">
            <div className="panel-content">
              <div className="image-background"></div>
            </div>
          </div>
          <div className="panel panel-right" >
            <div className="panel-content">
              <div className="form">
                <h1 className="font-bold text-5xl max-sm:text-4xl max-sm:text-center">CONTACT ME</h1>
                <div className="group">
                  <input type="text" value={name} onChange={(e)=>handleInputChange(e)} id="name" required />
                  <span className="highlight"></span>
                  <label >Your name</label>
                </div>
                <div className="group">
                  <input type="text" value={email} onChange={(e)=>handleInputChange(e)} id="email" required />
                  <span className="highlight"></span>
                  <label>Your email</label>
                </div>
                <div className="group">
                  <textarea type="text" value={message} onChange={(e)=>handleInputChange(e)} id="message" required />
                  <span className="highlight"></span>
                  <label>Your Messege</label>
                </div>

                <div className="group">
                <button type="submit" onClick={()=>handleSubmit()} className="send-btn text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
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
