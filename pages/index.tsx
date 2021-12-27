import React from "react";
import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button size="xl">Welcome</Button>
    </div>
  );
};

export default Home;
