import { Reveal } from "@/components/motion";
import { contactInfo } from "@/data/contact";
import { socialLinks } from "@/data/social";

export default function ContactInfo() {
  return (
    <Reveal className="col-12 col-lg-5 contact-sidebar" delay={0.05}>
      <h3 className="text-uppercase contact-sidebar__title ft-wt-600 mb-0 pb-3">
        Don&apos;t be shy !
      </h3>
      <p className="open-sans-font contact-sidebar__intro mb-0">
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </p>

      <div className="contact-sidebar__details">
        {contactInfo.map((info, index) => (
          <div key={index} className="contact-info-row open-sans-font">
            <i
              className={`fa ${info.icon} contact-info-row__icon`}
              aria-hidden
            />
            <div className="contact-info-row__body">
              <span className="contact-info-row__label">{info.label}</span>
              {info.href ? (
                <a href={info.href} className="contact-info-row__value">
                  {info.value}
                </a>
              ) : (
                <span className="contact-info-row__value">{info.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <ul className="social list-unstyled contact-sidebar__social pt-1 mb-0 mb-lg-5">
        {socialLinks.map((social) => (
          <li key={social.platform} className={social.platform.toLowerCase()}>
            <a
              title={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              <i className={`fa ${social.icon}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
