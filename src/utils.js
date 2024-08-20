import PropTypes from 'prop-types';

function updateValueInBasketArray(basket, productId, newQuantity) {
  const fieldName = 'quantity';
  let itemFound = false;

  const newBasketArray = basket.map((entry) => {
    if (entry.id === productId) {
      itemFound = true;
      return {
        ...entry,
        [fieldName]: newQuantity,
      };
    } else {
      return entry;
    }
  });

  if (!itemFound) {
    newBasketArray.push({ id: productId, quantity: newQuantity });
  }

  return newBasketArray;
}

updateValueInBasketArray.propTypes = {
  newQuantity: PropTypes.number,
};

export { updateValueInBasketArray };
