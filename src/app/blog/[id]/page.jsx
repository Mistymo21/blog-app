import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import pexel from "../../../../public/download (1).png";
import { notFound } from "next/navigation";

async function getData( id ) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
   return notFound()
  }
  return res.json();
}
const BlogPost = async ({ params }) => {
  const data =  getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quaerat culpa enim sapiente. Suscipit dolores vero inventore,
            consectetur eos nisi corrupti aliquid explicabo quidem minus
            voluptates repellat ipsam perspiciatis. Voluptates.
          </p>
          <div className={styles.author}>
            <Image
              src={pexel}
              alt="ered"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Dee</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src={pexel} alt="eere" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          commodi sed, tempore a temporibus aut expedita iure debitis quo veniam
          soluta voluptas doloribus excepturi, unde maxime iusto cupiditate!
          Ipsa, tempore.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cum
          quidem laudantium eum nobis nemo numquam error, debitis illo vel
          tempora autem accusantium, vero ratione quas sapiente consequuntur,
          aliquid inventore?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugit
          iusto incidunt. Porro sequi harum iusto, blanditiis, omnis alias modi
          voluptatum eaque, assumenda animi debitis quis voluptatibus sint autem
          eligendi.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
