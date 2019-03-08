import { StyleSheet, Platform } from 'react-native';
import { WINDOW } from '../../common/global';
import StyleConfig from './config';

export default StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor: StyleConfig.darkBlue2,
    // height: StyleConfig.headerHeight,
    padding: (Platform.OS == 'ios') ? 0 : StyleConfig.countPixelRatio(5)
  },
  menuImage: {
    height: StyleConfig.countPixelRatio(12),
    width: StyleConfig.countPixelRatio(20),
    resizeMode: 'stretch'
  },
  arrowImage: {
    marginTop: -StyleConfig.countPixelRatio(4),
    height: StyleConfig.countPixelRatio(20),
    width: StyleConfig.countPixelRatio(20),
    resizeMode: 'stretch'
  },
  menuButton: {
    paddingTop: StyleConfig.countPixelRatio(13),
    height: StyleConfig.countPixelRatio(40),
    width: StyleConfig.countPixelRatio(22),
    marginLeft: StyleConfig.countPixelRatio(10)
  },
  titleView: {
    marginLeft: StyleConfig.countPixelRatio(30),
  },
  titleText: {
    //paddingTop: StyleConfig.countPixelRatio(6),
    color: StyleConfig.white,
    fontFamily: StyleConfig.medium,
    fontSize: StyleConfig.fontSizeH2
  },
  appHeader: {
    paddingTop: StyleConfig.countPixelRatio(22),
  },
});
