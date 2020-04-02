import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Image
} from "react-native";
import { Button, Block, Text } from "../../components";
import { theme } from "../../constants";

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class HelloWorldApp extends Component {
  render() {
    const { navigation } = this.props;
    navigation.setOptions({
      headerRight: () => (
        <Icon.Button
          name="home"
          size={26}
          backgroundColor="transparent"
          color="white"
          onPress={() => navigation.navigate('browse')}
        />
      ),
    });
    return (
      <View style={{justifyContent: "center" }}>

        <Image source={require('../../assets/images/4.png')} style={{width: 400, height: 620}} />
        <Block padding={[0, theme.sizes.base * 2]} style={{marginTop: -250}}></Block>
        <Text h2 light center>Nullam consecteturaaaaaaaa Nulla vel egestas ante.
        Nullam consectetur lorem commodo felis aliquet feugiattttttttttttttttttttttttttttt. Czy wykazujesz przynajmniej jeden z tych objawów?
        </Text>
        <ScrollView style={{ marginVertical: theme.sizes.padding }}>
        <Block middle padding={[theme.sizes.base / 10, 10]}>
        <Button
              gradient
              onPress={() => navigation.navigate('kraj')}
            >
              <Text h4 center white>
                Tak
              </Text>
            </Button>
            <Button
              gradient
              onPress={() => navigation.navigate('obserwuj')}
            >
              <Text h4 center white>
                Nie
              </Text>
            </Button>
            </Block>
        </ScrollView>
      </View>
    );
  }
}
