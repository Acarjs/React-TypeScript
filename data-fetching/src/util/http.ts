export async function get(url: string) {
  const response = await fetch(url); // that will an object which created by browser.

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = (await response.json()) as unknown; //if response is succesfull then we extract the data by calling the JSON method. So that, we get the data in JSON format. JSON will also yield a promise. You also get more type safety when you use "unknown" rather than "any".

  return data;
}

//fetch() returns a data. Promise is also generic type. It generally is its own type a promise but it's a promise that will yield a value. Promise<Response> and "response" generic type-this related type is that value that will be yielded. It's response object. And response is another type, just like promise that's provide by the browser, that's built-in, so to say.
