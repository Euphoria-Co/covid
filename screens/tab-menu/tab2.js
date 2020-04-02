import React, { Component } from 'react';

import {
    View,
    ScrollView,
  } from 'react-native';
  
  import { Text } from "../../components";
  import { getData, getDescription } from '../../constants/getter';
  

let request = new XMLHttpRequest();
var data = false;

class Tab2 extends Component {
  
	constructor(props) {
		super(props);
    	this.state = {data: "", ready: false};
  }
    
  ready = () => {
    this.setState({data: data});
    request.onreadystatechange = (e) => {};
    request.abort();
  }

  handleDataAsync = () => {
      
    request.open('GET', 'https://www.gov.pl/web/koronawirus/wykaz-zarazen-koronawirusem-sars-cov-2/');
    request.onreadystatechange = (e) => {
       if (request.readyState !== 4) {
         return;
       }
  
       if (request.status === 200) {
         console.log('success');
         const dataFirst = request.responseText.split('<pre id="registerData" class="hide">');
         var aa = dataFirst[1]+'';
         const dataSecond = aa.split('</pre>');
         data = dataSecond[0];
         this.ready();
       } 
       else console.log(request.status);
    };
    request.send();
  };
    
  render() {
    if(!this.state.ready) {
      this.handleDataAsync();
      this.setState({ready: true})
    }
    
    return (


      <ScrollView
		  showsVerticalScrollIndicator={false}
		  style={{ flex:1, marginTop:20}}
        >
          <Text>{getDescription(this.state.data)}</Text>
          
          {getData(this.state.data).map(data => (
            <View>
              <Text>Województwo: {data.name}</Text>
              <Text>Liczba zakażonych: {data.countOfPatients}</Text>
              <Text>Liczba zgonów: {data.countOfDeaths}</Text>
              <Text>ID: {data.id}</Text>
            </View>
          ))}

        </ScrollView>
    );
  }

}

export default Tab2;
