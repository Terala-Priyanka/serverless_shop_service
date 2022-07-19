import products from "../constants/productList.json";

export const handler = async (event) => {
  return {
    isBase64Encoded: false,
    statusCode: 200,
    body: JSON.stringify({products: products}),
    headers: {
      'Access-Control-Allow-Origin': '*',
   },
  };
};
