import { useLoaderData } from "react-router-dom";

const Detals = () => {
    const data = useLoaderData();
    const {name}=data
    return (
        <div>
            Name:{name};
        </div>
    );
};

export default Detals;