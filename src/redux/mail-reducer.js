import {mailAPI} from '../api/mail-api'

let initialState = {
    messages: [
    ]
}

const mailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'mail/MESSAGES_RECEIVED': {
            return {
                ...state,
                messages: [ ...action.messages]
            }
        }
        case 'mail/MESSAGES_DELETE_SUCCESS': {
            return {
                ...state,
                messages: [...state.messages.filter(m => {
                    return !action.toDelete.some(id => m.id === id)
                })]
            }
        }

        default: {
            return state
        }
    }
}

export const actions = {
    messagesReceived: (messages) => ({type: 'mail/MESSAGES_RECEIVED', messages}),
    messagesDeleteSuccess: (toDelete) => ({type: 'mail/MESSAGES_DELETE_SUCCESS', toDelete})
}

export const requestMessages = () => async (dispatch) => {
    let data = await mailAPI.requestMessages();

    if (data.resultCode === 0)
        dispatch(actions.messagesReceived(data.messages))
}

export const deleteMessages = (identifiers) => async (dispatch) => {
    let data = await mailAPI.deleteMessages(identifiers);
debugger
    if (data.resultCode === 0)
        dispatch(actions.messagesDeleteSuccess(identifiers))
}

export default mailReducer