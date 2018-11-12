import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>

        <View style={styles.menu}>
          <Text style={styles.text}>Menu</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.text}>Header</Text>
          </View>

          <View style={styles.body}>
            <Text style={styles.text}>Body</Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.text}>Footer</Text>
          </View>
          
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row'
  },
  menu: {
    flex: 0.4,
    backgroundColor: 'red',
  },
  content: {
    flex: 2
  },
  header: {
    flex: 0.2,
    backgroundColor: 'green',
    justifyContent: 'center'
  },
  body: {
    flex: 4,
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  footer: {
    flex: 0.3,
    backgroundColor: 'green',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }

});