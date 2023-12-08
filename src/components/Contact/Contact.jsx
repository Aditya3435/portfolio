import Head from "next/head";
import Link from "next/link";
import "./Contact.scss";
const Contact = () => {
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
                <h1 className="font-bold text-5xl">CONTACT ME</h1>
                <div className="group">
                  <input type="text" required />
                  <span className="highlight"></span>
                  <label>Your name</label>
                </div>
                <div className="group">
                  <input type="text" required />
                  <span className="highlight"></span>
                  <label>Your email</label>
                </div>
                <div className="group">
                  <textarea type="text" required />
                  <span className="highlight"></span>
                  <label>Your Messege</label>
                </div>

                <a className="send-btn text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
                  Send
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
