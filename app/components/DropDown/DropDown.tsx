import React, { useState, type FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Icons } from '../../assets';
import { styles } from './DropDownStyles';
import type { DemoType, ValType, SelectedItemProp } from './DropDownTypes';

const DropDown: FC<DemoType> = ({
  filterList,
  dropDownButtonStyle,
  latestTrailerChevron,
}) => {
  const [selectedItem, setSelectedItem] = useState<SelectedItemProp>(
    filterList?.[0] ?? [],
  );
  const [showOptions, setShowOptions] = useState<boolean>(false);

  //get value of selected Item in dropdown
  const onSelectedItems = (val: ValType): void => {
    setShowOptions(false);
    setSelectedItem(val);
  };

  return (
    <View style={styles.dropDownContainer}>
      <TouchableOpacity
        style={[styles.dropDownButton, dropDownButtonStyle]}
        onPress={() => setShowOptions(!showOptions)}>
        <Text
          numberOfLines={1}
          style={[styles.buttonStyle, dropDownButtonStyle]}>
          {selectedItem.name}
        </Text>
        <Image
          source={Icons.chevron}
          style={[styles.chevronIconStyle, latestTrailerChevron]}
        />
      </TouchableOpacity>
      {showOptions && (
        <>
          {filterList
            .filter(item => item?.id !== selectedItem?.id)
            .map(val => {
              return (
                <TouchableOpacity
                  style={styles.dropDownListItem}
                  key={val?.name ?? ''}
                  onPress={() => onSelectedItems(val)}>
                  <Text numberOfLines={1} style={styles.dropDownItemStyle}>
                    {val?.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </>
      )}
    </View>
  );
};

export default DropDown;
