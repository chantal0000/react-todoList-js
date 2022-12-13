import './App.css';


function _App(props) {

    // variable section
    const nameOfDev = "Chantal";
    const hobbiesProps = props.techStack;

    console.log(props);
    return (<div className="App">
            <header className="App-header">
                <p>work in progress by: {nameOfDev}!</p>
                <br/>
                <p>My Tech Stack is: {hobbiesProps}</p>
            </header>
        </div>);
}

export default _App;