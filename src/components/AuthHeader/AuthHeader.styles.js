import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const AuthHeaderStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: 15,
    color: commonStyles.primaryTextColor,
    fontWeight: 600,
    fontSize: 24
  },
  subTitle: {
    color: commonStyles.secondaryTextColor,
    fontWeight: 500,
    fontSize: 14
  }
});
