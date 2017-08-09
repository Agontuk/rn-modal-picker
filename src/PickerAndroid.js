import React, { Component } from 'react';
import { Dimensions, Modal, StyleSheet, Text, View } from 'react-native';

import ItemList from './ItemList';
import { Props } from './Utils';

// eslint-disable-next-line react/prefer-stateless-function
class PickerAndroid extends Component {
    static propTypes = Props;

    render() {
        const { title, visible, onCancel, ...props } = this.props;

        return (
            <Modal
                animationType='fade'
                transparent
                visible={visible}
                onRequestClose={onCancel}
            >
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <ItemList {...props} />
                    </View>
                </View>
            </Modal>
        );
    }
}

export default PickerAndroid;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContainer: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width * 0.85,
        maxHeight: Dimensions.get('window').height * 0.85
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#999'
    }
});
