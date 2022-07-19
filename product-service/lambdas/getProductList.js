'use strict';
const products = require('../constants/productList.json');

module.exports.handler = async (event) => {
  return {
    isBase64Encoded: false,
    statusCode: 200,
    body: JSON.stringify({products: products}),
    headers: {
      'Access-Control-Allow-Origin': '*',
   },
  };
};
