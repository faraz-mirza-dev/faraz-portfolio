import { Reveal } from "@/components/motion";
import { contactInfo } from "@/data/contact";
import { socialLinks } from "@/data/social";

export default function ContactSection() {
  return (
    <section className="contact">
      <Reveal className="container" delay={0.05}>
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Don&apos;t be shy!</h3>
                <p>
                  Feel free to get in touch with me. I am always open to
                  discussing new projects, creative ideas or opportunities to be
                  part of your visions.
                </p>
                <div className="contact-details">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-item">
                      <i className={`fa ${info.icon}`}></i>
                      <div className="contact-text">
                        <span className="contact-label">{info.label}</span>
                        <span className="contact-value">{info.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <ul className="social-links">
                  {socialLinks.map((social) => (
                    <li key={social.platform}>
                      <a
                        href={social.href}
                        title={social.label}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className={`fa ${social.icon}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="contact-form">
                <form className="contact-form-element">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="YOUR NAME"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-4">
                      <input
                        type="email"
                        name="email"
                        placeholder="YOUR EMAIL"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-4">
                      <input
                        type="text"
                        name="subject"
                        placeholder="YOUR SUBJECT"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        placeholder="YOUR MESSAGE"
                        rows={5}
                        required
                      ></textarea>
                      <button type="submit" className="button">
                        <span className="button-text">Send Message</span>
                        <span className="button-icon fa fa-send"></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
