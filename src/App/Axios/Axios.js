import axios from "axios";
export const API_URL = `https://pixabay.com/api/`;

function axiosRequestHandler(
  method,
  baseUrl = API_URL,
  params = {},
  headers = {},
  data = {}
) {
  return axios({
    method: method,
    url: baseUrl,
    params: params,
    headers: headers,
    data: data,
  });
}

export default axiosRequestHandler;
