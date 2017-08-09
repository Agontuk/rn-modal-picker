import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    FlatList,
    Modal,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Item from './Item';

// IOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
const IOS_BLUE = '#007AFF';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const Props = {
    title: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
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
    onCancel: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired
};

const DefaultProps = {
    keyExtractor: item => item.id
};

class PickerIOS extends Component {
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
        const { title, visible, data, onCancel, keyExtractor } = this.props;

        return (
            <Modal
                animationType='slide'
                transparent={false}
                visible={visible}
                onRequestClose={onCancel}
            >
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <TouchableOpacity style={styles.cancelContainer} onPress={onCancel}>
                            <Text style={styles.cancel}>Cancel</Text>
                        </TouchableOpacity>

                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{title}</Text>
                        </View>

                        {false &&
                        <TouchableOpacity style={styles.doneContainer} onPress={onCancel}>
                            <Text style={styles.done}>Done</Text>
                        </TouchableOpacity>
                        }
                    </View>
                </View>

                <FlatList
                    data={data}
                    keyExtractor={keyExtractor}
                    ItemSeparatorComponent={this.separatorComponent}
                    renderItem={this.renderItem}
                />
            </Modal>
        );
    }
}

export default PickerIOS;

const styles = StyleSheet.create({
    container: {
        paddingTop: STATUSBAR_HEIGHT,
        backgroundColor: '#F7F7F7',
        height: STATUSBAR_HEIGHT + APPBAR_HEIGHT,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: StyleSheet.hairlineWidth,
        shadowOffset: {
            height: StyleSheet.hairlineWidth
        }
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        flex: 1,
        position: 'absolute'
    },
    title: {
        fontSize: 18,
        fontWeight: '600'
    },
    cancelContainer: {
        position: 'absolute',
        left: 16
    },
    doneContainer: {
        position: 'absolute',
        right: 16
    },
    cancel: {
        color: IOS_BLUE,
        fontSize: 18
    },
    done: {
        color: IOS_BLUE,
        fontSize: 18
    }
});
