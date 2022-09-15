import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Register from './src/pages/Register';
import Login from './src/pages/Login';
import FormLogin from './src/pages/FormLogin';
export default function App() {
  return (
    <View style={styles.container}>
      <FormLogin />
      <Register />
      <Login />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

});
