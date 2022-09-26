import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { Routes } from './app/navigation';
import { applicationStyle } from './app/theme';
import { store } from './app/redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={applicationStyle.main}>
        <Routes />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
