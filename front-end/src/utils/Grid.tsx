import React from "react";

type Props = {
  children: React.ReactNode;
};

function Grid({ children, ...other }: Props) {
  return (
    <div
      className="max-w-96 mx-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-16 gap-8"
      {...other}
    >
      {children}
    </div>
  );
}

export default Grid;
