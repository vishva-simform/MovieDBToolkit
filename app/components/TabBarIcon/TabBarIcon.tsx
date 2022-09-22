import React, { type FC } from 'react';
import { Image } from 'react-native';
import { applicationStyle, Colors } from '../../theme';
import type { TabBarPropType } from './Types';

const TabBarIcon: FC<TabBarPropType> = ({ focused, icon }) => {
  return (
    <Image
      style={[
        {
          tintColor: focused ? Colors.lightBlue : Colors.white,
        },
        applicationStyle.tabIconStyle,
      ]}
      source={icon}
    />
  );
};

export default TabBarIcon;
