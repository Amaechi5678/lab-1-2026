import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [fullname, setFullname] = useState ("Amaechi Okolie")
  return (
    <View >
      <Text style={styles.paragraphy1}>
       Hello, World {fullname}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
 paragraphy1: {
 margin: 24,
 fontSize: 18,
 fontWeight: 'bold',
 textAlign: 'center',
 },
});

