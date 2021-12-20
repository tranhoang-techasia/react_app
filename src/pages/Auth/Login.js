import {Form, Button} from "react-bootstrap";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Validator from 'validatorjs';
import {login} from "../../reducers/authSlice";
import {Navigate} from "react-router-dom";

const Login = (props) => {
    const data = {
        "username" : "",
        "password" : "",
        "remember" : false
    };
    const rules = {
        "username" : "required",
        "password" : "required", 
    };

    const { isLoggedIn } = useSelector((state) => state.auth);

    const errorList = {
        "password" : "",
        "username" : "",
    }

    const dispatch = useDispatch();

    const [state, setState] = useState(data);
    const [errors, setErrors] = useState(errorList);

    const handleChange = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setState({...state,[event.target.name]: value});
    }

    const validateData = () => {
        let validation = new Validator(state, rules);
        let result = validation.passes();
        let newErrs = {}; 
        for (let [key, error] of Object.entries(validation.errors.all())) {
            newErrs[key] = error[0]
        }
        setErrors(newErrs);
        return result;
    }
    
    const submitForm = async (e) => {
        e.preventDefault()
        if (!validateData()) return;

        dispatch(login(state))
        .unwrap()
        .then(() => {
          props.history.push("/home");
          window.location.reload();
        })
        .catch((error) => {
            
        });        
    }

    if (isLoggedIn) return (<Navigate to="/home"/>);
    return (

        <main style={{ height : "100vh" }}>
            <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                <Form onSubmit={submitForm}>
                    <Form.Group className="mb-3" controlId="formBasicusername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={state.username} name="username" onChange={handleChange} placeholder="Enter username" />
                        <Form.Text className="text-danger">{errors.username}</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={state.password}name="password"  onChange={handleChange} placeholder="Password" />
                        <Form.Text className="text-danger">{errors.password}</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" name="remember"  value={state.remember} onChange={handleChange} />
                    </Form.Group>
                    <Button variant="primary" className="w-100" type="submit" >
                        Submit
                </Button>
                </Form>
            </div>
        </main>
    );
}


export default Login;