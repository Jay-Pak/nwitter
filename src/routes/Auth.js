import  React,{ useState } from "react";

// export default () => <span>Auth</span> // Default exporter 

// const Auth = () => <span>Auth</span>;
const Auth = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const onChange = (event) => {
        // console.log(event.target.name)
        const {target: {name, value}} = event; //Event로 부터 name과 value를 받아 온다. 
        if (name === "email") 
        { 
            setEmail(value);
        }
        else if (name === "password") 
        {
            setPassword(value);
        }
    };
    const onSubmit = (event) => {
        event.preventDefault()
    };
    return (
                <div>
                    <form onSubmit={onSubmit}>
                        <input name="email" type="text" placeholder="email" value={email} onChange={onChange} required />
                        <input name="password" type="Password" placeholder="password" value={password} onChange={onChange} required />
                        <input type="button" value="Log In"/>
                    </form>
                    <div>
                        <button> Continue with Google </button>
                        <button> Continue with Github </button>
                    </div>
                </div>
            )
        }

export default Auth;


