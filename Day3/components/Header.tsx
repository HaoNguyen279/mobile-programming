import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
        <Text style={{color: "white", fontSize: 18}}>📚 BookStore</Text>
        <View style={styles.iconContainer}>
            <Text style={styles.icon}>🔍</Text>
            <Text style={styles.icon}>🛒</Text>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'navy',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    paddingHorizontal : 16
  },
  icon:{

  },
  iconContainer:{
    flexDirection: 'row',

  }
});
