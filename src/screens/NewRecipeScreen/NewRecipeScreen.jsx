import React, {useState} from 'react';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';
import LottieView from 'lottie-react-native';
import {Text, View} from 'react-native';
import {NewRecipeScreenStyles} from './NewRecipeScreen.styles';
import AutocompleteInput from '../../components/AutocompleteInput/AutocompleteInput';
import {buttonTypes} from '../../constants';
import Button from '../../components/Button/Button';
import {createRecipe} from '../../services/RecipeData.service';

const NewRecipeScreen = ({navigation}) => {
  const [ingredients, setIngredients] = useState([]);
  const [recipeInProgress, setRecipeProgress] = useState(false);

  const generateRecipe = () => {
    setRecipeProgress(true);
    createRecipe(ingredients).then(res => {
      console.log(res.choices[0]);
      setRecipeProgress(false);
    });
  }

  return (
    <ScreenWrapper containerHeight="75%">
      {recipeInProgress ? (
        <LottieView
          source={require('../../lottie/cooking.json')}
          autoPlay
          loop
        />
      ) : (
        <View>
          <Text style={NewRecipeScreenStyles.searchTitle}>
            Add a list of ingredients and we will create a recipe
          </Text>
          <AutocompleteInput
            placeholder="Type to search ingredients"
            values={ingredients}
            setValue={item => setIngredients(prevState => [...prevState, item])}
          />
          <View style={NewRecipeScreenStyles.ingredientsList}>
            {ingredients.map(ingredient => (
              <View key={ingredient} style={NewRecipeScreenStyles.ingredient}>
                <Text style={NewRecipeScreenStyles.ingredientName}>{ingredient}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
      <Button
        type={buttonTypes.primary}
        text="Get recipe"
        onClick={generateRecipe}
      />
    </ScreenWrapper>
  );
};

export default NewRecipeScreen;