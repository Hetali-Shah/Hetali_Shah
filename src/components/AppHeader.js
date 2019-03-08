import React, { Component } from 'react';
import {TouchableOpacity, View, Text, Image, SafeAreaView, Platform} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppHeaderStyle, StyleConfig } from '../assets/style';
import AppImages from '../assets/images';
import {ROUTE_MAP} from '../common/global';

class AppHeader extends Component {
  constructor(props) {
    super(props);
  }

  _toggleDrawer = () => {
    if(Actions.currentScene == 'DrawerOpen') {
      Actions.drawerClose();
    } else {
      Actions.drawerOpen();
    }
  }

  render() {
    const { navigation: { title, back = null } } = this.props;
    return (
      <SafeAreaView style={(Platform.OS == 'ios') ? {} :  AppHeaderStyle.appHeader}>
        <View style={AppHeaderStyle.mainView}>
          {
            back == null
              ? <TouchableOpacity style={AppHeaderStyle.menuButton} onPress={() => this._toggleDrawer()}>
                <Image style={AppHeaderStyle.menuImage} source={AppImages.burgerIconWhite}  />
              </TouchableOpacity>
              : <TouchableOpacity style={AppHeaderStyle.menuButton} onPress={() => Actions[ROUTE_MAP[back]]()}>
                <Image style={AppHeaderStyle.arrowImage} source={AppImages.backArrow}  />
              </TouchableOpacity>
          }
          <View style={AppHeaderStyle.titleView}>
            <Text style={(Platform.OS == 'ios') ? [AppHeaderStyle.titleText, {paddingTop: StyleConfig.countPixelRatio(7)}] : AppHeaderStyle.titleText}>
              {title}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default AppHeader;
