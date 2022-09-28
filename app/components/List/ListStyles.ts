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
  titleSection: {
    zIndex: 1,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(20),
  },
  ListtitleStyle: {
    fontSize: moderateScale(25),
    fontWeight: '600',
    marginRight: horizontalScale(20),
    opacity: 1,
  },
  movieListContainer: {
    flexDirection: 'row',
  },
  posterStyle: {
    height: verticalScale(250),
    width: horizontalScale(150),
    borderRadius: moderateScale(10),
    marginRight: horizontalScale(20),
  },

  progressContainer: {
    position: 'absolute',
    bottom: verticalScale(-21),
    left: horizontalScale(12),
  },
  movieTitlesSec: {
    marginTop: verticalScale(25),
    left: horizontalScale(12),
    width: horizontalScale(140),
    marginBottom: verticalScale(10),
  },
  movieTitle: {
    fontWeight: 'bold',
    fontSize: moderateScale(18),
  },
  releaseDate: {
    marginVertical: verticalScale(5),
    color: Colors.grey,
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
  title: {
    color: Colors.white,
    fontSize: moderateScale(22),
  },
});
