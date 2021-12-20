import * as api from "./xhr";
import * as urlHelper from "./xhr/backendApi";
import loading from "../utils/loading";

export async function getList() {
    const url = urlHelper.getUrl("API_LIST_NOTIFY", {});
    try {
        loading.show();
        let data = await api.get(url);
        loading.hide();
        return data;
    } catch (error) {
        loading.hide();
        throw error;
    }
}

export async function detail(id) {
    const url = urlHelper.getUrl("API_NOTIFY_DETAIL");
    try {
        loading.show();
        let data = await api.get(url, {id : id});
        loading.hide();
        return data;
    } catch (error) {
        loading.hide();
        throw error;
    }
}
