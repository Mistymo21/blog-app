import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import AboutImg from "../../../public/about-img.jpeg";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={AboutImg}
          alt="About-Image"
          className={styles.img}
          fill={true}
        />
        <div className={styles.imgText}>
          <h1 className={styles.title}>Digital StoryTellers</h1>
          <h2 className={styles.desc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            ullam suscipit soluta eaque minima tempora at incidunt quisquam
            velit error, et libero doloribus nobis itaque amet perspiciatis iste
            ea optio.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            neque voluptatum praesentium expedita obcaecati. Eveniet,
            necessitatibus, incidunt molestias provident quidem tempora eaque
            quod deserunt suscipit fugiat nisi iusto nostrum eligendi.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            molestiae provident pariatur dolore sequi id saepe reprehenderit
            assumenda eligendi sit quidem adipisci, sed iusto praesentium
            doloribus impedit ea ipsam alias!
            <br />
            <br />
            - Dynamic websites
            <br />
            <br />

            - Fast and Handy
            <br />
            <br />

            - Mobile App
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
