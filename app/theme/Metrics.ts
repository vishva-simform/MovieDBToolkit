import { Dimensions, Platform, type ScaledSize } from 'react-native';
import type { MetricsType } from './ThemeType';

let { width, height }: ScaledSize = Dimensions.get('window');
if (width > height) {
  [width, height] = [height, width];
}

//Guideline sizes are based on standard ~5" screen mobile device

const guidelineBaseWidth: number = 375;
// const guidelineBaseWidth = 500;

const guidelineBaseHeight: number = 812;

const horizontalScale = (size: number): number =>
  (width / guidelineBaseWidth) * size;

const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;

const Metrics: MetricsType = {
  isIos: Platform.OS === 'ios',
};

export { horizontalScale, verticalScale, moderateScale, Metrics };
