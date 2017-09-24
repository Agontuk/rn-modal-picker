import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Props = {
    item: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]).isRequired,
    selectedValue: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]).isRequired,
    labelExtractor: PropTypes.func.isRequired,
    onItemPress: PropTypes.func.isRequired
};

class Item extends PureComponent {
    static propTypes = Props;

    onItemPress = () => {
        const { item, onItemPress } = this.props;
        onItemPress(item);
    };

    render() {
        const { item, labelExtractor, selectedValue } = this.props;
        const itemValue = labelExtractor(item);
        const selected = labelExtractor(selectedValue);
        const active = itemValue === selected;

        return (
            <TouchableOpacity onPress={this.onItemPress}>
                <View style={styles.container}>
                    <Text style={active ? styles.selected : {}}>{itemValue}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Item;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    selected: {
        color: '#007AFF',
        fontWeight: '600'
    }
});
