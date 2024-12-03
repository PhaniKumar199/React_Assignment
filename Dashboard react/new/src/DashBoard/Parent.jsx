import { useEffect, useState, useMemo } from "react";
import './index.css';
import Context from "../Context/Context";
import Child from "./Child";
const Parent = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);  
    const [theme,setTheme]=useState('light');
    

    useEffect(() => {
             fetch("./data.json")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => setError("Failed to load data"));
    }, []);

    
    const filteredProducts = useMemo(() => {
        return data.filter(item =>
            item.gender.toLowerCase().includes(search.toLowerCase()) || 
            item.firstName.toLowerCase().includes(search.toLowerCase())
        );
    }, [data, search]);

   
    if (error) {
        return <p>{error}</p>;
    }

   
    const handleClick = (user) => {
        setSelectedUser(user); 
    };
    

   
        

    return (
        <div className={`cards ${theme}`}>
            <h1>User Dashboard</h1>
            
            <div className="in">
                <input
                    type="text"
                    placeholder="Search User"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </div>

            
            <h1>Your search history: <span>{search}</span></h1>
            

           
            <div className="product-card">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item, index) => (
                        <div key={index}>
                            <div className="card">
                                
                                <button onClick={() => handleClick(item)}>{item.firstName}</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No users found</p>
                )}
            </div>

           
            {selectedUser && (
                <div className="user-details">
                    <h2>User Details</h2>
                    <p><strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}</p>
                    <p><strong>Gender:</strong> {selectedUser.gender}</p>
                    <p><strong>Age:</strong> {selectedUser.age}</p>
                </div>
            )}
            <Context.Provider value={{setTheme}}>
                <Child/>
            </Context.Provider>
        </div>
        
    );
};

export default Parent;
