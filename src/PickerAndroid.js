import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Modal, StyleSheet, View } from 'react-native';

const Props = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired
};

class PickerAndroid extends Component {
  static propTypes = Props;

  render() {
    const { title, visible, onCancel } = this.props;

    return (
      <Modal
        animationType='fade'
        transparent={false}
        visible={visible}
        onRequestClose={onCancel}
      >
        <View style={styles.container}>
          <View style={styles.innerContainer}>
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
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').height * 0.75
  }
});
