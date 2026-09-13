import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import BookRowCard from './components/BookRowCard';
import {BOOKS} from './assets/data';
import type {Book} from './assets/data';
import { CategoryChips } from './components/CategoryChips';
import BookGrid from './components/BookGrid';
import { FloatingCartButton } from './components/FloatinCartButton';
import { useState } from 'react';

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <View style={styles.container}>
        <Header/>
        {/* <ScrollView style={styles.bookContainer}>
          {BOOKS.map((book: Book) => (
            <BookRowCard key={book.id} book={book}/>
          ))}
        </ScrollView> */}
        <ScrollView>
          <Text style={{paddingLeft: 16}}>Category</Text>
          <CategoryChips/>
          <Text style={{paddingLeft: 16}}>Grid sản phẩm</Text>
          <BookGrid/>
        </ScrollView>
        <FloatingCartButton count={cartCount} onPress={() => setCartCount((n) => n + 1)} />
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bookContainer:{
    gap:8,
    
  }
});
