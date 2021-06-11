import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import {addMember, changeCurrentNameText, changeCurrentEmailText, clearMembers} from './store/store';
import {subscribe} from './store/store';

let rerenderDom = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
           addMember={addMember}
           changeCurrentNameText={changeCurrentNameText}
           changeCurrentEmailText={changeCurrentEmailText}
           clearMembers={clearMembers}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderDom(store.getState());

subscribe(rerenderDom);

reportWebVitals();
