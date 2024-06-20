const prettyPhoneNumber = (phone = '') => {
   const checkedPhone = String(phone || '');
   const first = checkedPhone.slice(0, 2);
   const second = checkedPhone.slice(2, 5);
   const third = checkedPhone.slice(5, 7);
   const fourth = checkedPhone.slice(7, 9);
   return `+998 (${first}) ${second} ${third} ${fourth}`;
};
export default prettyPhoneNumber;
