import React from "react";
import Slider from "react-slick";
import { Button, Img, Text, List } from "components";
import Cards from "components/Cards";
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import Brands from "components/Brands";

import { slideSettings } from "utils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  const [slideData, setSlideData] = React.useState([]);

  React.useEffect(() => {
    showSlideData();
  }, []);

  const showSlideData = () => {
    try {
      fetch("https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws")
        .then((response) => response.json())
        .then((json) => {
          // Did this to showcase the slider
          const duplicatedData = [...json, ...json, ...json];
          setSlideData(duplicatedData);
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-start mx-auto border-solid bg-white-A700 font-inter">
        <Navigation />
        <div className="h-[600px]

         sm:px-0 relative w-full">
          <Img
            className="h-[600px] m-auto object-cover w-full"
            src="images/img_heroimage.png"
            alt="heroimage"
          />
          <div className="relative bottom-[64%] left-45 flex flex-col items-start justify-start max-w-7xl mt-[83px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[27px] items-start justify-start w-full">
              <div className="flex flex-col items-center justify-start pr-[3px] pt-[3px]">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-gray-50"
                  size="txtInterBold48"
                >
                  Live with Confidence
                </Text>
              </div>
              <Text
                className="leading-[150.00%] text-gray-100 text-xl w-full"
                size="txtInterRegular20"
              >
                José Mourinho brings confidence to pan-African <br /> Sanlam campaign.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-end w-auto ml-0 mt-11">
              <Button
                className="cursor-pointer font-bold min-w-[127px] rounded-[20px] text-center text-sm"
                color="purple_800"
              >
                View project
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-7xl mt-[83px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-row gap-5 items-center justify-start w-[16%] md:w-full">
              <div className="bg-purple-A400 h-1 mb-2.5 mt-[15px] w-[21%]"></div>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterRegular24"
              >
                What we do
              </Text>
            </div>
            <Text
              className="leading-[140.00%] mt-[45px] text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-full"
              size="txtInterBold48Gray900"
            >
              We offer a complete range of bespoke design and development
              services to help you turn your ideas into digital masterpieces
            </Text>
            <List
              className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[54px] w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-start justify-start flex-1 w-full">
                <Img
                  className="w-16 h-16"
                  src="images/img_webdevicon.svg"
                  alt="webdevicon"
                />
                <div className="h-[30px] md:h-[83px] mt-[53px] relative w-[74%]">
                  <Text
                    className="m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterBold24"
                  >
                    Web development
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] mt-[62px] text-black-900 text-xl w-full"
                  size="txtInterRegular20Black900"
                >
                  We use cutting-edge web development technologies to help our
                  clients fulfill their business goals through functional,
                  reliable solutions.
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-[52px] items-start justify-start w-full">
                <Img
                  className="w-16 h-16"
                  src="images/img_uxicon.svg"
                  alt="uxicon"
                />
                <Text
                  className="leading-[120.00%] text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                  size="txtInterBold24"
                >
                  <>
                    User experience <br />& design
                  </>
                </Text>
                <Text
                  className="leading-[150.00%] text-black-900 text-xl w-full"
                  size="txtInterRegular20Black900"
                >
                  Our complete web design services will bring your ideas to life
                  and provide you with a sleek, high-performing product that
                  elevates your business.
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start flex-1 w-full">
                <Img
                  className="w-16 h-16"
                  src="images/img_appdevicon.svg"
                  alt="appdevicon"
                />
                <Text
                  className="mt-[53px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInterBold24"
                >
                  Mobile app development
                </Text>
                <Text
                  className="leading-[150.00%] mt-[62px] text-black-900 text-xl w-full"
                  size="txtInterRegular20Black900"
                >
                  Our extensive mobile development experience allows us to
                  create custom native and cross-platform iOS and Android mobile
                  solutions for our clients.
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start flex-1 w-full">
                <Img
                  className="w-16 h-16"
                  src="images/img_webdevicon.svg"
                  alt="blockchainicon"
                />
                <Text
                  className="mt-[50px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInterBold24"
                >
                  Blockchain solutions
                </Text>
                <Text
                  className="leading-[150.00%] mt-[65px] text-black-900 text-xl w-full"
                  size="txtInterRegular20Black900"
                >
                  We conduct market research to determine the optimal
                  blockchain-based solutions to help you grow your company and
                  achieve your business goals.
                </Text>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1279px] mt-[52px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[59px] items-start justify-start w-full">
            <div className="flex flex-row gap-5 items-center justify-start w-[15%] md:w-full">
              <div className="bg-purple-A400 h-1 mb-[13px] mt-[7px] w-[22%]"></div>
              <Text
                className="text-xl text-black-900"
                size="txtInterRegular20Black900"
              >
                Case studies{" "}
              </Text>
            </div>

            <List
              className="sm:flex-col flex-row gap-[41px] sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <Slider {...slideSettings}>
              {slideData.map((props, index) => (
                <React.Fragment key={`Cards${index}`}>
                  <Cards
                    className="bg-white-A700 flex flex-1 flex-col h-[399px] md:h-auto items-start justify-start shadow-bs w-full"
                   {...props}
                  />
                </React.Fragment>
              ))}
               </Slider>
            </List>

          </div>
        </div>
        <Brands />
        <Footer />
      </div>
    </>
  );
};
export default Home;
