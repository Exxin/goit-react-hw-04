import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "ohd9gJ0_buoQlY6djCs9oB1skp6avnRQDdpQWYLDDcU";

export const fetchPhotos = async (searchQuery, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      per_page: 10,
      page: currentPage,
    },
  });

  console.log(response);

  return response.data.results;
  
};

