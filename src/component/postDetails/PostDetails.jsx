import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const {id,title}=useLoaderData()
    const navigate = useNavigate()
    const goBack = ()=>{
        navigate(-1)
    }
    
    return (
        <div>
            <h2>ID:{id}</h2>
            <p>Title:{title}</p>
            <button onClick={goBack}>Go back</button>
        </div>
    );
};

export default PostDetails;