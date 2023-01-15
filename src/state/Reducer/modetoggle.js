const togglemode = (state = 'light', action) => {
    if (action.type === "light") {
        // state = action.payload;
        return action.type;
    }
    else if (action.type === 'dark') {
        // state = action.payload;
        return action.type;
    }
    else {
        return state;
    }

}

export default togglemode;