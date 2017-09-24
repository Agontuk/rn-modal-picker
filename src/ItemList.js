import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, View } from 'react-native';

import Item from './Item';

const Props = {
    data: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ])).isRequired,
    selectedValue: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]).isRequired,
    keyExtractor: PropTypes.func,
    labelExtractor: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired
};

const DefaultProps = {
    keyExtractor: item => item.id
};

class ItemList extends Component {
    static propTypes = Props;

    static defaultProps = DefaultProps;

    renderItem = ({ item }) => {
        const { labelExtractor, onValueChange, selectedValue } = this.props;

        return (
            <Item
                item={item}
                selectedValue={selectedValue}
                labelExtractor={labelExtractor}
                onItemPress={onValueChange}
            />
        );
    };

    separatorComponent = () => <View style={styles.separator} />;

    render() {
        const { data, keyExtractor } = this.props;

        return (
            <FlatList
                data={data}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={this.separatorComponent}
                renderItem={this.renderItem}
            />
        );
    }
}

export default ItemList;

const styles = StyleSheet.create({
    separator: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#EEEEEE'
    }
});
