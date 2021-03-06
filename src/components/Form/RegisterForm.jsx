import React from 'react';
import style from './RegisterForm.module.css';

const RegisterForm = (props) => {
  let addMember = () => {
    props.addMember();
  };
  let onNameChange = (event) => {
    props.changeCurrentNameText(event.target.value);
  };
  let onEmailChange = (event) => {
    props.changeCurrentEmailText(event.target.value);
  };
  let clear = () => {
    props.clearMembers();
  }

  return (
    <div className={style.regFormWrapper}>
      <h2>New Member</h2>
      <div>
        <label>Name:<input onChange={ onNameChange }
                           value={ props.currentNameText }/></label>
      </div>
      <div className={props.error ? style.error : ""}>
        <label>Email:<input onChange={ onEmailChange }
                            value={ props.currentEmailText }/></label>
        {props.error ? <div className={style.message}>Member with this email was registered </div> : ""}
      </div>

      <div>
        <button onClick={ addMember }>Add</button>
        <button onClick={ clear }>Clear</button>
      </div>
    </div>
  )
}
export default RegisterForm;
