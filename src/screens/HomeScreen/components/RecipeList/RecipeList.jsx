import React, {useRef} from 'react';
import {ScrollView, Text, Pressable, Animated} from 'react-native';
import {RecipeListStyles} from './RecipeList.styles';
import {useOpacityAnimate} from '../../../../hooks/useOpacityAnimate';

const RecipeList = ({recipes, selectRecipe}) => {
  const animatedOpacity = useRef(new Animated.Value(1)).current;
  const handlePress = useOpacityAnimate(animatedOpacity, () => {
  });

  return (
    <ScrollView style={RecipeListStyles.recipeList}>
      {recipes.map(recipe => (
        <Pressable
          key={recipe.id}
          onPress={() => {
            handlePress();
            selectRecipe(recipe);
          }}
        >
          <Animated.View style={[RecipeListStyles.recipe, {opacity: animatedOpacity}]}>
            <Text style={RecipeListStyles.title}>{recipe.name}</Text>
            <Text style={RecipeListStyles.ingredients}>Ingredients: {recipe.ingredients.join(", ")}</Text>
          </Animated.View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default RecipeList;