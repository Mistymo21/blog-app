import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import fb from "../../../public/1.png";
import ig from "../../../public/2.png";
import x from "../../../public/3.png";
import yt from "../../../public/4.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div> 2024 my-blog. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src={fb}
          width={15}
          height={15}
          alt="my-blog facebook"
          className={styles.icon}
        />
        <Image
          src={ig}
          width={15}
          height={15}
          alt="my-blog instagram"
          className={styles.icon}
        />
        <Image
          src={x}
          width={15}
          height={15}
          alt="my-blog twitter"
          className={styles.icon}
        />
        <Image
          src={yt}
          width={15}
          height={15}
          alt="my-blog youtube"
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
