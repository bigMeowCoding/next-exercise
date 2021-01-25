import Link from "next/link";
import React, { FC } from "react";
import { GetStaticProps, NextPage } from "next";
import axios from "axios";

const HomePage: NextPage<{ posts: any }> = ({ posts }) => {
  console.log(posts);
  return (
    <div className='text-gray-900'>
      <Link href="/post/post">
        <a>post</a>
      </Link>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const posts = await axios.get("http://127.0.0.1:3000/api/getPost"); // 必须全名
  return {
    props: {
      posts: posts.data,
    },
  };
};
export default HomePage;
