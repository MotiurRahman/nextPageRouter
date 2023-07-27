import React from "react";

const postDetails = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default postDetails;
/*
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { postId: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { postId } = context.params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const repo = await res.json();
  return { props: { post: repo } };
};
*/

export const getServerSideProps = async (context) => {
  const { postId } = context.params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const repo = await res.json();
  return { props: { post: repo } };
};
