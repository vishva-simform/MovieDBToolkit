import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../theme';
import { Metrics } from './Metrics';

const applicationStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.DarkBlue,
  },
  tabIconStyle: {
    height: moderateScale(30),
    width: moderateScale(30),
  },
  tabBarStyle: {
    height: Metrics.isIos ? verticalScale(60) : verticalScale(70),
    backgroundColor: Colors.DarkBlue,
    paddingTop: verticalScale(10),
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
});

export default applicationStyle;
