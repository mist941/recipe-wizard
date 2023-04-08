import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet} from 'react-native';
import commonStyles from './src/common.styles';
import * as firebase from 'firebase';
import config from './config';

if (!firebase.default.apps.length) firebase.default.initializeApp(config.firebaseConfig);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
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
