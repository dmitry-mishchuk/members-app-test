import {verificationEmail, currentDate} from './../common/common';

let rerenderDom = () => {};

let store = {
  _state: {
    members: {
      member: [
        {number: 1, name: "John Show", email: "j.snow@mail.com", registrationData: "17.01.2019"},
        {number: 2, name: "Dana Watkins", email: "dana2000@mail.com", registrationData: "15.02.2020"}
      ],
      currentText: {name: "", email: ""},
    }
  },

  getState() {
    return this._state;
    },
  nullify(){
    store._state.members.currentText.name = "";
    store._state.members.currentText.email = "";
  }
}

export const addMember = () => {
  let emails = store._state.members.member.map(e => {return e.email});
  if (verificationEmail(emails, store._state.members.currentText.email)){
    let newUser = createNewMember(store._state.members.currentText.name, store._state.members.currentText.email);
    store._state.members.member.push(newUser);
  }
  store.nullify();
  rerenderDom(store.getState());
}
export const changeCurrentNameText = (newText) => {
  store._state.members.currentText.name = newText;
  rerenderDom(store.getState());
}
export const changeCurrentEmailText = (newText) => {
  store._state.members.currentText.email = newText;
  rerenderDom(store.getState());
}
export const clearMembers = () => {
  store._state.members.member = [];
  rerenderDom(store.getState());
}
export const subscribe = (observer) => {
  rerenderDom = observer;
}
const createNewMember = (user, email) => {
  return {number: store._state.members.member.length+1,
          name: user,
          email: email,
          registrationData: currentDate()};
}
export default store;
