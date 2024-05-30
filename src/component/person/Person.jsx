import { Link } from "react-router-dom";
import "./person.css"

const Person = ({user}) => {
    const {id,name,email,address,website}=user
    return (
        <div className="my-users">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>City: {address.city}</p>
            <p>Website: {website}</p>
            <Link to={`/user/${id}`}>see more</Link>
        </div>
    );
};

export default Person;