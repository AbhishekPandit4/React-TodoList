// import { useState } from "react";
// import "./App.css";
// import TodoList from "./TodoList";

// function App() {
//   const [list, setList] = useState("");
//   const [item, setItem] = useState([]);

//   const handleEvent = (e) => {
//     setList(e.target.value);
//   };

//   const addList = () => {
//     setItem((oldItem) => {
//       return [...oldItem, { text: list, isChecked: false }]; // Add item with 'isChecked' set to false
//     });
//     setList("");
//   };

//   const deleteItem = (id) => {
//     setItem((oldItem) => {
//       return oldItem.filter((arrElem, index) => {
//         return index !== id;
//       });
//     });
//   };

//   const editItem = (id, newText) => {
//     setItem((oldItem) => {
//       return oldItem.map((arrElem, index) => {
//         if (index === id) {
//           return { ...arrElem, text: newText }; // Update the text of the item
//         } else {
//           return arrElem;
//         }
//       });
//     });
//   };

//   const toggleCheck = (id) => {
//     setItem((oldItem) => {
//       return oldItem.map((arrElem, index) => {
//         if (index === id) {
//           return { ...arrElem, isChecked: !arrElem.isChecked }; // Toggle 'isChecked'
//         } else {
//           return arrElem;
//         }
//       });
//     });
//   };

//   return (
//     <>
//       <div className="card">
//         <h1>ToDo List</h1>
//         <div style={{ backgroundColor: "white" }}>
//           <input
//             type="text"
//             value={list}
//             placeholder="Add a List of Item"
//             onChange={handleEvent}
//           />
//           &nbsp;
//           <button className="card-button" onClick={addList}>
//             +
//           </button>
//         </div>
//         <br />

//         <ol>
//           {item.map((i, index) => (
//             <TodoList
//               text={i.text}
//               key={index}
//               id={index}
//               isChecked={i.isChecked} // Pass whether the item is checked
//               onSelect={deleteItem}
//               onEdit={editItem}
//               onCheck={toggleCheck} // Pass the function to toggle check state
//             />
//           ))}
//         </ol>
//       </div>
//     </>
//   );
// }

// export default App;
import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import Add from "./assets/Add.jpg";

function App() {
  const [list, setList] = useState("");
  const [item, setItem] = useState([]);

  const handleEvent = (e) => {
    setList(e.target.value);
  };

  const addList = () => {
    setItem((oldItem) => {
      return [...oldItem, { text: list, isChecked: false }]; // Add item with 'isChecked' set to false
    });
    setList("");
  };

  const deleteItem = (id) => {
    setItem((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  const editItem = (id, newText) => {
    setItem((oldItem) => {
      return oldItem.map((arrElem, index) => {
        if (index === id) {
          return { ...arrElem, text: newText }; // Update the text of the item
        } else {
          return arrElem;
        }
      });
    });
  };

  const toggleCheck = (id) => {
    setItem((oldItem) => {
      return oldItem.map((arrElem, index) => {
        if (index === id) {
          return { ...arrElem, isChecked: !arrElem.isChecked }; // Toggle 'isChecked'
        } else {
          return arrElem;
        }
      });
    });
  };

  return (
    <>
      <div className="card">
        <h1>ToDo List</h1>

        {/* Add margin-bottom to create vertical gap */}
        <div style={{ backgroundColor: "white", marginBottom: "20px" }}>
          <input
            type="text"
            value={list}
            placeholder="Add a List of Item"
            onChange={handleEvent}
          />
          &nbsp;
          <img
            className="card-button"
            src={Add}
            onClick={addList}
            style={{ height: 40 }}
          />
        </div>

        <ol>
          {item.map((i, index) => (
            <TodoList
              text={i.text}
              key={index}
              id={index}
              isChecked={i.isChecked} // Pass whether the item is checked
              onSelect={deleteItem}
              onEdit={editItem}
              onCheck={toggleCheck} // Pass the function to toggle check state
            />
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
