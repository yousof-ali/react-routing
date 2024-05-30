import { useLoaderData } from "react-router-dom";
import Person from "../person/Person";
import "./users.css"


const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>Our Users:{users.length}</h2>   
            <div className="container">
                {
                    users.map((user,indx)=><Person key={indx} user={user}></Person>)
                }
            </div>        
        </div>
        
    );
};

export default Users;