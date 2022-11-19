// import React from 'react';
// import "./App.css";

// Excercise 2.1: 

// export default function App() {
    // const [name] = React.useState("Toan");
    // const [age] = React.useState(21);

//     return (
//         <>
//         <p>My name is {name}</p>
//         <p>My age is {age}</p>
//         </>
//     );
// }

// Excercise 2.2:
// function App() {
//     const [name, setName] = React.useState("Adam");
//     const [age, setAge] = React.useState(35);

//     return (
//         <>
//         <section>
//             <input
//              value = {name}
//              onChange={(e) => setName(e.target.value)}
//              />
//              <p>My name is {name}</p>
//         </section>

//         <section>
//             <input 
//             type="number"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             />
//             <p>My age is {age}</p>
//         </section>


//         </>
//     )
// } 
// export default App;

//         Homework 1:

// import React, { Component } from 'react';
// import './App.css';
// import Button from './Button.js';
// import { sounds } from './sounds';

// class App extends Component {
//   constructor() {
//     super();
//     this.playSound = this.playSound.bind(this);
//     this.state = {
//       sounds: sounds
//     };
//   }
  
//   componentDidMount() {
//     // Add audio objects
//     this.setState({
//       sounds: this.state.sounds.map(sound => {
//         return {...sound, audioObj: new Audio(sound.audioSrc)};
//       })
//     });
    
//     window.addEventListener('keydown', this.playSound);
//   }
  
//   playSound(e) {
//     // Will hold event index based on 
//     // keyboard key pressed or click event
//     let eventIndex;
    
//     let keyCode = e.keyCode;
    
//     // Handle keyboard events
//     if (keyCode) {
//       // Check if number keys 1-8 were pressed
//       if (keyCode > 48 && keyCode < 57) {
//         eventIndex = keyCode - 49;
//       // Exit function if other keys pressed
//       } else { return; }
//     // Handle click events
//     } else {
//       eventIndex = parseInt(e.currentTarget.dataset.key, 10) - 1;
//     }
    
//     const audio = this.state.sounds[eventIndex].audioObj;
    
//     // Play the sound
//     audio.currentTime = 0;
//     audio.play();    
    
//     // Animate boom animation
//     this.setState({
//       sounds: this.state.sounds.map((sound, index) => {
//         if (eventIndex === index) {
//           return {...sound, playing: true};
//         }
//         return sound;
//       })
//     });
    
//     // Remove boom animation
//     setTimeout(() => {
//       this.setState({
//         sounds: this.state.sounds.map((sound, index) => {
//           if (eventIndex === index) {
//             return {...sound, playing: false};
//           }
//           return sound;
//         })
//       });
//     }, 70);
//   }
  
//   render() {
//     const renderButtons = this.state.sounds.map((sound, index) => {
//       return (
//         <Button
//           key={sound.audioSrc}
//           imageSrc={sound.imageSrc}
//           isDarkText={sound.isDarkText}
//           playing={sound.playing}
//           index={index}
//           playSound={this.playSound}
//         />
//       );
//     });
    
//     return (
//       <section id="drumkit">
//         {renderButtons}
//       </section>
//     );
//   }
// }

// export default App;

// Homework 2:

// import React, { useState } from "react";
// import "./App.css";
// import Oscillator from "./Oscillator";
// import ChangeWaveform from "./ChangeWaveform";
// import Gain from "./Gain";
// import Filter from "./Filter";

// const App = () => {
//   const [effects, setEffects] = useState({
//     waveform: "sine",
//     gainValue: 0.15,
//     filterType: "lowpass",
//     filterFreq: 15000
//   });

//   const inputChange = e => {
//     setEffects({ ...effects, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="App">
//       <div className="piano">
//         <Oscillator
//           waveform={effects.waveform}
//           filterType={effects.filterType}
//           filterFreq={effects.filterFreq}
//           gainValue={effects.gainValue}
//         />
//       </div>
//       <div className="effects">
//         <ChangeWaveform inputChange={inputChange} waveform={effects.waveform} />
//         <Gain inputChange={inputChange} gainValue={effects.gainValue} />
//         <Filter
//           inputChange={inputChange}
//           filterType={effects.filterType}
//           filterFreq={effects.filterFreq}
//         />
//       </div>
//     </div>
//   );
// };

// export default App;

// Homework 3:

import React from "react";
import "./style.css";

import InfoCard from "./InfoCard";
import experience from "./experience";
import CVComponent from "./CVComponent";
import education from "./education";
import SkillsList from "./SkillsList";

const info = {
  imgSrc: "https://i.pinimg.com/originals/2a/92/06/2a9206a4a0d1d23cf92636c42115d054.jpg",
  name: "Nguyễn Đức Toàn",
  profession: "Ninja",
  address: "Làng lá",
  phone: 1900100,
  email: "naruto@gm.uit.edu.vn",
  about:
    "Một ninja không thực hiện nhiệm vụ thực sự là rác rưởi, nhưng một người nào đó rời bỏ đồng đội của mình còn tệ hơn cả rác rưởi"
};

export default function App() {
  const experienceComponent = experience.map(item => (
    <CVComponent item={item} />
  ));
  const educationComponent = education.map(item => <CVComponent item={item} />);

  return (
    <div>
      <main>
        <section className="container">
          <section className="info">
            <InfoCard info={info} />
            <h2>
              <i className="fa fa-cogs" /> Skills
            </h2>
            <SkillsList />
          </section>

          <section className="work">
            <h1>
              <i className="fa fa-briefcase fa" /> Work Experience{" "}
            </h1>
            {experienceComponent}
          </section>
          <hr />
          <section className="education">
            <h1>
              {" "}
              <i className="fa fa-university" /> Education{" "}
            </h1>
            {educationComponent}
          </section>

          <section className="other">
            <h1>
              {" "}
              <i className="fa fa-desktop" /> Other Interests{" "}
            </h1>
            <h3> Ayurveda</h3>
            <ul>
              <li>
                <i className="fa fa-book" /> Meditation
              </li>
              <li>
                <i className="fa fa-book" /> Yoga
              </li>
            </ul>
            <h3>Sustainability</h3>
            <ul>
              <li>Reducing waste</li>
              <li>Build a sustainable wardrobe</li>
            </ul>
          </section>
        </section>
      </main>
      <footer className="footer">
        <p>Paula Latorre</p>
        <i className="fa fa-facebook-square" />
        <i className="fa fa-instagram" />
        <i className="fa fa-github" />
        <i className="fa fa-linkedin-in" />- Foocoding assigment: Resume
      </footer>
    </div>
  );
}
