     
import { useEffect, useState, useMemo } from "react";
import "./index.css";
import SearchUser from "./SearchUser";
import dashBoard from "../UseContext/UseContext";

const UserDashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [inputText, setInputText] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch(() => setError("Failed to load data"));
  }, []);

  const handleAdd = () => {
    const newCard = {
      name: inputText,
      title: "Default Title",
      description: "Default Description",
      status: "Pending",
    };

    setData([...data, newCard]);
    setInputText("");
  };

  const handleDelete = (index) => {
    const updatedData = data.slice();
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  const handleEdit = (index) => {
    const updatedData = [...data];
    const currentItem = updatedData[index];

    const newTitle = prompt("Edit title:", currentItem.title);
    const newDescription = prompt("Edit description:", currentItem.description);

    
    if (newTitle && newTitle.trim()) updatedData[index].title = newTitle.trim();
    if (newDescription && newDescription.trim())
      updatedData[index].description = newDescription.trim();

    setData(updatedData);
  };

  const handleStatusChange = (index) => {
    const updatedData = [...data];
    const currentStatus = updatedData[index].status;

    
    if (currentStatus === "Pending") updatedData[index].status = "In-Progress";
    else if (currentStatus === "In-Progress") updatedData[index].status = "Completed";
    else updatedData[index].status = "Pending";

    setData(updatedData);
  };

  const filteredProducts = useMemo(() => {
    return data.filter((item) =>
      item.status.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="cardss">
      <div className="inputcenter">
        <input
          type="text"
          placeholder="Enter name"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <dashBoard.Provider value={{ search, setSearch }}>
        <SearchUser />
      </dashBoard.Provider>

      <div className="cards">
        {filteredProducts.map((item, index) => (
          <div className="card" key={index}>
            <h1>Name: {item.name}</h1>
            <h2>Title: {item.title}</h2>
            <p>Description: {item.description}</p>
            <p>Status: {item.status}</p>
            <button className="edit" onClick={() => handleEdit(index)}>
              Edit
            </button>
            <button className="delete" onClick={() => handleDelete(index)}>
              Delete
            </button>
            <button className="status" onClick={() => handleStatusChange(index)}>
              Change Status
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
