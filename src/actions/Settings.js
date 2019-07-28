const URL = "http://127.0.0.1:8000/api/v1/"
const sendSettings = () => {
  return {
    type: "SEDNING_SETTINGS"
  }
}
export const instaSettings = (input) => {
  return dispatch => {
  dispatch(sendSettings);
  return fetch(URL+ 'insta_follower', {
    method: "POST",
    headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(input)
  })
  .then(response => response.json())
  .then(settings => {
    dispatch({type: 'CREATE_SETTINGS', settings: settings})})
 }
}
