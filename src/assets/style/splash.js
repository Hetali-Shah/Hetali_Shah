import { StyleSheet } from 'react-native';
import { WINDOW } from '../../common/global';
import StyleConfig from './config';

export default StyleSheet.create({
  contain: {
    flex:1,
    //width: WINDOW.width,
    backgroundColor: StyleConfig.darkBlue2,
    height: StyleConfig.screen.height,
  },
  rowView: {
    flex:1,
    height: WINDOW.height,
    justifyContent:'center',
    alignItems: 'center',
    marginBottom:StyleConfig.countPixelRatio(30)
  },
  textStyle:{
    paddingTop:StyleConfig.countPixelRatio(20),
    fontFamily: StyleConfig.boldItalic,
    fontSize: StyleConfig.fontSizeH2,
    color: StyleConfig.white2
  }

});
