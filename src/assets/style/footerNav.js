import {StyleSheet} from 'react-native';
import StyleConfig from './config';

export default StyleSheet.create({
  footerMain: {
    backgroundColor: '#FFFFFF'
  },
  footerTab: {
    backgroundColor: StyleConfig.white,
    justifyContent: 'space-between',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: StyleConfig.white,
    shadowOffset: {height: 2, width: 2},
    elevation: 100,
    paddingBottom: StyleConfig.countPixelRatio(10)
  },
  footerButton: {
    backgroundColor: StyleConfig.white,
    margin: StyleConfig.countPixelRatio(10),
    height: StyleConfig.countPixelRatio(40),
    marginBottom: StyleConfig.countPixelRatio(10)
  },
  footerText: {
    fontSize: StyleConfig.fontSizeH8,
    color: StyleConfig.darkBlue,
    fontFamily: StyleConfig.bold
  },
  footerSelectedIcon: {
    fontSize: 20,
    color: StyleConfig.darkBlue
  },
  footerUnSelectedIcon: {
    fontSize: 20,
    color: StyleConfig.doveGray
  },
  postGigFooterTab: {
      borderWidth:1,
    backgroundColor: StyleConfig.white,
    justifyContent: 'space-between',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: StyleConfig.darkBlue,
    shadowOffset: {height: 2, width: 2},
  },
  selectedTextStyle: {
    color: StyleConfig.darkBlue,
  },
  unselectedTextStyle: {
    color: StyleConfig.doveGray,
  },
  footerTextSignIn:{
    fontSize: StyleConfig.fontSizeH8,
    color: StyleConfig.boulder,
    fontFamily: StyleConfig.bold
  }

});
