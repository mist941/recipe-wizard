import React from 'react';
import {InputFieldStyles} from './InputField.styles';
import {View, Text, TextInput} from 'react-native';
import commonStyles from '../../common.styles';
import Error from '../Error/Error';

const InputField = (
  {
    placeholder = "",
    label = "",
    value = "",
    styles,
    onChange,
    error,
    ...rest
  }
) => {
  return (
    <View style={[InputFieldStyles.fieldWrap, styles]}>
      <Text style={[InputFieldStyles.labelText, error && InputFieldStyles.errText]}>{label}</Text>
      <TextInput
        value={value}
        placeholderTextColor={commonStyles.primaryTextColor}
        placeholder={placeholder}
        onChangeText={onChange}
        style={[InputFieldStyles.field, error && InputFieldStyles.fieldErr]}
        {...rest}
      />
      {error && <Error error={error}/>}
    </View>
  );
};

export default InputField;