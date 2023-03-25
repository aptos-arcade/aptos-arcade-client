import React from 'react';

import Layout from '@/components/Layout';
import Game from '@/components/Game';
import Header from '@/components/Header';
import Fighters from '@/components/Fighters';

export default function Home() {

  return (
      <Layout>
          <Header />
          <Fighters />
          <Game />
      </Layout>
  )
}
