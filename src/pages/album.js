import Image from "next/image";
import React from "react";

const album = () => {
  return (
    <div>
      <h1>this image using img tag</h1>
      <img
        src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"
        width="100%"
        alt=""
      ></img>

      <h1>this image using image component</h1>
      <Image
        src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"
        width={500}
        layout="responsive"
        height={500}
      ></Image>
    </div>
  );
};

export default album;
