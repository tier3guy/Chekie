/* Built-in Imports */
import { useState, useEffect } from 'react';
import { Text } from 'react-native';

/* Internal Imports */
// Components
import SplashScreen from './screens/SplashScreen';
import { Todo } from './screens/Todo';

/**
 * @returns React Native Screen - Main App Screen
 */
export default App = () => {
  /*
  const [loading, setLoading] = useState(true);
  function clearSplashScreen() {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  useEffect(() => clearSplashScreen(), []);

  if (loading) return <SplashScreen />;
  */
  return <Todo />
}