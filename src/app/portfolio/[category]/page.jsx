import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import pexels from "../../../../public/download (1).png";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src={pexels} fill={true} alt="pix" className={styles.img} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src={pexels} fill={true} alt="pix" className={styles.img} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Lorem ipsum dolo</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis fuga architecto qui dolor distinctio sequi eum amet quaerat expedita vitae omnis, numquam aspernatur sint officiis ipsam magnam perferendis quis.</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src={pexels} fill={true} alt="pix" className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default Category;
