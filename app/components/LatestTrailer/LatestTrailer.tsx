import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  type ListRenderItemInfo,
} from 'react-native';
import { DropDown } from '..';
import { Icons } from '../../assets';
import { baseUrls, Strings } from '../../constants';
import { styles } from './LatestTrailerStyles';
import type { ItemType, LatestTrailerProp } from './LatestTrailerTypes';

const LatestTrailer = ({
  listTitle,
  filterList,
  movieList,
}: LatestTrailerProp) => {
  const listTextStyle = StyleSheet.flatten([
    styles.ListtitleStyle,
    styles.latestTrailerTitle,
  ]);
  const listItem = ({ item }: ListRenderItemInfo<ItemType>) => {
    return (
      <View>
        <Image
          style={styles.trailerPosterStyle}
          source={{
            uri: `${baseUrls.imageURL}${item.backdrop_path}`,
          }}
        />
        <TouchableOpacity
          style={[styles.dotsContainer, styles.trailerDotConatiner]}>
          <Image source={Icons.dots} style={styles.dotImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playContainer}>
          <Image source={Icons.play} style={styles.playImage} />
        </TouchableOpacity>
        <View style={styles.trailerTitleSec}>
          <Text numberOfLines={1} style={styles.title}>
            {item?.original_title ?? item?.original_name}
          </Text>
          <Text style={styles.subTitle}>{Strings.subTitle}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.latestTrailerBackView}>
      <View style={styles.latestTrailerHeader}>
        <Text style={listTextStyle}>{listTitle}</Text>
        <DropDown
          filterList={filterList}
          latestTrailerChevron={styles.latestTrailerChevron}
          dropDownButtonStyle={styles.dropDownButtonStyle}
        />
      </View>

      <FlatList
        horizontal
        data={movieList?.results ?? []}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={listItem}
      />
    </View>
  );
};

export default LatestTrailer;
