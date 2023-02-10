

export const filterCaps = (capsArray, inputValue) => {
    return capsArray.filter(cap => cap.brand.toLowerCase().includes(inputValue.toLowerCase()))
}