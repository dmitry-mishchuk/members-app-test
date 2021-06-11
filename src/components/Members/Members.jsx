import React from 'react';
import style from './Members.module.css';

const Member = (props) => {
  return (
    <table>
      <tr>
        <td>#</td>
        <td>Name</td>
        <td>Email</td>
        <td>Date</td>
      </tr>
      {props.member.map((value, key) => (

        <tr>
          <td>{value.number}</td>
          <td>{value.name}</td>
          <td>{value.email}</td>
          <td>{value.registrationData}</td>
        </tr>

      ))}
    </table>
  )
}

const Members = (props) => {
  return (
      <div>
        <h2>Members</h2>
        <div className={style.tableWrapper}>
          {props.members.member.length!=0 ? <Member member={props.members.member}/>: ""}
        </div>

      </div>
  )
}

export default Members;
