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

    shadow.appendChild(link);
    // -------------------------------------------

    shadow.appendChild(mountPoint);

    const name = this.getAttribute("name") ?? "World";
    const root = ReactDOM.createRoot(mountPoint);
    root.render(<Greeting name={name} />);
  }
}

if (!window.customElements.get("custom-greeting")) {
  window.customElements.define("custom-greeting", GreetingWebComponent);
}