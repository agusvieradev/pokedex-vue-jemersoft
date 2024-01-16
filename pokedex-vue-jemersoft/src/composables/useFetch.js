import { ref } from "vue";

export const useFetch = (url) => {
  const result = ref(null);
  const error = ref(null);
  fetch(url)    
    .then((r) => r.json())
    .then((data) => {
      result.value = data;
    })
    .catch((e) => {
      error.value = e;
    });

  return {
    result,
    error,
  };
};
