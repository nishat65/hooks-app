import axios from "axios";

export const API_URL =
  "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json";
export const UNDERWORKS_URL = "http://api.underworks.ths.agency/api/";

// export const Authorisation = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkudW5kZXJ3b3Jrcy50aHMuYWdlbmN5XC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTg2OTUwODUwLCJleHAiOjE1ODcwNTg4NTAsIm5iZiI6MTU4Njk1MDg1MCwianRpIjoiM1NqbDNIbnJuUno3dzNkbSIsInN1YiI6IjljYmE4OWUxLTM5ZTEtNDAxMy1hNDEzLTI2NDA4NmZkZDVmOCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.yAVpSR_KUrtIIt3P84tleF0O4ImViKyO2D4-usmNLh0'

export function axiosHandler(
  method,
  baseUrl,
  headers = {},
  data = {},
  params = {}
) {
  return axios({
    method: method,
    url: baseUrl,
    headers: headers,
    data: data,
    params: params,
  });
}
