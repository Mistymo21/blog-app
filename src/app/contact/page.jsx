import React from "react";
import styles from "./page.module.css";
import ContactImg from "../../../public/contact.png";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={ContactImg}
            alt="contact"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            placeholder="message"
            className={styles.textarea}
            rows="10"
          ></textarea>
          <Button url="" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
