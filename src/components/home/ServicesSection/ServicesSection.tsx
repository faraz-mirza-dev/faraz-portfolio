import { Reveal } from "@/components/motion";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="services">
      <Reveal className="container" delay={0.05}>
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">Services</h2>
            <div className="services-grid">
              {services.length === 0 ? (
                <p className="text-center">
                  No services available at the moment.
                </p>
              ) : (
                services.map((service) => (
                  <div key={service.id} className="service-card">
                    <i className={`fa ${service.icon}`}></i>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
