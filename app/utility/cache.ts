import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
const prefix = "cache";
const expiryInMinutes = 5;

export const store = async (key: string, value: any) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const isExpired = (value: any) => {
  const now = moment(Date.now());
  const storedTime = moment(value.timestamp);
  const difference = now.diff(storedTime, "minutes");
  return difference > expiryInMinutes;
};

export const getCache = async (key: string) => {
  let item: any;
  try {
    const result = await AsyncStorage.getItem(prefix + key);
    item = result ? JSON.parse(result) : null;
    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
    return item.value;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
