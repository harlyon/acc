import React from 'react';
import { Text } from "components";

const Footer = () => {
  return (
    <div className="bg-purple-900 flex flex-col items-center justify-end mt-[88px] p-[19px] w-full">
    <div className="flex flex-col items-start justify-start max-w-[1281px] mt-[54px] mx-auto md:px-5 w-full">
      <div className="flex flex-row gap-[19px] items-center justify-start w-[13%] md:w-full">
        <div className="w-1/4 h-1 mt-2 mb-3 bg-purple-A400"></div>
        <a href="javascript:" className="text-xl text-white-A700">
          <Text size="txtInterRegular20WhiteA700">Contact us</Text>
        </a>
      </div>
      <div className="flex flex-row items-start justify-between w-full md:grid sm:flex-col md:gap-10 mt-9">
        <Text
          className="leading-[140.00%] sm:text-4xl md:text-[38px] text-[40px] text-gray-100"
          size="txtInterBold40"
        >
          <>
            Have a project in mind?
            <br />
            Let&#39;s make it happen
          </>
        </Text>
        <Text
          className="leading-[150.00%] text-white-A700 text-xl"
          size="txtInterRegular20WhiteA700"
        >
          <span className="font-normal text-left text-white-A700 font-inter">
            <>
              22 Street Name, Suburb, 8000,
              <br />
              Cape Town, South Africa
              <br />
              +27 21 431 0001
              <br />
            </>
          </span>
          <a
            href="javascript:"
            className="font-normal text-left underline text-white-A700 font-inter"
          >
            enquirie@website.co.za
          </a>
        </Text>
      </div>
      <div className="flex md:grid md:gap-5 sm:flex-col flex-row sm:gap-10 sm:items-start items-center justify-between sm:mt-[30px] mt-[90px] w-full">
        <Text
          className="leading-[150.00%] text-white-A700 text-xl"
          size="txtInterRegular20WhiteA700"
        >
          <>
            Terms of service
            <br />
            Privacy policy
            <br />
            Impressum
          </>
        </Text>
        <Text
          className="leading-[150.00%] text-white-A700 text-xl"
          size="txtInterRegular20WhiteA700"
        >
          <>
            Facebook
            <br />
            Instagram
            <br />
            Twitter
          </>
        </Text>
        <Text
          className="leading-[150.00%] text-white-A700 text-xl"
          size="txtInterRegular20WhiteA700"
        >
          <>
            Github
            <br />
            Linkedin
            <br />
            Teams
          </>
        </Text>
        <Text
          className="leading-[150.00%] text-white-A700 text-xl"
          size="txtInterRegular20WhiteA700"
        >
          <>
            Youtube
            <br />
            Behance
            <br />
            Dribbble
          </>
        </Text>
        <Text
          className="leading-[150.00%] text-white-A700 text-xl"
          size="txtInterRegular20WhiteA700"
        >
          <>
            Explore open jobs
            <br />
            <br />
            ©2000—2023 Company Name
          </>
        </Text>
      </div>
    </div>
  </div>
  );
};

export default Footer;