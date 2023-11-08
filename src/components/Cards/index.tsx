import React from "react";

import { Img, Text } from "components";

type Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "imageUrl" | "title" | "description"
> &
  Partial<{ imageUrl: string; title: string; description: string }>;

const Cards: React.FC<Props> = (
  props,
) => {

  return (
    <>
      <div className={props.className}>
        <div className="sm:h-auto h-full relative w-[399px] md:w-[unset] sm:w-full">
          <Img
            className="object-cover w-full h-full m-auto"
            alt="1280x960"
            src={props?.imageUrl}
          />
          <div className="absolute bg-gradient  bottom-[0] flex flex-col gap-4 inset-x-[0] items-start justify-end mx-auto p-6 sm:px-5 w-[399px] md:w-full">
            <div className="bg-purple-A400 h-1 w-[12%]"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
              size="txtInterBold32"
            >
              {props?.title}
            </Text>
            <Text
              className="leading-[150.00%] max-w-[351px] md:max-w-full text-base text-white-A700"
              size="txtInterRegular16"
            >
              {props?.description}
            </Text>
          </div>
        </div>
      </div>

    </>
  );
};

export default Cards;
