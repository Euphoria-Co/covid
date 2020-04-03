import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import NativeForms from "native-forms";

const App = () => {
  const [hasForm, showForm] = useState(false);
  const show = () => showForm(true);
  const hide = () => showForm(false);

  return (
    <View style={styles.container}>
      <Text>NativeForms.com</Text>

      

     
        <NativeForms
          form="https://my.nativeforms.com/N92MP1jZmcUTwcHSk1Db"/>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;