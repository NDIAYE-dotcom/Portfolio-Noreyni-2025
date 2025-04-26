import { services } from "../../Data";
import { RiWhatsappFill } from "react-icons/ri";
import './services.css'

const ServicesPage = () => {
    return (
      <section className="services section">
        <h2 className="section-title">
          My <span>Business</span>
        </h2>
  
        <div className="services-container container grid">
          {services.map(({ id, img, title, description,  link }) => {
            return (
              <article className="services-card" key={id}>
                <a href={link} className="services-img-wrapper">
                  <img src={img} alt={title} className="services-img" />
                </a>
                {/* Si tu souhaites afficher plus d'informations comme le titre, la description, etc., tu peux les ajouter ici */}
                <h3 className="services-title">{title}</h3>
                <p className="services-description">{description}</p>

                <a href={link} className="services-link">
                           <RiWhatsappFill className="services-icon" />
                           Discutons de votre projet
                           </a>
               
              </article>
            );
          })}
        </div>
      </section>
    );
  };
  
  export default ServicesPage;
  
