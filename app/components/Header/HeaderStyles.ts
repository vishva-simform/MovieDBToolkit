import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.DarkBlue,
  },
  iconStyle: {
    marginVertical: verticalScale(23),
    marginHorizontal: horizontalScale(19),
    height: moderateScale(20),
    width: moderateScale(20),
    tintColor: Colors.white,
  },
  iconColor: {
    tintColor: Colors.lightBlue,
  },
  main: {
    flexDirection: 'column',
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  email: {
    marginTop: verticalScale(4),
    color: Colors.lightBlue,
    fontWeight: 'bold',
    fontSize: moderateScale(15),
  },
});
