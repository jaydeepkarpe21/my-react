function customRender(reactElement, container){
    /*
    const domElemant = document.createElement(reactElement.type)
    domElemant.innerHTML = reactElement.Children
    domElemant.setAttribute("href", reactElement.props.href)
    domElemant.setAttribute("target", reactElement.props.target)

    container.appendChild(domElemant)
    */


    const domElemant = document.createElement(reactElement.type)
    domElemant.innerHTML = reactElement.Children
    for (const prop in reactElement.props) {
        if (prop === "Children") continue; 
        domElemant.setAttribute(prop, reactElement.props[prop])  
    }
    container.appendChild(domElemant)
}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    Children: 'Click me to visit google'
}

const mainContainer = document.querySelector("#root")


customRender(reactElement, mainContainer)