import React from 'react';
import EmptyRecipesIcon from '../../../../icons/EmptyRecipes';
import {View, Text} from 'react-native';
import {EmptyRecipesStyles} from './EmptyRecipes.styles';

const EmptyRecipes = () => {
  return (
    <View>
      <View style={EmptyRecipesStyles.imageContainer}>
        <EmptyRecipesIcon/>
      </View>
      <Text style={EmptyRecipesStyles.title}>You don't have any recipes</Text>
      <Text style={EmptyRecipesStyles.subTitle}>Try to add new recipe</Text>
    </View>
  );
};

export default EmptyRecipes;