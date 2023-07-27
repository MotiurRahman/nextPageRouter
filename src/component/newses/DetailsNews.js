import Link from "next/link";
import React from "react";

const DetailsNews = ({ post }) => {
  // const { id, title, body } = post;
  const { _id, name, speciality } = post;
  return (
    <>
      <h1>
        <Link href={`post/${_id}`}>{name}</Link>
      </h1>
      <p>{speciality}</p>
    </>
  );
};

export default DetailsNews;
