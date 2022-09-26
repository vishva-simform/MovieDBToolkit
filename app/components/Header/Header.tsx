import React, { type FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './HeaderStyles';
import type { HeaderProps } from './HeaderTypes';

const Header: FC<HeaderProps> = ({
  rightIcon,
  leftIcon,
  centerIcon,
  style,
}) => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={rightIcon} style={styles.iconStyle} />
        </TouchableOpacity>
        <Image source={centerIcon} style={style} />
        <TouchableOpacity>
          <Image source={leftIcon} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
