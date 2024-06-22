import { Helmet } from "react-helmet-async";
import BannerSection from "../shared/BannerSection";

const OurTeam = () => {
  return (
    <div>
      <Helmet>
        <title>Kester | OUR TEAM</title>
      </Helmet>
      <BannerSection
        subHeading={"home | our team"}
        heading={"our team"}
      ></BannerSection>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  my-20">
          <div className="lg:mx-0 mx-3">
            <div className="">
              <img
                className="bg-[#f6f6f6] px-8 pt-8"
                src="	https://themewant.com/products/wordpress/kester-baseball/wp-content/uploads/2023/09/2-410x480.jpg"
                alt=""
              />
              <p className="uppercase text-gray-500 mt-6 font-bold">
                FIRST BASE
              </p>
              <h2 className="uppercase  font-bold  mt-2 text-2xl hover:text-red-600">
                telstar top glider football
              </h2>
            </div>
          </div>
          <div className="lg:mx-0 mx-3">
            <div className="">
              <img
                className="bg-[#f6f6f6] px-8 pt-8"
                src="	https://themewant.com/products/wordpress/kester-baseball/wp-content/uploads/2023/09/9-410x480.jpg"
                alt=""
              />
              <p className="uppercase text-gray-500 mt-6 font-bold">
              DEFENDER
              </p>
              <h2 className="uppercase  font-bold  mt-2 text-2xl hover:text-red-600">
              TRISTIAN HOLME
              </h2>
            </div>
          </div>
          <div className="lg:mx-0 mx-3">
            <div className="">
              <img
                className="bg-[#f6f6f6] px-8 pt-8"
                src="	https://themewant.com/products/wordpress/kester-baseball/wp-content/uploads/2023/09/6-2-410x480.jpg"
                alt=""
              />
              <p className="uppercase text-gray-500 mt-6 font-bold">
              CATCHER
              </p>
              <h2 className="uppercase  font-bold  mt-2 text-2xl hover:text-red-600">
              HUGO STONES
              </h2>
            </div>
          </div>
          <div className="lg:mx-0 mx-3">
            <div className="">
              <img
                className="bg-[#f6f6f6] px-8 pt-8"
                src="https://themewant.com/products/wordpress/kester-baseball/wp-content/uploads/2023/09/7-410x480.jpg"
                alt=""
              />
              <p className="uppercase text-gray-500 mt-6 font-bold">
              CATCHER
              </p>
              <h2 className="uppercase  font-bold  mt-2 text-2xl hover:text-red-600">
              BLAKE BANNAN
              </h2>
            </div>
          </div>
          <div className="lg:mx-0 mx-3">
            <div className="">
              <img
                className="bg-[#f6f6f6] px-8 pt-8"
                src="https://themewant.com/products/wordpress/kester-baseball/wp-content/uploads/2023/09/8-410x480.jpg"
                alt=""
              />
              <p className="uppercase text-gray-500 mt-6 font-bold">
              CATCHER
              </p>
              <h2 className="uppercase  font-bold  mt-2 text-2xl hover:text-red-600">
              KOBY BROUGH
              </h2>
            </div>
          </div>
          <div className="lg:mx-0 mx-3">
            <div className="">
              <img
                className="bg-[#f6f6f6] px-8 pt-8"
                src="	https://themewant.com/products/wordpress/kester-baseball/wp-content/uploads/2023/09/1-410x480.jpg"
                alt=""
              />
              <p className="uppercase text-gray-500 mt-6 font-bold">
              CATCHER
              </p>
              <h2 className="uppercase  font-bold  mt-2 text-2xl hover:text-red-600">
              FINN ROSETTA
              </h2>
            </div>
          </div>
          <div className="lg:mx-0 mx-3">
            <div className="">
              <img
                className="bg-[#f6f6f6] px-8 pt-8"
                src="https://themewant.com/products/wordpress/kester-baseball/wp-content/uploads/2023/09/11-410x480.jpg"
                alt=""
              />
              <p className="uppercase text-gray-500 mt-6 font-bold">
              CATCHER
              </p>
              <h2 className="uppercase  font-bold  mt-2 text-2xl hover:text-red-600">
              ARCHIE STEAD
              </h2>
            </div>
          </div>
          <div className="lg:mx-0 mx-3">
            <div className="">
              <img
                className="bg-[#f6f6f6] px-8 pt-8"
                src="https://themewant.com/products/wordpress/kester-baseball/wp-content/uploads/2023/09/7-410x480.jpg"
                alt=""
              />
              <p className="uppercase text-gray-500 mt-6 font-bold">
              CATCHER
              </p>
              <h2 className="uppercase  font-bold  mt-2 text-2xl hover:text-red-600">
              DANIEL BENN
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
