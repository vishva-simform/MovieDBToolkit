import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(15),
    marginBottom: verticalScale(10),
  },
  cardStyle: {
    flex: 1,
  },
  ListtitleStyle: {
    fontSize: moderateScale(25),
    fontWeight: '600',
    marginRight: horizontalScale(20),
    opacity: 1,
  },
  posterStyle: {
    height: verticalScale(250),
    width: horizontalScale(150),
    borderRadius: moderateScale(10),
    marginRight: horizontalScale(20),
  },
  dotsContainer: {
    backgroundColor: Colors.white,
    opacity: 0.5,
    position: 'absolute',
    right: horizontalScale(30),
    top: verticalScale(20),
    borderRadius: moderateScale(20),
  },
  dotImage: {
    tintColor: Colors.black,
    opacity: 0.7,
  },
  latestTrailerHeader: {
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(25),
  },
  latestTrailerTitle: {
    color: Colors.white,
  },
  dropDownButtonStyle: {
    backgroundColor: Colors.lightGreen,
    color: Colors.DarkBlue,
  },
  latestTrailerChevron: {
    tintColor: Colors.DarkBlue,
  },
  trailerContainer: {
    backgroundColor: Colors.DarkBlue,
  },
  trailerPosterStyle: {
    height: verticalScale(200),
    width: horizontalScale(300),
    borderRadius: moderateScale(10),
    marginLeft: horizontalScale(20),
    marginVertical: verticalScale(20),
  },
  playContainer: {
    alignSelf: 'center',
    position: 'absolute',
    height: moderateScale(5),
    width: moderateScale(5),
    top: verticalScale(100),
    backgroundColor: 'transparent',
  },
  playImage: {
    tintColor: Colors.white,
    height: moderateScale(50),
    width: moderateScale(50),
  },
  trailerDotConatiner: {
    top: verticalScale(35),
    right: horizontalScale(20),
  },
  trailerTitleSec: {
    width: horizontalScale(280),
    alignItems: 'center',
    marginLeft: horizontalScale(30),
    marginBottom: moderateScale(50),
  },
  title: {
    color: Colors.white,
    fontSize: moderateScale(22),
  },
  subTitle: {
    color: Colors.white,
    fontSize: moderateScale(14),
  },
  latestTrailerBackView: {
    backgroundColor: Colors.DarkBlue,
  },
});
