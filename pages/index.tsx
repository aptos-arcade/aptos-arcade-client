import React from 'react';

import Layout from '@/components/Layout';
import Game from '@/components/Game';
import Header from '@/components/Header';
import Fighters from '@/components/Characters';

export default function HomePage() {

  return (
      <Layout>
          <Header />
          <Fighters />
          <Game />
      </Layout>
  )
}
