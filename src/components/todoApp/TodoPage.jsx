import React, { useState } from "react";
import "./TodoPage.css";
import Button from "./Button";

const TodoPage = () => {
  const [inputData, setInputData] = useState({ title: "", description: "" });

  const [listData, setListData] = useState([]);
  const [editIndex, setEditIndex] = useState("");
  const [editClick, setEditClick] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    console.log(inputData);
  };

  //single function for multiple button actions like - Add, Read, Edit, Delete
  const handleAction = (action, e, id) => {
    if (
      action === "add" &&
      inputData.title !== "" &&
      inputData.description !== ""
    ) {
      if (editClick) {
        const updateData = listData;
        //The Object.assign() method is used to copy the values and properties from one or more source objects to a target object.
        //Syntax:-Object.assign(target, ...sources);

        Object.assign(updateData[editIndex], inputData); //using Object assign method, we will be copying input data on edit action to the edit index element in updateData array
        setListData([...updateData]); //now assigning the edited data to the listData
        setEditClick(false);
      } else {
        console.log("inputs: ", inputData);
        setListData([...listData, inputData]);
      }
      setInputData({ title: "", description: "" });
    }
    if (action === "delete") {
      const filterData = listData.filter((item, i) => i !== id);
      setListData(filterData);
    }
    if (action === "edit") {
      const editData = listData[id];
      setInputData({
        title: editData.title,
        description: editData.description,
      });
      setEditClick(true);
      setEditIndex(id);
    }
  };
  console.log(listData);

  return (
    <>
      <div className="container">
        <div className="form">
          {editClick ? (
            <h1 id="addHead">Update Todo Task</h1>
          ) : (
            <h1 id="addHead">Add Todo Task</h1>
          )}
          <div>
            <input
              type="text"
              placeholder="Enter title"
              name="title"
              value={inputData.title}
              onChange={handleChange}
              id="title"
            />
            <br />
            <input
              type="text"
              placeholder="Enter description"
              name="description"
              value={inputData.description}
              onChange={handleChange}
              id="detail"
            />
            <br />
            <Button
              id="yellowBtn"
              onClickAction={(e) => handleAction("add", e)}
            >
              {editClick ? (
                <i class="fa-solid fa-arrows-rotate"></i>
              ) : (
                <i class="fa-solid fa-plus"></i>
              )}{" "}
              {editClick ? "Update" : "Add "}
            </Button>
          </div>
        </div>
      </div>
      <div className="ListContainer">
        <h1 id="listHead">Todo List</h1>
        <hr />
        <div className="listData">
          {listData.length > 0 &&
            listData.map((todo, id) => (
              <div className="list">
                <h2 id="titleP">
                  {id + 1}. {todo.title}{" "}
                </h2>
                <br />
                <h4 id="descriptionP">{todo.description}</h4>
                <hr id="listHr" />
                <div className="btn">
                  <Button
                    id="greenBtn"
                    onClickAction={(e) => handleAction("edit", e, id)}
                  >
                    <i class="fa-regular fa-pen-to-square"></i> Edit
                  </Button>

                  <Button
                    id="redBtn"
                    onClickAction={(e) => handleAction("delete", e, id)}
                  >
                    <i class="fa-solid fa-trash"></i> Delete
                  </Button>
                </div>
              </div>
            ))}
          {listData.length === 0 && (
            <div>
              <h1 id="noTaskHead">
                No todo task added yet{" "}
                <i class="fa-solid fa-clipboard-list"></i>
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoPage;
