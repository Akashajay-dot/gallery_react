# plugins
## PostCSS
It is all about plugins. It allows you to choose the plugins you will use, ditching unneeded dependencies, and giving you both a quick and lightweight setup to work with, with the basic characteristics of other preprocessors.
## Autoprefixer
Autoprefixer” is a plugin that can save you from the monotony of -webkit- and -moz- . It does exactly what it sounds like: automatically add prefixes to your CSS. All you do is supply it with a CSS sheet, and it will read through it and add vendor prefixes where needed.
# INFO
## useState
What is the useState Hook? useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
## useEffect
The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments
## res
res.json() is a method used in JavaScript when working with fetch API or other HTTP client libraries to parse the response body as JSON. It's typically used when making HTTP requests to APIs that return JSON data 
.then(res => res.json())
## rafce
rafce is a snippet abbreviation commonly used in code editors that support snippets and extensions like Visual Studio Code. It stands for "React Arrow Function Component with Export". When you type rafce and press the tab key, it automatically expands into a basic functional React component template using an arrow function syntax and exports it.
## onChange
avaScript allows us to listen to an input’s change in value by providing the attribute onchange. React’s version of the onchange event handler is the same, but camel-cased.

If you’re using forms inside of a React component, it’s a good idea to understand how the onChange event handler works with forms, state, and how you can pass the value to a function.
## e.preventDefault();
prevents  the default action associated with an event in the browser. In other words, it stops an event from having its default behavior. For example, when you click
# Working
1 creating the card layout
2 store the api key in a veriable with the name of prefix REACT_APP_XXXX adn store it as a .env file
3 import useState and useEffect in the app.js along with react
4 use use state to create states for images array loading and search term
5 use useEffect to fetch image from api using 'fetch',change the hard coded key value and pass the   value store in the .env file as ${process.env.REACT_APP_XXXX} and also pass the term as the value of q to add the search term
6 prase the respone to res.json
7 move the recieved data from fetch to images using  the setImages function passing in the data and isloading false
8 create a component folder and move the code for the card to a file named imagecard.js
9 use rafce(es7 vs code extension needed) to create the arror funtion
10 create container in the app.js file style it
11 create a grid with no of column 
12 map through every image in images and call the imagecard ever time passing image id and the image itself for prop
13 accept the parameter in imagecard component using structure({})
14 change the hard coded values odd source, like etc to imagekeys
15  add the loadind text to be displayed if the isloading ie true else print the grid
16 create a component for imagesearch
17 create the arrow function
18 copy the code for the underlying form from tailwid doc and paste in the image search  component
19 imort and use the component in the app.js
20 import and use the use state for the component the set the term 
21 use the onchange function to add event listner for the input field
22 pass the text from component to the app.js on using onSubmit on form
23 pass the term as a dependency fro useeffect so it fetches photos every time a term changes

