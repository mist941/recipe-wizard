import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const RecipeDetailsStyles = StyleSheet.create({
  title: {
    marginBottom: 15,
    color: commonStyles.primaryTextColor,
    fontWeight: 600,
    fontSize: 20,
  },
  description: {
    marginBottom: 15,
    color: commonStyles.primaryTextColor,
    fontWeight: 500,
    fontSize: 14,
  },
  buttons: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    width: 140,
  },
});
