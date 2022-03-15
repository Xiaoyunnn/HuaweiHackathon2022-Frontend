import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveItem = async (key, value) => {
    try {
        const serialisedState = JSON.stringify(value);
        await AsyncStorage.setItem(key, serialisedState);
    } catch (err) {
        console.log('AsyncStorage Error: ' + err.message);
    }
}

export const loadItem = async key => {
    try {
        const item = AsyncStorage.getItem(key);
        if (item == null) return null;
        return JSON.parse(item);
    } catch (err) {
        console.log('AsyncStorage Error: ' + err.message);
    }
}

export const removeItem = async key => {
    try {
        const item = AsyncStorage.removeItem(key);
        return true;
    } catch (err) {
        console.log('AsyncStorage Error: ' + err.message);
    }
}
