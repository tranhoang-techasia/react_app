import Axios from "axios";

function createAxios(){
  return Axios.create({
    headers : {
      "app-id" : "adsflajfdlasf",
      "app-pass" : "3094813490"
    }
  });
}

export async function get(url){
  const axios = createAxios();
  return axios.get(url);
}

export async function post(url, data){
  const axios = createAxios();
  return axios.post(url, data);
}
