import { StatusBar } from 'expo-status-bar';
import AppNavigator from './navigation/AppNavigator';
import AppProvider from './navigation/AppProvider'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <AppNavigator/>
        <StatusBar/>
      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
