import Head from 'next/head';
import Link from 'next/link';
import './Contact.scss'
const Contact = () => {
  return (
    <div id='contact' className='z-10 contact-form' >
      <div className="container">
        <div className="inner">
          <div className="panel panel-left">
            <div className="panel-content">
              <div className="image-background">
                {/* Add your image background content here */}
              </div>
            </div>
          </div>
          <div className="panel panel-right">
            <div className="panel-content">
              <div className="form">
                <h1>Contact me</h1>
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

                <a className="send-btn">Send</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu"></div>
    </div>
  );
};

export default Contact;
