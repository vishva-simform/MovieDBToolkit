import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import { Strings } from '../../constants';
import { styles } from './Styles';

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>{Strings.home}</Text>
    </View>
  );
};

export default HomeScreen;
