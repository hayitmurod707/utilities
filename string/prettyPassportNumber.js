const prettyPassportNumber = (passportNumber = '') => {
   const passport = String(passportNumber || '');
   return `${passport.slice(0, 2)} - ${passport.slice(2)}`;
};
export default prettyPassportNumber;
