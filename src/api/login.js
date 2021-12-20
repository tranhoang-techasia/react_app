import * as api from "./xhr";
import * as backendUrl from "./xhr/backendApi";

export async function login(data) {
    return await api.post(backendUrl.getUrl('API_LOGIN'), data);
}

export async function userDetail() {
    return await api.get(backendUrl.getUrl("API_USER_DETAIL"));
}
