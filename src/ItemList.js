import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';

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
    valueExtractor: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired
};

const DefaultProps = {
    keyExtractor: item => item.id
};

class ItemList extends Component {
    static propTypes = Props;

    static defaultProps = DefaultProps;

    renderItem = ({ item }) => {
        const { valueExtractor, onValueChange, selectedValue } = this.props;

        return (
            <Item
                item={item}
                selectedValue={selectedValue}
                valueExtractor={valueExtractor}
                onItemPress={onValueChange}
            />
        );
    };

    separatorComponent = () => <View style={{ height: 1, backgroundColor: '#DDD' }} />;

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
