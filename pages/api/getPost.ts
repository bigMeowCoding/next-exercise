import { GetStaticProps, NextApiHandler } from "next";
import axios from "axios";

const getPost: NextApiHandler = async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.write(
    JSON.stringify({
      code: 0,
      data: {},
    })
  );
  res.end();
};

export default getPost;
