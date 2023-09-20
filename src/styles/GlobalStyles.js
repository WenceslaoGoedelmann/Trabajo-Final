import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
   padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
html{
    scroll-behavior: smooth; /* para que cuando un boton de la navbar me lleve a una sesion de la pagina el scrolleo sea suave */
    scroll-padding-top: 100px;
}
body{
    width: 100%;
    background-color: rgb(50, 50, 50);
}


a {
text-decoration: none;
}

a:visited {
color: white;
}

li {
list-style: none;
}

`;
