import { Link, useNavigate } from "react-router-dom";


const SinglePost = ({singlepost}) => {
    const {id,title}=singlepost
    const navigate = useNavigate()
    const see = ()=>{
        navigate(`/post/${id}`)

    }
    return (
        <div className="my-users">
            <h2>ID: {id}</h2>
            <p>Title: {title}</p>
            <Link to={`/post/${id}`}>Details..</Link>

            <button onClick={see}>See more</button>
        </div>
    );
};

export default SinglePost;