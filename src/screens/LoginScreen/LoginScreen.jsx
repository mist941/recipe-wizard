import React, {useContext} from 'react';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import {buttonTypes, routes} from '../../constants';
import Button from '../../components/Button/Button';
import GoogleIcon from '../../icons/GoogleIcon';
import {LoginScreenStyles} from './LoginScreen.styles';
import {Text} from 'react-native';
import AuthForm from '../../forms/AuthFrom/AuthForm';
import AuthScreenRedirect from '../../components/AuthScreenRedirect/AuthScreenRedirect';
import {AuthContext} from '../../contexts/AuthProvider';

const LoginScreen = ({navigation}) => {
  const {login} = useContext(AuthContext);

  const signInByGoogle = () => {

  }

  return (
    <ScreenWrapper containerHeight={'65%'}>
      <AuthHeader type={routes.login}/>
      {/*<Button Icon={GoogleIcon} type={buttonTypes.secondary} onClick={signInByGoogle}/>*/}
      {/*<Text style={LoginScreenStyles.loginFormTitle}>or Login with Email</Text>*/}
      <AuthForm submit={login} type={routes.login}/>
      <AuthScreenRedirect type={routes.register} onClick={() => navigation.navigate(routes.register)}/>
    </ScreenWrapper>
  );
};

export default LoginScreen;