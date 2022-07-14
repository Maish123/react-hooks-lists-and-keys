import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  const colorElements = colors.map((color)=> {
    return <li key={color} style = {{color:color}}>{color}</li>
  })

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      {/* <ol>
        <li style={{ color: colors[0] }}>{colors[0]}</li>
        <li style={{ color: colors[1] }}>{colors[1]}</li>
        <li style={{ color: colors[2] }}>{colors[2]}</li>
        <li style={{ color: colors[3] }}>{colors[3]}</li>
        <li style={{ color: colors[4] }}>{colors[4]}</li>
      </ol> */}
      <ol>
        {colorElements}
      </ol>
    </div>
  );
}
// using objects
// const users = [
//   { id: 1, firstName: "Duane", lastName: "Watson" },
//   { id: 2, firstName: "Duane", lastName: "Johnson" },
// ];

// constuserHeading = user.map((user)=>{
//   return <h1 key = {user.id}>{user.firstName}</h1>
// });
//using non unique
// const fib = [0, 1, 1, 2, 3, 5];

// const fibList = fib.map((number, index)=>{
//   return <h1 key ={index}>{number}</h1>
// })
// function ColorItem(props) {
//   return <li style={{ color: props.color }}>{props.color}</li>;
// }

// function ColorList() {
//   const colors = [
//     "firebrick",
//     "rebeccapurple",
//     "salmon",
//     "darkslategray",
//     "hotpink",
//   ];
//   const colorElements = colors.map((color) => {
//     return <ColorItem key={color} color={color} />;
//   });


export default ColorList;
