import { Button, StatusBar, StyleSheet } from 'react-native';
import { GameEngine } from 'react-native-game-engine';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Finger from './finger';
import { MoveFinger } from './MoveFinger';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  console.log('COUCOU')
  return (

    <GameEngine  style={styles.container} 
    systems={[MoveFinger]}
    entities={{ 
      1: { position: [40, 200],   renderer: <Finger />}, 
      2: { position: [100, 200], renderer: <Finger />}, 
      3: { position: [160, 200], renderer: <Finger />}, 
      4: { position: [220, 200], renderer: <Finger />}, 
      5: { position: [280, 200], renderer: <Finger />}
    }}>

    <StatusBar hidden={true} />
</GameEngine>
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <Button title="TODO"></Button>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ee3333",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
