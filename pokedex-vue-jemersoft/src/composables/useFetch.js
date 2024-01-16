export const useFetch = (url, [body]) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };
  const getData = async () => {
    const data = await fetch(url, options);
    const response = await data.json()
    console.log(response)
  };
};
