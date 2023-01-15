//Functions 
export const DepositMoney = (amount) => {
    //Returing A Function
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}
export const WithdrawMoney = (amount) => {
    //Returing A Function
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}

export const lightmode = (mode) => {
    return (dispatch) => {
        dispatch({
            type: 'light',
            payload: mode
        })
    }

}
export const darkmode = (mode) => {
    return (dispatch) => {
        dispatch({
            type: 'dark',
            payload: mode
        })
    }

}