import React from "react";

const sizeClasses = {
  txtInterBold40: "font-bold font-inter",
  txtInterRegular20: "font-inter font-normal",
  txtInterBold14: "font-bold font-inter",
  txtInterBold48: "font-bold font-inter",
  txtInterBold48Gray900: "font-bold font-inter",
  txtInterRegular20WhiteA700: "font-inter font-normal",
  txtInterRegular24: "font-inter font-normal",
  txtInterBold32: "font-bold font-inter",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular20Black900: "font-inter font-normal",
  txtInterBold24: "font-bold font-inter",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
