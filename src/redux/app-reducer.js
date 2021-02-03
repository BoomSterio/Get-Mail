import {requestMessages} from './mail-reducer'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'app/INITIALIZED_SUCCESS': {
            return {
                ...state,
                initialized: true
            }
        }

        default: {
            return state
        }
    }
}

export const actions = {
    initializedSuccess: () => ({type: 'app/INITIALIZED_SUCCESS'}),
}

export const initializeApp = () => (dispatch) => {
    let promiseUserData = dispatch(requestMessages());
    Promise.all([promiseUserData])
        .then(() => {
            dispatch(actions.initializedSuccess())
        })
}

export default appReducer