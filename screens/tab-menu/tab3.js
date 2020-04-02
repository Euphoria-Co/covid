import React, { Component } from 'react';

import {
    View,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
  
import { Block, Text } from "../../components";
import { theme } from "../../constants";
import { map } from "../../constants";

class Tab3 extends Component {
  
  state = {img: map.defaultMap};

  setImg = (imgId) => {
    this.setState({img:imgId});
  }

  render() {

    return (
      <View>
      	<Block flex={false} center style={theme.tab3.styles.header}>
        
          <Text h2 bold>Cała polska</Text>
        </Block>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={theme.tab3.styles.container}
        >

		      <Block flex={false}>
    
            <ImageBackground
              style={{ height: map.heightImg, width: map.widthImg }}
              source={this.state.img}
            >

              {map.mapStyles.map(style => (
                <TouchableOpacity
                  style={style.style}
                  onPress={() =>this.setImg(style.image)}
                />
              ))}        
            </ImageBackground>
		      </Block>
		    </ScrollView>
		  </View>
    );
  }

}

export default Tab3;
