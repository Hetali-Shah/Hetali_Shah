import { StyleSheet, Platform, Dimensions } from 'react-native';
import { WINDOW } from '../../common/global';
import StyleConfig from './config';

export default StyleSheet.create({
    mainView: {
        flex:1,
        backgroundColor: StyleConfig.darkBlue2,
    },
    subView: {
        paddingTop: Platform.OS == 'ios' ? 0 : StyleConfig.countPixelRatio(25)
    },
    userView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: StyleConfig.countPixelRatio(70),
        backgroundColor: StyleConfig.brilliantRose,
        paddingHorizontal: StyleConfig.getScreenPadding,
        width: '100%',
        justifyContent: 'space-between'
    },
    anonyImageView: {
        justifyContent: 'center',
        width:'15%',
        height: StyleConfig.countPixelRatio(40),
        backgroundColor: StyleConfig.doveGray,
        borderRadius: StyleConfig.countPixelRatio(25)
    },
    anonyImage: {
        alignSelf: 'center'
    },
    closeImage: {
        height: StyleConfig.countPixelRatio(22),
        resizeMode: 'stretch',
    },
    userText: {
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.white,
        fontFamily: StyleConfig.regular,
        marginLeft: StyleConfig.countPixelRatio(5),
        width:'60%',
        alignItems: 'center'
    },
    menuItemText: {
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.white,
        fontFamily: StyleConfig.medium,
        marginLeft: StyleConfig.countPixelRatio(35),
        width: StyleConfig.countPixelRatio(220)
    },
    iconMenuImages: {
        height: StyleConfig.countPixelRatio(20),
        width: StyleConfig.countPixelRatio(20),
        resizeMode: 'stretch'
    },
    menuItemView: {
        paddingHorizontal: StyleConfig.countPixelRatio(10),
        marginTop: StyleConfig.countPixelRatio(30),
    },
    menuItemSubView: {
        paddingVertical: StyleConfig.countPixelRatio(18),
        paddingLeft: StyleConfig.countPixelRatio(10),
    },
    menuItemSubViewInfo: {
        paddingVertical: StyleConfig.countPixelRatio(13),
        paddingLeft: StyleConfig.countPixelRatio(5),
    },
    menuItemButton: {
        flexDirection: 'row'
    },
    menuItemSubViewActive: {
        backgroundColor: StyleConfig.lightGray,
        borderRadius: StyleConfig.countPixelRatio(5),
    }
});
