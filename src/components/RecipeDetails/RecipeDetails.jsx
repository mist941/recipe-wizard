import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {buttonTypes} from '../../constants';
import Button from '../Button/Button';
import {RecipeDetailsStyles} from './RecipeDetails.styles';

const RecipeDetails = ({recipe, skipRecipe, saveRecipe, unSelectRecipe, removeRecipe}) => {
  return (
    <>
      <Text style={RecipeDetailsStyles.title}>{recipe.name}</Text>
      <ScrollView>
        <Text style={RecipeDetailsStyles.description}>{recipe.description}</Text>
      </ScrollView>
      <View style={RecipeDetailsStyles.buttons}>
        {(unSelectRecipe && removeRecipe) ? (
          <>
            <Button
              style={RecipeDetailsStyles.button}
              type={buttonTypes.secondary}
              text="Back"
              onClick={unSelectRecipe}
            />
            <Button
              style={RecipeDetailsStyles.button}
              type={buttonTypes.remove}
              text="Delete"
              onClick={removeRecipe}
            />
          </>
        ) : (
          <>
            <Button
              style={RecipeDetailsStyles.button}
              type={buttonTypes.secondary}
              text="Cancel"
              onClick={skipRecipe}
            />
            <Button
              style={RecipeDetailsStyles.button}
              type={buttonTypes.primary}
              text="Save"
              onClick={saveRecipe}
            />
          </>
        )}

      </View>
    </>
  );
};

export default RecipeDetails;