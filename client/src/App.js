import React from 'react';
import axios from 'axios';
import MobileLayout from './components/MobileLayout';
import DesktopLayout from './components/DesktopLayout';
import { BrowserView, CustomView, isMobile, isTablet } from 'react-device-detect';

function App(props) {
  return (
    <>
      <BrowserView>
        <DesktopLayout />
      </BrowserView>
      <CustomView condition={isMobile || isTablet}>
        <MobileLayout />
      </CustomView>
    </>
  );
}

export default App;
