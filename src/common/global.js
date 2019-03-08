/**
 * @providesModule global
 */

import { AsyncStorage, Dimensions, Platform, Alert, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';

export const WINDOW = Dimensions.get('window');

export const deviceType = WINDOW.width < 480 ? 'phone' : 'tablet';

export const USER_STORAGE_KEY = 'LOTTALK_USER_DATA';

export const APP_DISK_STORAGE_KEY = 'DISK_APP_DATA';

export const buildFormData = (formData, data, parentKey) => {
  if (data && String(parentKey).indexOf('[image]') == -1 && String(parentKey).indexOf('image') == -1 && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
    Object.keys(data).forEach(key => {
      buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
    });
  } else {
    const value = data == null ? '' : data;
    formData.append(parentKey, value);
  }
}
export const ROUTE_MAP = [
  'splash',
  'home',
  'education',
];
