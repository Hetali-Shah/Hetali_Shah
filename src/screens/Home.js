import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Screen } from '../elements'
import { HomeStyle } from '../assets/style';
import {Actions} from "react-native-router-flux";
import {ROUTE_MAP} from '../common/global';

export default class Home extends  Component {
  render() {
    return (
      <Screen style={HomeStyle.container}
              disableKBDismissScroll={true}
              keyboardShouldPersistTaps='always'
              enableAutoAutomaticScroll={false}>
        <View>
          <View style={HomeStyle.firstView}>
            <Image
              style={HomeStyle.imageStyle}
              //source={{uri:img}}
              //source={HomeStyle.person1}
            />
          </View>

          <View style={HomeStyle.yellowTextView}>
            <View style={HomeStyle.middleTextView}>
              <TouchableOpacity  onPress={() => {Actions[ROUTE_MAP[2]]()}}>
              <Text style={HomeStyle.yellowText}>Hetali Shah</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={HomeStyle.secondView}>

            <View style={HomeStyle.skillView}>
              <View style={HomeStyle.dataView}>
                <Text style={HomeStyle.dataText}>Career Objectives</Text>
              </View>
              <View style={HomeStyle.lineView}>

              </View>
              <View style={HomeStyle.tagsRow}>
                <Text style={HomeStyle.locationText}>
                  To be a self motivated next generation leader
                  with the ability to adapt challenging  jobs and to work with the team to achieve
                  the goals of the organization which can lead to the extreme success.
                </Text>
              </View>
            </View>

          </View>
        </View>
      </Screen>
    )
  }
}
