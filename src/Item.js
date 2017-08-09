/**
 * @flow
 */
import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

type Props = {
  item: Object,
  labelKey: string,
  valueKey: string,
  selected: boolean,
  onItemPress: Function
};

class Item extends PureComponent {
  props: Props

  onItemPress = () => {
    const { item, onItemPress, valueKey } = this.props;
    onItemPress(item[valueKey]);
  }

  render() {
    const { item, labelKey, selected } = this.props;

    return (
      <TouchableOpacity onPress={this.onItemPress}>
        <View style={styles.container}>
          <Text
            style={{
              color: selected ? '#3478f6' : 'black',
              fontWeight: selected ? '600' : 'normal'
            }}
          >
            {item[labelKey]}
          </Text>

          { selected && <Icon name='check' size={18} color='#3478f6' /> }
        </View>
      </TouchableOpacity>
    );
  }
}

export default Item;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
