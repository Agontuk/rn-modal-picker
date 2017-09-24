import React, { Component } from 'react';
import {
    Modal,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import ItemList from './ItemList';
import { Props } from './Utils';

// IOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
const IOS_BLUE = '#007AFF';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

// eslint-disable-next-line react/prefer-stateless-function
class PickerIOS extends Component {
    static propTypes = Props;

    render() {
        const { title, visible, onCancel, ...props } = this.props;

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

                <ItemList {...props} />
            </Modal>
        );
    }
}

export default PickerIOS;

const styles = StyleSheet.create({
    container: {
        paddingTop: STATUS_BAR_HEIGHT,
        height: STATUS_BAR_HEIGHT + APPBAR_HEIGHT,
        ...Platform.select({
            ios: {
                backgroundColor: '#FFF',
                shadowColor: 'black',
                shadowOpacity: 0.1,
                shadowRadius: StyleSheet.hairlineWidth,
                shadowOffset: {
                    height: StyleSheet.hairlineWidth
                },
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: 'rgba(0, 0, 0, .3)'
            },
            android: {
                backgroundColor: '#F7F7F7',
                elevation: 4
            }
        })
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
        fontSize: 17,
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
        fontSize: 17
    },
    done: {
        color: IOS_BLUE,
        fontSize: 17
    }
});
