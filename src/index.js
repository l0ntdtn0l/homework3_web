// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import MyButton from "./MyButton";
// import MyComponent from "./MyComponent";
// import MySection from "./MySection";
// import MyList from "./MyList";
// import App from "./App";
// import "./style.css";


// const root = ReactDOM.createRoot(document.getElementById('root'));

// const array = ["First", "Second", "Third"];

// const object = {
//     first: 1,
//     second: 2,
//     third: 3,
// };

// const appState = {
//   text: "My Button",
//   disabled: true,
//   items: ["First", "Second", "Third"],
// }

// const smartPeople = [
//   { name: 'Johann Goethe', age: 82, IQ: 210 },
//   { name: 'Albert Einstein', age: 76, IQ: 205 },
//   { name: 'Leonardo da Vinci', age: 67, IQ: 180 },
//   { name: 'Isaac Newton', age: 84, IQ: 190 },
//   { name: 'James Maxwell', age: 48, IQ: 190 },
//   { name: 'Rudolf Clausius', age: 66, IQ: 190 },
//   { name: 'Nicolaus Copernicus', age: 70, IQ: 160 },
//   { name: 'Gottfried Leibniz', age: 70, IQ: 182 },
//   { name: 'William Sidis', age: 46, IQ: 200 },
// ]

// const user = {
//   firstName: 'Elon',
//   lastName: 'Musk',
//   age: 49
// }

// const UserForm = () => {
//   return (
//     <form>
//       <label>Enter a username:</label>
//       <input/>
//     </form>
//   );
// }
// ReactDOM.render(<UserForm />, document.querySelector('#root'));

// root.render(
      // Excercise 0:
      // <p>Hello, <strong>JSX</strong></p>

      // Excercise 0.1:
      // <div>
      //   <button />
      //   <code />
      //   <input />
      //   <label />
      //   <p />
      //   <pre />
      //   <select />
      //   <table />
      //   <ul />
      // </div>

      // Excercise 0.2:
        // <section>
        //   <header>
        //     <h1>A Header</h1>
        //   </header>
        //   <nav>
        //     <a href='item'>Nav Item</a>
        //   </nav>
        //   <main>
        //     <p>The main content...</p>
        //   </main>
        //   <footer>
        //     <small>&copy; 2021</small>
        //   </footer>
        // </section>

        // Excercise 0.3:
        // <MySection>
        //   <MyButton>My Button Text</MyButton>
        // </MySection>

        // Excercise 0.4:
        // <section>
        //   <h1>Array</h1>
        //   <ul>
        //     {array.map((i) => (
        //       <li key={i}>{i}</li>
        //     ))}
        //   </ul>

          // <h1>Object</h1>
          // <ul>
          //   {Object.keys(object).map((i) =>(
          //     <li key={i}>
          //       <strong>{i}: </strong>
          //       {object[i]}
          //     </li>
          //   ))}
          // </ul>
        // </section>

        // Excercise 1.0, 1.1:
      //  <MyComponent />

      // Excercise 4.1, 4.6:
      // <>
      //     <div>Green is the prime color of the world</div>
      // </>

      // Excercise 4.2:
      // <section>
      //   <button style={{ margin: "10px 10px"}} type="primary" onClick={() => alert("Nguyen Duc Toan")}>
      //   Show alert
      //   </button>
      // </section>

      // Excercise 4.3:
        //  <>
        //   <ul>
        //   {smartPeople.map(({ name, age, IQ }) => (
        //     <li key={name}>{name} is {age} years old and has an IQ of {IQ}.</li>
        //    ))}
        //   </ul>
        // </>

      // Excercise 4.5:


//       <React.StrictMode>
//       <App />
//       </React.StrictMode>

// );
      
      // Excercise 1.2:
      // function render(props){
        //     root.render(
          //         <main>
          //               <MyButton text={props.text} disabled={props.disabled} />
          //               <MyList items={props.items}/>
          //         </main>
          //   );
          // }    
          // render(appState);
          
          // setTimeout(() => {
            //         appState.disabled = false;
            //         appState.items.push("Fourth");
            
  //         render(appState);
  // }, 1000);
  
  
  // Excercise 1.3:
  // function render({ second }){
    //   root.render(
      //   <main>
      //     <MyButton />
      //     <MyButton text={second.text} disabled={second.disabled}/>
      //   </main>
      //   );
      // }
      // render({
        //   second: {
          //     text: "Second Button",
          //     disabled: true,
          //   },
          // });
          
// Excercise 2.1, 2.2, 2.3:
// root.render(<App />);
          
// Excercise 3:
// root.render(<MyInput />);


// Homework 1:
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// Homework 2:

// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));  

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// Homework 3:

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


          