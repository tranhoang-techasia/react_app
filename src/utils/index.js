
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
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) return user.body;
    let userSession = JSON.parse(sessionStorage.getItem("user"));
    if (userSession) return userSession.body;
    return "";
}

const data = {
    storeTokenToSession : storeTokenToSession,
    storeTokenToLocal : storeTokenToLocal,
    deleteToken : deleteToken,
    getToken : getToken,

}

export default data;