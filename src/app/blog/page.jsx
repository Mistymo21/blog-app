import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import imgDesc from "../../../public/bee.jpeg";


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',
    {cache: "no-store"}
  )

  if(!res.ok){
    throw new Error("Failed to fetch data");
  }
  return res.json();

}

const Blog = async () => {
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href="/blog/testId" className={styles.imageContainer} key={item.id}>
        <div className={styles.imageContainer}>
          <Image
            src={imgDesc}
            alt="pics"
            width={200}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt consequatur nesciunt deleniti. Corporis animi molestiae doloremque minima necessitatibus atque nobis ex! Aut quam quae voluptas deleniti ut unde accusamus tempora?</p>
        </div>
      </Link>
      ))}
      
    </div>
  );
};

export default Blog;
