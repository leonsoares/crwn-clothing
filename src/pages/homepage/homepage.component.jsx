import React from 'react';

import Directory from '../../components/directory/directory.component';
import {HomePageContainer} from './homepage.styles'

// import './homepage.styles.scss';

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

/* Before styled components library: \/
  const HomePage = () => (
    <div className='homepage'>
      <Directory />
    </div>
  );
*/


export default HomePage;
