import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const AuthScreenRedirectStyles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  message: {
    marginRight: 5,
    color: commonStyles.secondaryTextColor,
    fontWeight: 500,
    fontSize: 14
  },
  type: {
    color: commonStyles.tertiaryTextColor,
    fontWeight: 500,
    fontSize: 14
  }
});