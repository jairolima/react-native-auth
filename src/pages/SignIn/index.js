import React, {Component} from 'react';

import {
  View,
  Platform,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = () => {
    const {email, password} = this.state;

    // action do REDUX para enviar email e senha que chama uma func do SAGA
  };

  render() {
    const {email, password} = this.state;

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}>
        <View>
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.label}>EMAIL</Text>
          <TextInput
            value={email}
            onChangeText={text => this.setState({email: text})}
            styles={styles.input}
            KeyboardType="email-adress"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            autoFocus
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
          />
          <Text style={styles.label}>SENHA</Text>
          <TextInput
            value={password}
            onChangeText={text => this.setState({password: text})}
            styles={styles.input}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            returnKeyType="send"
            ref={el => {
              this.passwordInput = el;
            }}
            onSubmitEditing={this.handleSubmit}
          />
          <TouchableOpacity onPress={this.handleSubmit} styles={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
