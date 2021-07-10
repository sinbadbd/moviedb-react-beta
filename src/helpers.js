
export const isPersistentState = ({ stateName }) => {
    const sessionState = sessionStorage.getItem(stateName);
    return sessionState && JSON.parse(sessionState)
}