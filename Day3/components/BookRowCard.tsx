import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Book } from '../assets/data';

export default function BookRowCard({book} : {book : Book}) {
  return (
    <View style={styles.container}>
        <Image source={{uri: book.cover }} style={{height: 80, width :60, borderRadius: 4}}/>
        <View>
            <Text style={[styles.text, {fontWeight:700, fontSize:20}]}>{book.title}</Text>
            <Text style={styles.text}>Tác giả: {book.author}</Text>
            <Text style={styles.text}>Giá : {book.price}</Text>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 56,
    paddingHorizontal : 16,
    paddingVertical: 8,
  },
  text:{
    fontSize: 16,
    color: "black",
    paddingLeft: 8,
  }
});
