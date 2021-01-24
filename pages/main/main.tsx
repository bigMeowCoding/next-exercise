import React, { FC } from "react";
import img from "../../assets/images/img.png";
import Image from "next/image";

const Main: FC = ( ) => {
  return (
    <>
      <Image src={img} alt="Picture of the author" width={500} height={500} />
      <div>main</div>
    </>
  );
};

export default Main;
