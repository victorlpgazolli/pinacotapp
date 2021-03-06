import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import GoogleSignInConfigure from './components/GoogleSignInConfigure';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { store } from './store';

const persistor = persistStore(store);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
            <GoogleSignInConfigure />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
