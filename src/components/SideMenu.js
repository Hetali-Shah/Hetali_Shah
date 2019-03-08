import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image, SafeAreaView, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SideMenuStyle } from '../assets/style';
import AppImages from '../assets/images/index';
import withRouteIndex from '../common/withRouteIndex';
import { ROUTE_MAP } from '../common/global';

class SideMenu extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        const { user, routeIndex } = this.props;
        return(
            <SafeAreaView style={SideMenuStyle.mainView}>
                <View style={SideMenuStyle.mainView}>
                    <View style={SideMenuStyle.subView}>
                        <View style={SideMenuStyle.userView}>
                            <View style={SideMenuStyle.anonyImageView}>
                                <Image style={SideMenuStyle.anonyImage} source={AppImages.unvisibleWhiteEye} />
                            </View>
                            <Text style={SideMenuStyle.userText}>
                                {'Anonymous'}
                            </Text>
                            <TouchableOpacity onPress={() => Actions.drawerClose()}>
                                <Image style={SideMenuStyle.closeImage} source={AppImages.closeWhite} />
                            </TouchableOpacity>
                        </View>
                        <View style={SideMenuStyle.menuItemView}>
                            <View style={[SideMenuStyle.menuItemSubView, routeIndex == 1 ? SideMenuStyle.menuItemSubViewActive : {}]}>
                                <TouchableOpacity
                                    style={SideMenuStyle.menuItemButton}
                                    onPress={() => {Actions[ROUTE_MAP[7]]()}}>
                                    {/*<Image style={SideMenuStyle.iconMenuImages} source={AppImages.settingsIcon} />*/}
                                    <Text style={SideMenuStyle.menuItemText}>
                                        Skills
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default (withRouteIndex(SideMenu));
