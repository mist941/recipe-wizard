import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const ButtonStyles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 56,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  secondary: {
    backgroundColor: commonStyles.primaryBackground
  },
  primary: {
    backgroundColor: commonStyles.tertiaryBackground,
  },
  remove: {
    backgroundColor: commonStyles.errColor,
  },
  text: {
    fontSize: 18,
    fontWeight: 500,
    color: commonStyles.primaryTextColor
  }
});
