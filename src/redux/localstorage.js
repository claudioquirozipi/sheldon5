export const obtenerStorage = () => {
    const userLogin = localStorage.getItem('user');
    if(userLogin === null) {
        return undefined
    }
    return JSON.parse(userLogin);
}

export const guardarStorage = (state) => {
    const userLogin = JSON.stringify(state);
    localStorage.setItem('user', userLogin);
}