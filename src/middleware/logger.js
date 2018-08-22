function logger (store) {
    return function (next) {
        return function (action) {
            console.group(action.type);
            console.log('The action:', action);
            const returnValue = next(action);
            console.log('The new state:', store.getState());
            console.groupEnd();
            return returnValue;
        }
    }
}

export default logger;