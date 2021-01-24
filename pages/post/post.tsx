import React from "react";
import { FC } from "react";
import Link from "next/link";
import style from "./post.module.scss";
import {NextPage} from "next";
interface Props {}

console.log(style);
const Tree: NextPage= () => {
  return (
    <>
      <article className={style.box_bb}>
        <div className={style.ccc}>post</div>
      </article>
      <Link href="/">返回</Link>
    </>
  );
};

export default Tree;
