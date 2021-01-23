import React from "react";
import { FC } from "react";
import Link from "next/link";

interface Props {}

const Tree: FC<Props> = () => {
  return (
    <>
      <div>post</div>
      <Link href="/">返回</Link>
    </>
  );
};

export default Tree;
