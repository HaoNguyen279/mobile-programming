import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { BOOKS } from '../assets/data';
import { DiscountBadge } from './DiscountBadge';
export default function BookGrid() {
  return (
    <View style={styles.container}>
        {BOOKS.map((book) => (
          <Pressable key={book.id} style={{width: '48%', marginBottom: 8}}>
            <View style={styles.coverWrap}>
              <Image source={{uri: book.cover }} style={{width : '100%', height :'100%'}}/>
              <DiscountBadge discountPercent={book.discountPercent} isNew={book.isNew}/>
            </View>
            <Text style={[styles.text]}>{book.title}</Text>
            <Text style={styles.price}>{book.price.toLocaleString()} đ</Text>
          </Pressable>
        ))}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal : 16,
  },
  coverWrap:{
    position: 'relative',
    aspectRatio : 3/4,
    width : "100%",
    // overflow: 'hidden',
    // backgroundColor: "#EEF2F7",
  },
  text:{
    fontSize: 16,
    color: "black",
  },
  icon:{

  },
  iconContainer:{
    flexDirection: 'row',

  },
  price: {
    marginTop: 2,
    fontSize: 13,
    fontWeight: "700",
    color: "#1E1B4B",
  },
});
