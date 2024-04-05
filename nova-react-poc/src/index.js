// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import HeaderAndImage from "./titledImages/headerAndImage";
//
// class ImagesWithText extends HTMLElement{
//     connectedCallback(){
//         this.render();
//     }
//
//
//
//     disconnectedCallback(){
//         ReactDOM.unmountComponentAtNode(this);
//     }
//
//     render(){
//         ReactDOM.render(<HeaderAndImage />, this);
//     }
// }
//
// window.customElements.define('images-with-text', ImagesWithText);




import ReactDOM from "react-dom/client";

const Greeting: React.FC<{ name: string }> = (props) => {
    return <p className="greeting">Hello, {props.name}</p>;
};

class GreetingWebComponent extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        const mountPoint = document.createElement("span");

        // Option 1: Inline styles -------------------
        const style = document.createElement("style");
        style.textContent = `
      .greeting {
        color: pink;
        font-size: 72px;
        font-family: 'Comic Sans MS';
      }
    `;

        shadow.appendChild(style);
        // -------------------------------------------

        // Option 2: Link Stylesheet -----------------
        const link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "/path/to/your/styles.css");

        let x = 1;
        x++;

        // this is a comment that might result in other changes

        shadow.appendChild(link);
        // -------------------------------------------

        shadow.appendChild(mountPoint);

        const name = this.getAttribute("name") ?? "";
        const token = this.getAttribute("token") ?? "";
        const root = ReactDOM.createRoot(mountPoint);
        root.render(<Greeting token={token} name={name} />);
    }
}

if (!window.customElements.get("custom-greeting")) {
    window.customElements.define("custom-greeting", GreetingWebComponent);
}