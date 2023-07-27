import React from "react";
import BaseLayout from "@/component/Layout/BaseLayout";
import Head from "next/head";
import News from "@/component/newses/News";
import { useGetUsersQuery } from "./Redux/API/api";
import styles from "@/styles/Home.module.css";
import { useSession } from "next-auth/react";
import auth from "@/firebaes/firebase.auth";
import { useAuthState } from "react-firebase-hooks/auth";

const HomePage = ({ allPosts }) => {
  const { data, isLoading, error } = useGetUsersQuery();
  const { data: session } = useSession();

  const [user, loading] = useAuthState(auth);

  // const DynamicHeader = dynamic(() => import("../components/header"), {
  //   loading: () => <p>Loading...</p>,
  // });
  return (
    <div>
      <Head>
        <title>Next Head</title>
        <meta name="home apge" description="this is next home page" />
      </Head>
      <h1 className={styles.heading}>
        {session?.user.name} Email: {session?.user.email}
      </h1>

      {user && <h1>Email: {user.email}</h1>}

      <News allPosts={data}></News>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const repo = await res.json();
//   return { props: { allPosts: repo } };
// };

export const getServerSideProps = async () => {
  //const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await fetch("http://localhost:3000/api/news");
  const repo = await res.json();
  return { props: { allPosts: repo.data } };
};
