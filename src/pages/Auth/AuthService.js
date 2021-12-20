
const storeTokenToSession = (token) => {
    sessionStorage.setItem("token", token)
}

const storeTokenToLocal = (token) => {
    localStorage.setItem("token", token)
}

const deleteToken = (token) => {
    sessionStorage.removeItem(token);
    localStorage.removeItem(token);
}

const getToken = () => {
    let token = localStorage.getItem("token");
    if (token) return token;
    let tokenSession = sessionStorage.getItem("token");
    if (tokenSession) return tokenSession;
    return "";
}

const data = {
    storeTokenToSession : storeTokenToSession,
    storeTokenToLocal : storeTokenToLocal,
    deleteToken : deleteToken,
    getToken : getToken,

}

export default data;