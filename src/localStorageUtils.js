export const getFromLocalStorage = (key, fallbackValue = []) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallbackValue;
}

export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}