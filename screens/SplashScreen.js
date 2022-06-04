/* Built-in Imports */
import { StyleSheet, Text, View } from 'react-native';

/* Internal Imports */
// components
import Theme from '../Themes';

/* External Imports */
import { BaiJamjuree_500Medium, BaiJamjuree_300Light, useFonts } from '@expo-google-fonts/bai-jamjuree';


/**
 * @returns React-Native Screen : Splash Screen 
 */
export default function SplashScreen() {

  let [fonts] = useFonts({ BaiJamjuree_500Medium, BaiJamjuree_300Light });
  if(!fonts) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.splashText} >Welcome to checkie</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    color: Theme.white,
    fontFamily: 'BaiJamjuree_500Medium',
    fontSize: 24
  }
});
