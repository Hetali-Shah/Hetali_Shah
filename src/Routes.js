import React, { Component } from 'react';
import { Router, Scene, Modal, Actions, Drawer } from 'react-native-router-flux';
import { ROUTE_MAP, WINDOW } from './common/global';
import Splash from './screens/Splash';
import Home from './screens/Home';
import AppHeader from './components/AppHeader';
import SideMenu from './components/SideMenu';
import Education from './screens/Education';
import store from './redux/store';
import { routeIndexSet } from './redux/actions';

const onEnter = async (index, ignore = true) => {
  store.dispatch(routeIndexSet(index));
}

export default () => {
  return <Router>
    <Scene key="root" hideNavBar={true}>

      <Scene type="replace" index={0} key={ROUTE_MAP[0]} component={Splash}
             panHandlers={null} hideNavBar={true} initial  onEnter={() => onEnter(0)}/>

      <Scene type="replace" key="drawer" panHandlers={null} drawer contentComponent={SideMenu}
             drawerOpenRoute = 'DrawerOpen'
             drawerCloseRoute = 'DrawerClose'
             drawerToggleRoute = 'DrawerToggle'
             drawerPosition="left"
             drawerWidth={WINDOW.width - 50}
             navBar={(navigation) => <AppHeader navigation={navigation}/>}>

        <Scene type="replace" index={1} key={ROUTE_MAP[1]} component={Home} title={'Home'}
               panHandlers={null} hideNavBar={false} onEnter={() => onEnter(1)}/>

        <Scene type="replace" index={2} key={ROUTE_MAP[2]} component={Education} title={'Education'}
               panHandlers={null} hideNavBar={false} onEnter={() => onEnter(2)}/>

      </Scene>
    </Scene>
  </Router>;
};
