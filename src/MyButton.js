import * as React from "react";

// class MyButton extends React.Component{
//     render(){
        // Excercise 0.3:
        // return <button>{this.props.children}</button>;

        // Excercise 1.2:
        // const {disabled, text} = this.props;
        // return <button disabled={disabled}>{text}</button>;
//     }
// }

const MyButton = ({ disabled, text}) => {
    <button disabled={disabled}>{text}</button>;
};

MyButton.defaultProps = {
    text: "My Button",
    disabled: false,
};

export default MyButton;