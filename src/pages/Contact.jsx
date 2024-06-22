import { Helmet } from "react-helmet-async";
import ContactSection from "../section/ContactSection";
import TouchSection from "../section/TouchSection";
import BannerSection from "../shared/BannerSection";


const Contact = () => {
    return (
        <div className="">
            <Helmet>
      <title>Kester | CONTACT
      </title>
      </Helmet>
            <BannerSection
            subHeading={'home | Contact'}
            heading={'contact'}
            ></BannerSection>
            <div className="max-w-7xl mx-auto">
<ContactSection></ContactSection>
<TouchSection></TouchSection>
            </div>
        </div>
    );
};

export default Contact;