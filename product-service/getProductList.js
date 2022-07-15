'use strict';

module.exports.productList = async (event) => {
  const products = require('./productList.json');
  return {
    isBase64Encoded: false,
    statusCode: 200,
    body: JSON.stringify({products: products}),
    headers: {
      'Access-Control-Allow-Origin': '*',
   },
  };
};
