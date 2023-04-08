import React, {useState} from 'react';
import {View} from 'react-native';
import InputField from '../../components/InputField/InputField';
import {AuthFormStyles} from './AuthForm.styles';
import {buttonTypes, routes} from '../../constants';
import Button from '../../components/Button/Button';

const AuthForm = ({submit, type}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let submitBtnText = "Sign In";

  if (type === routes.register) submitBtnText = "Register";

  return (
    <View>
      <View style={AuthFormStyles.field}>
        <InputField
          label="Emal"
          value={email}
          onChange={(userEmail) => setEmail(userEmail)}
          placeholder="Type email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View/>
      <View style={AuthFormStyles.field}>
        <InputField
          value={password}
          label="Password"
          onChange={(userPassword) => setPassword(userPassword)}
          placeholder="Type password"
          secureTextEntry={true}
        />
      </View>
      <Button
        type={buttonTypes.primary}
        text={submitBtnText}
        onClick={() => submit({email, password})}
      />
    </View>
  );
};

export default AuthForm;