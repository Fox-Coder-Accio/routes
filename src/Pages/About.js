
import { useNavigate } from "react-router-dom";

const About = ({count}) => {
    const navigate = useNavigate();


    return(
        <div>
            <h1>About</h1>
            <p>{count}</p>
            <p>This is a About Page</p>
            <button onClick={()=>navigate(+1)}> Next </button>
            <button onClick={()=>navigate(-1)}> Previous </button>
        </div>
        
    )
}

export default About;