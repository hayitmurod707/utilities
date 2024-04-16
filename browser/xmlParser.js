const xmlParser = xml => {
   let jsonData = {};
   if (xml.nodeType === 1) {
      if (xml.attributes.length > 0) {
         jsonData.attributes = {};
         for (let j = 0; j < xml.attributes.length; j++) {
            const attribute = xml.attributes.item(j);
            jsonData.attributes[attribute.nodeName] = attribute.nodeValue;
         }
      }
   }
   const textNodes = [].slice
      .call(xml.childNodes)
      .filter(node => node.nodeType === 3);
   if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
      jsonData = [].slice
         .call(xml.childNodes)
         .reduce((text, node) => text + node.nodeValue, '');
   } else if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i++) {
         const item = xml.childNodes.item(i);
         const nodeName = item.nodeName.replace(':', '_');
         if (nodeName !== '#text') {
            if (typeof jsonData[nodeName] === 'undefined') {
               jsonData[nodeName] = item.childNodes.length
                  ? xmlParser(item)
                  : null;
            } else {
               if (typeof jsonData[nodeName].push === 'undefined') {
                  const old = jsonData[nodeName];
                  jsonData[nodeName] = [];
                  jsonData[nodeName].push(old);
               }
               jsonData[nodeName].push(
                  item.childNodes.length ? xmlParser(item) : null
               );
            }
         }
      }
   }
   return jsonData;
};
export default xmlParser;
