import React, { type FC } from 'react';
import { Text } from 'react-native';
import { Strings } from '../../constants';

const Movies: FC = () => {
  return (
    <>
      <Text>{Strings.movies}</Text>
    </>
  );
};

export default Movies;
