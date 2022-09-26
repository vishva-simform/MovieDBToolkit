import type { ImageStyle, StyleProp, ViewStyle } from 'react-native';

interface DemoType {
  filterList: Array<{
    id: number;
    name: string;
  }>;
  latestTrailerChevron?: StyleProp<ImageStyle>;
  dropDownButtonStyle?: StyleProp<ViewStyle>;
}

interface ValType {
  id: number;
  name: string;
  identifier?: string;
}

interface SelectedItemProp {
  id: number;
  name: string;
}

export type { DemoType, ValType, SelectedItemProp };
