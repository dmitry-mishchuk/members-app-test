import './App.css';
import RegisterForm from './components/Form/RegisterForm';
import Members from './components/Members/Members';

function App(props) {
  return (
    <div className="App">
      <h1>Welcome to the Club</h1>
        <RegisterForm addMember={props.addMember}
                      currentNameText={props.state.members.currentText.name}
                      currentEmailText={props.state.members.currentText.email}
                      changeCurrentNameText={props.changeCurrentNameText}
                      changeCurrentEmailText={props.changeCurrentEmailText}
                      clearMembers={props.clearMembers}
                      error={props.state.error}/>
        <Members members={props.state.members}/>
    </div>
  );
}

export default App;
