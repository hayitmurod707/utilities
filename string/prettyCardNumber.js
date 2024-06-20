const prettyCardNumber = cardNumber => {
   if (typeof cardNumber === 'number' || typeof cardNumber === 'string') {
      const parsedNumber =
         cardNumber.slice(0, 6) + '******' + cardNumber.slice(12);
      const text = [...parsedNumber].reverse().join('');
      const array = [];
      for (let x = 0; x < text.length; x += 4) {
         array.push([...text.slice(x, x + 4)].reverse().join(''));
      }
      return array.reverse().join().replace(/,/g, ' ');
   } else {
      return '';
   }
};
export default prettyCardNumber;
