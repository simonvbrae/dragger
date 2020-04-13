import React from 'react';
import './App.css';
import Container from './components/container';
// import spectre
import 'spectre.css';
import parse from './utility/parser'

const container_amount = 7;
const spaces_per_container = 5;
// container titles

const createContainer_ = () => {
    return (
        <td>
            <Container spaces={spaces_per_container}></Container>
        </td>
    )
}

function App() {
    console.log("Input: ");
    console.log(parse());

    let x = [];
    for (let i = 0; i < container_amount; i++) {
        x.push(createContainer_());
    }

    return (
        <div className="App">
            <table className="table">
                <thead>
                </thead>
                <tbody>
                    <tr className="active">
                        {x}
                    </tr>
                    {/* Extra space where we can put some extra components */}
                </tbody>
                </table>

        </div>
    );
}

export default App;
