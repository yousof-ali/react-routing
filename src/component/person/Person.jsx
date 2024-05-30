import "./person.css"

const Person = ({user}) => {
    const {name,email,address,website}=user
    return (
        <div className="my-users">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>City: {address.city}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default Person;