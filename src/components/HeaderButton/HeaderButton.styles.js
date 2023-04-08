import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const HeaderButtonStyles = StyleSheet.create({
  button: {
    height: 45,
    width: 45,
    backgroundColor: commonStyles.primaryBackground,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  }
});
