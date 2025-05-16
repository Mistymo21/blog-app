import React from "react";
import "./globals.css";
import styles from "./page.module.css";
import Image from "next/image";
import Hero from "../../public/hero.png";
import Button from "@/components/Button/Button";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.desc}>
          Turning your idea into a reality is not easy. We help you to make it
          happen.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
        <Image
          src={Hero}
          alt="logo"
          width={400}
          height={400}
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default Home;
