import {createSelector} from 'reselect'

export const getMessages = (state) => {
    return state.mail.messages;
}

export const getMessagesByDate = createSelector(getMessages, (messages) => {

})