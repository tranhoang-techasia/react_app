import * as api from "./xhr";
import backendUrl from "./xhr/backendApi";

export async function  login(data) {
    //let result = await api.post(backendUrl.API_LOGIN_URL, data);
    let result = await api.get(backendUrl.API_VERSION);
    console.log(result);
    return result;

}
