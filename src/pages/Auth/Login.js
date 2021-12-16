import {Form, Button} from "react-bootstrap";
import {useState} from "react";
import Validator from 'validatorjs';
import * as ApiLogin from "../../api/login";

const Login = (props) => {
    const data = {
        "email" : "",
        "password" : "",
        "remember" : false
    };
    const rules = {
        "email" : "required",
        "password" : "required", 
    };

    const errorList = {
        "password" : "",
        "email" : "",
    }

    const [state, setState] = useState(data);
    const [errors, setErrors] = useState(errorList);

    const handleChange = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setState({...state,[event.target.name]: value});
    }

    const validateData = () => {
        let validation = new Validator(state, rules);
        validation.passes();
        let newErrs = {}; 
        for (let [key, error] of Object.entries(validation.errors.all())) {
            newErrs[key] = error[0]
        }
        setErrors(newErrs);
    }
    
    const submitForm = () => {
        validateData();
        ApiLogin.login(state).then((data) => console.log(data));
    }

    return (
        <main style={{ height : "100vh" }}>
            <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={state.email} name="email" onChange={handleChange} placeholder="Enter email" />
                        <Form.Text className="text-danger">{errors.email}</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={state.password}name="password"  onChange={handleChange} placeholder="Password" />
                        <Form.Text className="text-danger">{errors.password}</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" name="remember"  value={state.remember} onChange={handleChange} />
                    </Form.Group>
                    <Button variant="primary" className="w-100" type="button" onClick={submitForm}>
                        Submit
                </Button>
                </Form>
            </div>
        </main>
    );
}


export default Login;