import React, {useEffect, useState} from 'react';
import Autocomplete from 'react-native-autocomplete-input';
import {TouchableOpacity} from 'react-native';
import {fetchIngredients} from '../../services/Ingredients.service';
import {Text} from 'react-native';

const AutocompleteInput = ({values, setValue, placeholder}) => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setItems(prevState => prevState.filter(item => !values.includes(item.id)));
  }, [values]);

  useEffect(() => {
    fetchIngredients(query).then(res => {
      const items = res
        .filter(item => !values.includes(item))
        .map(item => ({id: item, title: item}));
      setItems(items);
    });
  }, [query]);

  return (
    <Autocomplete
      autoCorrect={false}
      data={items}
      value={query}
      onChangeText={setQuery}
      placeholder={placeholder}
      flatListProps={{
        keyboardShouldPersistTaps: 'always',
        keyExtractor: (item) => item.id,
        renderItem: ({item}) => (
          <TouchableOpacity onPress={() => setValue(item.id)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        ),
      }}
    />
  );
};

export default AutocompleteInput;