import type { ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';

interface HeaderProps {
  rightIcon: ImageSourcePropType;
  leftIcon?: ImageSourcePropType;
  centerIcon: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}

export type { HeaderProps };
