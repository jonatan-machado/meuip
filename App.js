/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native'
import { white } from 'ansi-colors'
import logo from './assets/logo.png'
type Props = {}
export default class App extends Component<Props> {
  constructor(props){
    super(props)

    this.findMyIp = this.findMyIp.bind(this)

    this.state = {
      data: ''
    }
  }
  async findMyIp(){
    this.setState({
      data: 'descobrindo IP...'
    }) 
    const ip = await fetch('http://httpbin.org/ip')
    const data = await ip.json()
    this.setState({
      data: data.origin
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
        <Image source={logo} />
            <Text style={styles.ip}>{this.state.data}</Text>
            <Button title='Descobrir meu IP' onPress={this.findMyIp} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.made}> Feito com ♥ por Jonatan Machado</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#2F2336',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ip: {
    color: 'white',
    paddingTop: 20,
    paddingBottom: 20,
  },
  footer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  made: {
    color: 'white',
    textAlign: 'center',
  }
})
