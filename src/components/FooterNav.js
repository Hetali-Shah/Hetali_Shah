import React, { Component } from 'react';
import { Footer, FooterTab, Button } from 'native-base';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FooterNavStyle } from '../assets/style';
import withRouteIndex from '../common/withRouteIndex';
import {ROUTE_MAP} from '../common/global';
import {AppIcon} from '../elements';


class FooterNav extends Component {

    constructor(props) {
        super(props);
        this.hideFooter = []
    }

    render () {
        const { routeIndex } = this.props;
        console.warn("In Footer", routeIndex)
        return (
            (routeIndex > -1 && this.hideFooter.indexOf(routeIndex) == -1) ? <Footer style={FooterNavStyle.footerMain}>
              <FooterTab style={FooterNavStyle.postGigFooterTab}>
                <Button vertical >
                  <AppIcon name={'md-call'} family={'Ionicons'} style={(routeIndex === 1) ? FooterNavStyle.footerSelectedIcon :  FooterNavStyle.footerUnSelectedIcon} />
                  <Text style={(routeIndex === 1) ? FooterNavStyle.selectedTextStyle :  FooterNavStyle.unselectedTextStyle}>Education</Text>
                </Button>
                <Button vertical onPress={() => {Actions[ROUTE_MAP[2]]()}}>
                  <AppIcon name={'laptop-chromebook'} family={'MaterialIcons'} style={(routeIndex === 2) ? FooterNavStyle.footerSelectedIcon :  FooterNavStyle.footerUnSelectedIcon} />
                  <Text style={(routeIndex === 2) ? FooterNavStyle.selectedTextStyle :  FooterNavStyle.unselectedTextStyle}>Work Experience</Text>
                </Button>
              </FooterTab>
            </Footer> : <View>
                <Text>joijo</Text>
            </View>
        )
    }
}

export default withRouteIndex(FooterNav);
