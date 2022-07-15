'use strict';

module.exports.productById = async (event) => {
	const productId = event.pathParameters.id;
  const products = require('./productList.json');
	const filteredproduct = products.filter(item => item.id === productId);
  const product = filteredproduct.length ? filteredproduct[0] : null;

  if(product) {
    return {
      isBase64Encoded: false,
      statusCode: 200,
      body: JSON.stringify({product}),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  }

  return {
    isBase64Encoded: false,
      statusCode: 200,
      body: "Product not found",
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
  }
  
};
