import images from "../../assets/images";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactTop">
        <img src={images.bgImage} alt="blog" />
        <div className="title">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="formContainer">
        <div className="left">
          <h3>Get in touch</h3>
          <div className="contactInfo">
            <p>Icon</p>
            <p>
              {" "}
              We are also active in social media. You can find us on below
              adresses..
            </p>
            <p>Icon gose here</p>
          </div>
          <div className="contactInfo">
            <p>Icon </p>
            <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
          </div>
          <div className="contactInfo">
            <p>Icon </p>
            <p>Opening Hour 8:00 AM – 10:00 PM</p> <p>Monday – Sunday</p>
          </div>
          <div className="contactInfo">
            <p>Call. +00 123 456 789 </p>
            <p>E-mail. hello@cakeart.com</p>
          </div>
        </div>
        <div className="right">
          <h3>Send a Message</h3>
          <p>Do you have anything in your mind to tell us?</p>
          <p>
            Please don’t hesitate to get in touch to us via our contact form.
          </p>
          <div className="formContact">
            <div className="inputfield">
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="inputfield">
              <input type="text" placeholder="Your Email" />
            </div>
            <div className="inputfield">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="inputfield">
              <textarea name="" placeholder="Your message" id=""></textarea>
            </div>
            <button>SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
