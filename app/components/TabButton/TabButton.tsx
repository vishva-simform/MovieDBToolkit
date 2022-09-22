import React, { type FC } from 'react';
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native';
import { applicationStyle } from '../../theme';
import { TabBarIcon } from '../TabBarIcon';
import type { TabButtonPropType } from './Types';

const TabButton: FC<TabButtonPropType & TouchableOpacityProps> = ({
  item,
  onPress,
  accessibilityState,
}) => {
  const focused: boolean = accessibilityState?.selected ?? false;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={applicationStyle.tabButton}>
      <TabBarIcon {...{ focused }} icon={item?.icon} />
    </TouchableOpacity>
  );
};

export default TabButton;
