// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "headClass" },
//   "Hello from React !"
// );

// console.log(heading) //Object (that is a React Element)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//Nested Element
{
  /* <div id="parent">
    <div id="child">
        <h1>I am h1 Tag</h1>
        <h2>I am h2 Tag</h2>
    </div>
    <div id="child2">
        <h1>I am h1 Tag</h1>
        <h2>I am h2 Tag</h2>
    </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag"),
  ]),
]);

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
