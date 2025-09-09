import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FAB from './components/FAB';

export default function App() {

  const [count, setCount] = useState(10)

  return (
    <View style={[styles.container]}>
      <Text style={styles.textHuge}>{count}</Text>

      <FAB 
        position='right'
        onLongPress={() => setCount(0)}
        onPress={() => setCount(count + 1)} 
        label='+1'
      />

      <FAB 
        position='left'
        onPress={() => setCount(0)} 
        label='Reset'
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHuge: {
    fontSize: 120,
    fontWeight: '300'
  },
});
