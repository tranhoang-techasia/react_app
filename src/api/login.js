import * as api from "./xhr";
import backendUrl from "./xhr/backendApi";

export async function  login(data) {
    try {
        let result = await api.post(backendUrl.API_LOGIN_URL, data);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}
