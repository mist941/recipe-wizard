import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import {buttonTypes, routes} from '../../constants';
import Button from '../../components/Button/Button';
import GoogleIcon from '../../icons/GoogleIcon';
import {RegisterScreenStyles} from './RegisterScreen.styles';
import {Text} from 'react-native';
import AuthForm from '../../forms/AuthFrom/AuthForm';
import AuthScreenRedirect from '../../components/AuthScreenRedirect/AuthScreenRedirect';

const RegisterScreen = ({navigation}) => {

  const onSubmit = params => {

  }

  const registerByGoogle = () => {

  }

  return (
    <ScreenWrapper containerHeight={'65%'}>
      <AuthHeader type={routes.register}/>
      <Button Icon={GoogleIcon} type={buttonTypes.secondary} onClick={registerByGoogle}/>
      <Text style={RegisterScreenStyles.loginFormTitle}>or Register with Email</Text>
      <AuthForm submit={onSubmit} type={routes.register}/>
      <AuthScreenRedirect type={routes.login} onClick={() => navigation.navigate(routes.login)}/>
    </ScreenWrapper>
  );
};

export default RegisterScreen;