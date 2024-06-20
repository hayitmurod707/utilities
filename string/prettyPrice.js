const prettyPrice = (currency = '') => {
   if (currency === '0') {
      return currency;
   } else {
      const length = currency?.length;
      const float = currency.slice(length - 2, length);
      const int = currency
         .slice(0, length - 2)
         .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      const newCurrency = `${int}.${float}`;
      return newCurrency;
   }
};
export default prettyPrice;
