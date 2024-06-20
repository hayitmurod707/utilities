const prettyCardValid = cardValid => {
   const validNumber = String(cardValid || '').replace('/', '');
   return validNumber.slice(0, 2) + '/' + validNumber.slice(2);
};
export default prettyCardValid;
