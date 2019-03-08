import { StyleSheet } from 'react-native';
import { WINDOW } from '../../common/global';
import StyleConfig from './config';

export default StyleSheet.create({
  container: {
    backgroundColor: StyleConfig.darkBlue,
    flex: 1,
    height: WINDOW.height,
    //width: WINDOW.width,
    //padding: StyleConfig.screenPaddingValue,
  },
  imageStyle:{
    height:StyleConfig.countPixelRatio(120),
    width:StyleConfig.countPixelRatio(120),
    borderRadius:StyleConfig.countPixelRatio(60),
    borderWidth:1,
    borderColor:StyleConfig.doveGray,
    resizeMode: 'cover',
    //backgroundColor:StyleConfig.white2
  },
  blankImageStyle:{
    height:StyleConfig.countPixelRatio(60),
    width:StyleConfig.countPixelRatio(60),
    borderRadius:StyleConfig.countPixelRatio(60),
    borderWidth:1,
    borderColor:StyleConfig.doveGray,
    resizeMode: 'cover',
    backgroundColor:StyleConfig.alto
  },
  firstView:{
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:StyleConfig.white,
    padding:StyleConfig.countPixelRatio(10),
    //paddingBottom:StyleConfig.countPixelRatio(20),
  },
  personNameTextStyle :{
   fontFamily:StyleConfig.bold,
   color:StyleConfig.black1,
   fontSize:StyleConfig.fontSizeH6
  },
  secondView:{
    padding: StyleConfig.screenPaddingValue,
    paddingTop:StyleConfig.countPixelRatio(20),
    flexDirection:'column'
  },
  skillView:{
    padding:StyleConfig.countPixelRatio(10),
    backgroundColor:StyleConfig.white,
    paddingBottom: StyleConfig.countPixelRatio(0),
    marginTop: StyleConfig.countPixelRatio(0),
    marginBottom: StyleConfig.countPixelRatio(2),
    borderRadius: StyleConfig.countPixelRatio(5)
  },
  yellowText:{
    padding:StyleConfig.countPixelRatio(5),
    top: -StyleConfig.countPixelRatio(2),
    zIndex: 999,
    color:StyleConfig.black1,
    fontFamily:StyleConfig.bold,
    fontSize:StyleConfig.fontSizeH6
  },
  yellowTextView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleTextView:{
    backgroundColor:StyleConfig.turbo,
    flexDirection: 'row',
    alignItems: 'center',
    top: -StyleConfig.countPixelRatio(20),
    borderRadius:StyleConfig.countPixelRatio(20),
    paddingHorizontal: StyleConfig.countPixelRatio(40),
    height:StyleConfig.countPixelRatio(40),
    justifyContent:'center'
  },
  dataText: {
    color: StyleConfig.black1,
    fontFamily: StyleConfig.regular,
    fontSize: StyleConfig.fontSizeH6,
  },
  dataView:{
    paddingBottom: StyleConfig.countPixelRatio(10)
  },
  lineView:{
    borderTopWidth: 2,
    borderTopColor:StyleConfig.doveGray
  },
  locationText:{
    color: StyleConfig.black1,
    fontFamily: StyleConfig.bold,
    fontSize: StyleConfig.fontSizeH6,
    textAlign: 'left',
    // width:StyleConfig.countPixelRatio(200),
    flexWrap: 'wrap'
  },
  tagsRow: {
    marginVertical: StyleConfig.countPixelRatio(10),
    flexWrap: 'wrap',
    flexDirection:'row',
    paddingLeft: StyleConfig.countPixelRatio(10)
  },
})
