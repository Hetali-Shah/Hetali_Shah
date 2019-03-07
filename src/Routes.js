import React, { Component } from 'react';
import { Router, Scene, Modal, Actions, Drawer } from 'react-native-router-flux';
import { ROUTE_MAP, getUser, WINDOW } from './common/global';
import Splash from './screens/Splash';
import Home from './screens/Home';

export default () => {
  return <Router>
      <Scene key="root" hideNavBar={true}>
        <Scene type="replace" index={0} key={ROUTE_MAP[0]} component={Splash}
               panHandlers={null} hideNavBar={true} initial />

        <Scene type="replace" index={1} key={ROUTE_MAP[1]} component={Home}
               panHandlers={null} hideNavBar={true} />
      </Scene>
  </Router>;
};
