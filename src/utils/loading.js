import store from "../store";
import {showLoading, hideLoading} from "../reducers/loadingSlice";

const show = () => {
    store.dispatch(showLoading());
} 

const hide = () => {
    store.dispatch(hideLoading());
} 

const result = {
    hide : hide,
    show :show
}

export default result;