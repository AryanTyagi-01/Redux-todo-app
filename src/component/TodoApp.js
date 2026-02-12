import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../redux/Action";
// import "./TodoApp.css";

export default function TodoApp() {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    phone: "",
    subject: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Handle Input Change
  const handleChange = (e) => {
  const { name, value } = e.target;

  // Roll No & Phone me sirf numbers allow
  if (name === "phone" || name === "rollNo") {
    if (!/^[0-9]*$/.test(value)) return;
  }

  setFormData({ ...formData, [name]: value });
};


  // Add or Update
  const handleAddOrUpdate = () => {
    if (
      !formData.name ||
      !formData.rollNo ||
      !formData.phone ||
      !formData.subject
    ) {
      return;
    }

    if (editIndex !== null) {
      dispatch(updateTodo(editIndex, formData));
      setEditIndex(null);
    } else {
      dispatch(addTodo(formData));
    }

    setFormData({
      name: "",
      rollNo: "",
      phone: "",
      subject: "",
    });
  };

  // Edit
  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(todos[index]);
  };

  return (
    <div className="todo-container">
      <div className="todo-card">
        <h2 className="title">Silverwink Course ToDo List</h2>

        <div className="form-grid">
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Enter Roll No"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Enter Phone No"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            
          />
          

          <input
            type="text"
            placeholder="Enter Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <button className="main-btn" onClick={handleAddOrUpdate}>
          {editIndex !== null ? "Update" : "Add"}
        </button>

        {todos.length === 0 ? (
          <p className="empty-text">No records yet. Add one!</p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li key={index} className="todo-item">
                <div className="todo-info">
                  <p><strong>Name:</strong> {todo.name}</p>
                  <p><strong>Roll No:</strong> {todo.rollNo}</p>
                  <p><strong>Phone:</strong> {todo.phone}</p>
                  <p><strong>Subject:</strong> {todo.subject}</p>
                </div>

                <div className="btn-group">
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => dispatch(removeTodo(index))}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <footer className="footer">
          Silverwink IT Training Institute | Assignment
        </footer>
      </div>
    </div>
  );
}
