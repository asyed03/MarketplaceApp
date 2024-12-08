import React from "react";
import coinIcon from "../../../public/images/coin-icon.svg";
import Image from "next/image";

export interface CardProps extends React.ComponentPropsWithRef<"div"> {
  width?: number;
  title: string;
  subtitle?: string;
}
export default function Card(props: CardProps) {
  const { width, title, subtitle, className, children, ...otherProps } = props;
  return (
    <div
      className={`flex flex-col ${
        width ? `w-${width}` : "w-32"
      } items-center gap-1 p-3 relative ${className}`}
      {...otherProps}
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && (
        <h2 className="flex text-xl justify-center items-center gap-1">
          {subtitle}
        </h2>
      )}
      {children}
    </div>
  );
}
