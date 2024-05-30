import { useLoaderData } from "react-router-dom";
import SinglePost from "../singlePost/SinglePost";

const Post = () => {
    const data = useLoaderData()
    return (
        <div>
            <h2>Post : {data.length}</h2>
            <div className="container">
                {
                    data.map((singlePost,indx)=><SinglePost key={indx} singlepost={singlePost}></SinglePost>)
                }
            </div>
        </div>
    );
};

export default Post;