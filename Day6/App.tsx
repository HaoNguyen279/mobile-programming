import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ProductScreen } from './src/ex1/ProductScreen';
import { SelectPhoneApp } from './src/ex1/SelectPhoneApp';
import { PHONES } from './data/phones';
import { SelectPhoneApi } from './src/ex1/SelectPhoneApi';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { BottomTabApp } from './src/ex3/BottomTabApp';
import { StackTabApp } from './src/ex4/StackTabApp';

export default function App() {
  return (
    <StackTabApp />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding : 10
  }
});
