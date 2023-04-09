import React from 'react';
import {Pressable, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {NewRecipeContentStyles} from './NewRecipeContent.styles';
import AutocompleteInput from '../../../../components/AutocompleteInput/AutocompleteInput';
import Button from '../../../../components/Button/Button';
import {buttonTypes} from '../../../../constants';

const NewRecipeContent = ({recipeInProgress, ingredients, setIngredients, deleteIngredient, generateRecipe}) => {
  if (recipeInProgress) return (
    <>
      <Text style={NewRecipeContentStyles.waitMessage}>
        Wait! We are preparing a recipe for you.
      </Text>
      <LottieView
        source={require('../../../../lottie/cooking.json')}
        autoPlay
        loop
      />
    </>
  );

  return (
    <>
      <View>
        <Text style={NewRecipeContentStyles.searchTitle}>
          Add a list of ingredients and we will create a recipe
        </Text>
        <AutocompleteInput
          placeholder="Type to search ingredients"
          values={ingredients}
          setValue={item => setIngredients(prevState => [...prevState, item])}
        />
        <View style={NewRecipeContentStyles.ingredientsList}>
          {ingredients.map(ingredient => (
            <Pressable
              onPress={() => deleteIngredient(ingredient)}
              key={ingredient}
              style={NewRecipeContentStyles.ingredient}
            >
              <Text style={NewRecipeContentStyles.ingredientName}>{ingredient}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      <Button
        type={buttonTypes.primary}
        text="Get recipe"
        onClick={generateRecipe}
      />
    </>
  );
};

export default NewRecipeContent;