/**
 * Function Authorize Client Login 
 */
export const isAuthorizated = () => {
    let token = localStorage.getItem('session');
    return (token) ? true : false;
};