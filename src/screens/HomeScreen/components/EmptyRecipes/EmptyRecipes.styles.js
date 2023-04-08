import {StyleSheet} from 'react-native';
import commonStyles from '../../../../common.styles';

export const EmptyRecipesStyles = StyleSheet.create({
  imageContainer: {
    marginBottom: 25
  },
  title: {
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 20,
    fontWeight: 600,
    color: commonStyles.primaryTextColor
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 500,
    color: commonStyles.secondaryTextColor
  }
});
