import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

export const styles = StyleSheet.create({
  dropDownContainer: {
    position: 'absolute',
    right: 0,
    backgroundColor: Colors.lightGreen,
    borderRadius: 20,
    borderWidth: moderateScale(1),
  },
  dropDownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.DarkBlue,
    width: horizontalScale(145),
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(15),
    borderRadius: 15,
  },
  dropDownListItem: {
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(15),
  },
  dropDownStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chevronIconStyle: {
    tintColor: Colors.lightGreen,
    height: 15,
    width: 15,
  },
  buttonStyle: {
    color: Colors.lightGreen,
    fontSize: moderateScale(19),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dropDownItemStyle: {
    color: Colors.DarkBlue,
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },
});
