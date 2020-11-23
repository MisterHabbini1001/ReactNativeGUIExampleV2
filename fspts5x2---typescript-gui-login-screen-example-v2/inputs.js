import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'

class Inputs extends Component {
   state = {
      name: '',
      url: '',
      password: ''
   }

   handleName = (text) => {
      this.setState({ name: text })
   }
   handleURL = (text) => {
      this.setState({ url: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }

   login = (name, url, password) => {
      alert('name: ' + name + 'url: ' + url + ' password: ' + password)
   }

   render() {
      return (
         <View style = {styles.container}>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               keyboardType='numeric'
               onChangeText = {this.handleFirstName}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "URL"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               keyboardType='numeric'
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               keyboardType='numeric'
               onChangeText = {this.handlePassword}/>

            <TouchableOpacity
               accessible = {false}
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>
         </View>
      )
   }
}

export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#000000',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})