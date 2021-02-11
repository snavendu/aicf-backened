import React from 'react';

import './Home.less';
import AppLayout from '@layout/app';

type Props = {};

const Home: React.FC<Props> = () => {
  return (
    <AppLayout>
      <div className="home">
        <h1>Welcome to All India Chess Federation</h1>
      </div>
    </AppLayout>
  );
};

export default Home;
