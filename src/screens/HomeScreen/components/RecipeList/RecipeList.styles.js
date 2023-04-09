import {StyleSheet} from 'react-native';
import commonStyles from '../../../../common.styles';

export const RecipeListStyles = StyleSheet.create({
  recipeList: {
    marginBottom: 20,
  },
  recipe: {
    padding: 10,
    backgroundColor: commonStyles.primaryBackground,
    marginBottom: 15,
    borderRadius: 10
  },
  title: {
    color: commonStyles.primaryTextColor,
    fontWeight: 600,
    fontSize: 15,
    marginBottom: 10,
  },
  ingredients: {
    color: commonStyles.primaryTextColor,
    fontWeight: 500,
    fontSize: 14,
  }
});
