import AuthProvider from '../contexts/AuthProvider';
import Routes from './Routes';
import RecipesProvider from '../contexts/RecipesProvider';

const Providers = () => {
  return (
    <AuthProvider>
      <RecipesProvider>
        <Routes/>
      </RecipesProvider>
    </AuthProvider>
  );
};

export default Providers;