import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function DiningHallButtons() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (id) => {
        setActiveButton(id);    // activated clicked button id
        alert('You clicked me: '+ id);
    };

    return (
        <div>
            <button class ="halls" type ="button" id="hillside" onClick={() => handleButtonClick("hillside")}>Hillside</button>
            <button class ="halls" type ="button" id="parkside" onClick={() => handleButtonClick("parkside")}>Parkside</button>
            <button class ="halls" type ="button" id="beachside" onClick={() => handleButtonClick("beachside")}>Beachside</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<DiningHallButtons></DiningHallButtons>)
// const header = <><h1> CSULB Dining Hall Tracker</h1> <p> Please select a dining hall.</p></>
// const dining_halls = (
//     <table>
//         <tr>
//             <td>Hillside</td>
//             <td>Parkside</td>
//             <td>Beachside</td>
//         </tr>
//     </table>
// )
// const header_root = ReactDOM.createRoot(document.getElementById('roosdt'));

// header_root.render(header);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

