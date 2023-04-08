import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet} from 'react-native';
import commonStyles from './src/common.styles';
import config from './config';
import firebase from 'firebase/compat';
import Providers from './src/navigation/Providers';

if (!firebase.default.apps.length) firebase.default.initializeApp(config.firebaseConfig);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
      <Providers/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: commonStyles.backgroundApp,
  },
});
