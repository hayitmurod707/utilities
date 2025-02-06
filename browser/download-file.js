const downloadFile = path => {
   const host = window.location.host;
   const REACT_APP_HOST = process.env.REACT_APP_HOST;
   const REACT_APP_TEST_HOST = process.env.REACT_APP_TEST_HOST;
   const protocol = host === REACT_APP_HOST ? 'https' : 'http';
   const baseHost =
      host === REACT_APP_HOST ? REACT_APP_HOST : REACT_APP_TEST_HOST;
   const url = ${protocol}://${baseHost}/${path};
   window.open(url, '_blank');
};
export default downloadFile;
