import Head from 'next/head';

import React from 'react';

import { Button } from 'antd';

const styles = require('../styles/Home.module.css');

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button>我是按钮，你是吗</Button>
    </div>
  );
}
