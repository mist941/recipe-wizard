import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {buttonTypes} from '../../../../constants';
import Button from '../../../../components/Button/Button';
import {NewRecipeDetailsStyles} from './NewRecipeDetails.styles';

const NewRecipeDetails = ({recipe, skipRecipe, saveRecipe, ingredients}) => {
  return (
    <>
      <Text style={NewRecipeDetailsStyles.title}>{recipe.name}</Text>
      <ScrollView>
        <Text style={NewRecipeDetailsStyles.description}>{recipe.description}</Text>
      </ScrollView>
      <View style={NewRecipeDetailsStyles.buttons}>
        <Button
          style={NewRecipeDetailsStyles.button}
          type={buttonTypes.secondary}
          text="Cancel"
          onClick={skipRecipe}
        />
        <Button
          style={NewRecipeDetailsStyles.button}
          type={buttonTypes.primary}
          text="Save"
          onClick={saveRecipe}
        />
      </View>
    </>
  );
};

export default NewRecipeDetails;