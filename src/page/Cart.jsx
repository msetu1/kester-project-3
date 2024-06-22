import { Helmet } from "react-helmet-async";

import BannerSection from "../shared/BannerSection";
import ImgSection from "../section/ImgSection";

const Cart = () => {
    return (
        <div>
            <Helmet>
      <title>Kester | CART
      </title>
      </Helmet>
           <BannerSection
           subHeading={"home | Cart"} heading={"cart"}
           ></BannerSection> 
           <div className="">
<ImgSection></ImgSection>
           </div>
        </div>
    );
};

export default Cart;