import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <div>
      Private layout
      {props.children}
    </div>
  );
};

export default layout;
