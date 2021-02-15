const baseUrl = 'https://ah-shop.herokuapp.com/api/';

export default async function callApi(method, url, data) {
  try {
    const response = await fetch(baseUrl + url, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response) return {
      code: 400,
      data: null
    }
    return response.json();
  } catch(e) {
    // console.log(e);
    return {
      code: 400,
      data: null
    }
  }
}
