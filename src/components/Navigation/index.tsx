import { Img, Text, Button } from 'components';
import React, {useState} from 'react';

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="flex flex-col items-center justify-center w-full bg-purple-800 md:px-5 shadow-bs1">
    <div className="flex flex-row items-center justify-between w-full h-20 gap-5 py-2 mx-auto bg-purple-800 max-w-7xl 8x-5 md:flex-col md:h-auto">
      <div className="my-1 header-row">
        <Img
          className="h-[30px] w-[100px]"
          src="images/img_signal.svg"
          alt="signal"
        />
        <div onClick={() => setToggleMenu(!toggleMenu)} className=" mobile-menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="flex flex-1 flex-row sm:hidden items-center justify-center max-w-[649px] w-full">
        <div className="flex flex-col items-start justify-start rounded-[18px] w-auto">
          <div className="bg-purple-800 flex flex-col items-center justify-center px-4 py-2 rounded-[18px] w-auto">
            <Text
              className="w-auto text-sm text-white-A700"
              size="txtInterBold14"
            >
              Services
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start rounded-[18px] w-auto">
          <div className="bg-purple-800 flex flex-col items-center justify-center px-4 py-2 rounded-[18px] w-auto">
            <Text
              className="w-auto text-sm text-white-A700"
              size="txtInterBold14"
            >
              Industries
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start rounded-[18px] w-auto">
          <div className="bg-purple-800 flex flex-col items-center justify-center px-4 py-2 rounded-[18px] w-auto">
            <Text
              className="w-auto text-sm text-white-A700"
              size="txtInterBold14"
            >
              Cases
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start rounded-[18px] w-auto">
          <div className="bg-purple-800 flex flex-col items-center justify-center px-4 py-2 rounded-[18px] w-auto">
            <Text
              className="w-auto text-sm text-white-A700"
              size="txtInterBold14"
            >
              Contact
            </Text>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-auto sm:hidden">
        <Button className="cursor-pointer font-bold min-w-[96px] text-center text-sm">
          Let’s Talk
        </Button>
      </div>


      <div
          className={`fixed z-40 w-full mt-11  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 mt-4 font-bold tracking-wider">
              <a href="#">
               Services
              </a>
              <a href="#">Industries</a>
              <a href="#">Cases</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>

    </div>
  </header>
  );
};

export default Navigation;