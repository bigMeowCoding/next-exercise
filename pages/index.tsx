import Link from "next/link";
import React, { FC } from "react";

const HomePage: FC = () => {
  return (
    <div>
      <Link href="/post/post">post</Link>
    </div>
  );
};
export default HomePage;
