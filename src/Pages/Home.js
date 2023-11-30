import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();


    return(
        <div>
            <h1>Home</h1>
            <p>This is a Home Page</p>
            <button onClick={()=>navigate(+1)}> Next </button>
            <button onClick={()=>navigate(-1)}> Previous </button>
        </div>
        
    )
}

export default Home;