import React, {useContext} from 'react';
import HeaderButton from '../HeaderButton/HeaderButton';
import commonStyles from '../../common.styles';
import {routes} from '../../constants';
import {AuthContext} from '../../contexts/AuthProvider';
import BackIcon from '../../icons/BackIcon';
import LogoutIcon from '../../icons/LogoutIcon';

const header = ({navigation, route}) => {
  const {logout} = useContext(AuthContext);
  const withBackButton = route.name !== routes.home;

  return {
    headerLeft: () => withBackButton && (
      <HeaderButton
        onClick={() => navigation.navigate(routes.home)}
        Icon={BackIcon}
      />
    ),
    headerRight: () => <HeaderButton onClick={logout} Icon={LogoutIcon}/>,
    headerStyle: {
      backgroundColor: commonStyles.backgroundApp,
    },
    headerTintColor: '#fff',
  };
};

export default header;