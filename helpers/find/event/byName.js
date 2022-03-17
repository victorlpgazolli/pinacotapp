export const findEventByExactName = (eventName) => {
    return ({ name }) => name === eventName;
}