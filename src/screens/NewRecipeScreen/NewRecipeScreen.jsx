import React, {useState} from 'react';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';
import LottieView from 'lottie-react-native';
import {Text, View} from 'react-native';
import {NewRecipeScreenStyles} from './NewRecipeScreen.styles';
import AutocompleteInput from '../../components/AutocompleteInput/AutocompleteInput';

const NewRecipeScreen = ({navigation}) => {
  const [ingredients, setIngredients] = useState([]);
  const [recipeInProgress, setRecipeProgress] = useState(false);

  return (
    <ScreenWrapper>
      <Text style={NewRecipeScreenStyles.searchTitle}>
        Add a list of ingredients and we will create a recipe
      </Text>
      <AutocompleteInput
        placeholder="Type to search ingredients"
        values={ingredients}
        setValue={item => setIngredients(prevState => [...prevState, item])}
      />
      <View>

      </View>
      {recipeInProgress && (
        <LottieView
          source={require('../../lottie/cooking.json')}
          autoPlay
          loop
        />
      )}
    </ScreenWrapper>
  );
};

export default NewRecipeScreen;