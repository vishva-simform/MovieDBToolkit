import React from 'react';
import { SafeAreaView } from 'react-native';
import { Routes } from './app/navigation';
import { applicationStyle } from './app/theme';

const App = () => {
  return (
    <SafeAreaView style={applicationStyle.main}>
      <Routes />
    </SafeAreaView>
  );
};

export default App;
