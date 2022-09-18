import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

//react navigation ile sarmalladığımız için prop geliyor sayfalar arası geçiş için navigation propuna erşiyoruz
const First = ({navigation}) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from first screen</Text>
      <Button
        title="go to Second Screen"
        onPress={() => navigation.navigate('Second', {username: 'Anthony'})}
      />
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
