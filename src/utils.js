function updateValueInObjectArray(objectArray, id, fieldName, newValue) {
  const newObjectArray = objectArray.map((entry) => {
    if (entry.id === id) {
      return {
        ...entry,
        [fieldName]: newValue,
      };
    } else {
      return entry;
    }
  });
  return newObjectArray;
}

export { updateValueInObjectArray };
