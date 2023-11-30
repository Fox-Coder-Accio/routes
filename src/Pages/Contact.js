import { useNavigate } from "react-router-dom";


const Contact = () => {
   const navigate = useNavigate();

    return(
        <div>
            <h1>Contact</h1>
            <p>This is a Contact Page</p>
            <button onClick={()=>navigate("/about")}> Go to About 1 </button>
            {/* <button onClick={()=>navigate("about")}> Go to About 2 </button> */}
            <button onClick={()=>navigate(-1)}> Back </button>
            {/* <button onClick={()=>navigate(-2)}> Previous </button> */}
        </div>
    )
}

export default Contact;