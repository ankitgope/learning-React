//THIS IS A DEMO HOW REACT WORK UNDER THR HOOD

//4. making a methid for custome Render having two values one is parameter reactElement and place where to inject "container"

function customRender(reactElement, container) {
  /* Version 1
//creating a dom element
const domElement = document.createElement
(reactElement.type)
domElement.innerHTML = reactElement.children
//setting attrbute
domElement.setAttribute('href',reactElement.props.href)
domElement.setAttribute('target',reactElement.props.target)

//ADDING IN MAIN CONTAINER 

container.appendChild(domElement)
*/ // Version 2
  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop == "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

//2.  this is how react sees the element generally it tries to make a tree
const reactElement = {
  type: "a", // tells the type of element it csn be div csn be paragraph can be a anchor tag
  props: {
    // properties is a object can have any value
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click to visit google",
};

//1. QUERY SELECTOR
const mainConatiner = document.querySelector("#root");

//HERE IS THE ELEMENT THAT RENDER THE ELEMENT (INJECTING THE reactElement in root )

//3. this element expects two thing (what to inject, where to inject)

customRender(reactElement, mainConatiner); //but as of now we dont know how the coustom render work so we are making a function  customRender
