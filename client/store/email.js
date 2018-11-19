import axios from 'axios'

const SEND = 'SEND'

const initialState = {}

const sendEmail = mail => ({
  type: SEND,
  mail
})

export const sendEmailThunk = mail => async dispatch => {
  try {
    const res = await axios.post('/mail', mail)
    dispatch(sendEmail(mail))
  } catch(err) {
    console.log(err)
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SEND:
      return {...state}
    default:
      return state
  }
}
