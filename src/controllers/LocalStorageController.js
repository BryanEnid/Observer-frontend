import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LocalStorage {
  static async get(field) {
    const jsonValue = await AsyncStorage.getItem(field);
    return jsonValue != null && JSON.parse(jsonValue);
  }

  static async save(field, value) {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(field, jsonValue);
  }
}
