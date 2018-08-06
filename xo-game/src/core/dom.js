class DOM {
    static createElement( tagName, options = {}) {
        let element =  document.createElement.apply( document, arguments );
        Object.assign( element, options );
        return element;
    }
}

/*
g = document.createElement(tagName);
g.setAttribute("id", "Div1");
*/
