import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const ScreenWrapperStyles = StyleSheet.create({
  wrapper: {
    height: '100%',
    backgroundColor: commonStyles.backgroundApp,
    paddingHorizontal: '7%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});
