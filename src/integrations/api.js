export const BASE_URL = 'https://shorturl-ts.herokuapp.com';

export async function PostRequest(url, body, headers = {}) {
  
  const Request = await fetch(BASE_URL + url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  }).catch((err) => err);

  console.log(`> Request`, Request);
  if (Request.status === 200) {
    const RequestJSON = await Request.json();
    
    const { data, message } = RequestJSON;

    const shorterUrl = BASE_URL + '/' + data.identifier;

    return {
      status: Request.status,
      message,
      shorterUrl,
    };
  }
  else if (Request.status === 409) {
    
    return {
      status: Request.status,
      message: 'Already Exists this ShorterId',
    }
  }
  else {
    
    return {
      status: 500,
      message: 'Internal Server Error, Try Again Later.',
    };
  }
}
