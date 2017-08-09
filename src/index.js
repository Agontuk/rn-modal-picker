import { Platform } from 'react-native';

import PickerIOS from './PickerIOS';
import PickerAndroid from './PickerAndroid';

const Picker = Platform.OS === 'ios' ? PickerIOS : PickerAndroid;

export default Picker;
