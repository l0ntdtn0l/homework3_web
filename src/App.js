import MyButton from "./MyButton";
import MyComponent from "./MyComponent";
import MySection from "./MySection";
import MyList from "./MyList";
import { render } from "@testing-library/react";

const array = ["First", "Second", "Third"];

const object = {
    first: 1,
    second: 2,
    third: 3,
};

const appState = {
  text: "My Button",
  disabled: true,
  items: ["First", "Second", "Third"],
}

function App() {
  return (
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

        //   <h1>Object</h1>
        //   <ul>
        //     {Object.keys(object).map((i) =>(
        //       <li key={i}>
        //         <strong>{i}: </strong>
        //         {object[i]}
        //       </li>
        //     ))}
        //   </ul>
        // </section>

      // Excercise 1.0, 1.1:
      //  <MyComponent />

      // Excercise 1.2:
      // function render(props){
      //   <main>
      //         <MyButton text={props.text} disabled={props.disabled} />
      //         <MyList items={props.items}/>
      //       </main>
      // }    

      // Excercise 1.3:
      function render({ second }){
        <main>
          <MyButton />
          <MyButton text={second.text} disabled={second.disabled}/>
        </main>
      }
  );
}
// render(appState);

// setTimeout(() => {
  //   appState.disabled = false;
  //   appState.items.push("Fourth");
  
  //   render(appState);
  // }, 1000)
  
  render({
    second: {
      text: "Second Button",
      disabled: true,
    },
  });
  
  export default App;
  
  
  