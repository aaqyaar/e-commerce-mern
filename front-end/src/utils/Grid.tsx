import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Grid({ children, ...other }: Props) {
  return (
    <div
      className={`${
        "max-w-96 mx-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-0 md:gap-16 gap-8" +
        other.className
      }`}
      {...other}
    >
      {children}
    </div>
  );
}

export default Grid;
