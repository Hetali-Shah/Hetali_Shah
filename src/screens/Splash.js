import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Screen from '../elements/Screen';
import { Actions } from 'react-native-router-flux';
import {LayoutStyle, SplashStyle} from '../assets/style';
import AppImages from '../assets/images';

class Splash extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this._handleUserSession();
    }

    _handleUserSession = async () => {
        setTimeout(() => {
            Actions.home();
        }, 2000);
    }

    render() {
        return (
            <Screen scrollEnabled={true} style={SplashStyle.contain}>
                <View style={[LayoutStyle.screenContainer]}>
                    <View style={SplashStyle.rowView}>
                      <Image
                        //source={{uri:img}}
                        source={AppImages.userImage}
                      />
                        <Text style={SplashStyle.textStyle}>Hetali Shah</Text>
                    </View>
                </View>
            </Screen>
        );
    }
}

export default Splash;
