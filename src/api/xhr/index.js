import Axios from "axios";
import utils from "../../utils";

function createAxios(){
  return Axios.create({
    headers : {
      "app-id" : "adsflajfdlasf",
      "app-pass" : "3094813490",
      "Authorization" : "Bearer " + utils.getToken()
    }
  });
}

export async function get(url, params = {}){
  const axios = createAxios();
  return await axios.get(url, {
    params: params
  });
}

export async function post(url, data){
  const axios = createAxios();
  let res =  await axios.post(url, data);
  return res;
}
