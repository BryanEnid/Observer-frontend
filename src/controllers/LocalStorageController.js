import AsyncStorage from '@react-native-async-storage/async-storage';

export const save = async (field, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    return await AsyncStorage.setItem(field, jsonValue);
  } catch (e) {
    // error reading value
  }
};

export const get = async (field) => {
  try {
    const jsonValue = await AsyncStorage.getItem(field);
    return jsonValue != null ?? JSON.parse(jsonValue);
  } catch (e) {
    // error reading value
  }
};
