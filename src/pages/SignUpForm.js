import React from "react"
import { Link } from "react-router-dom"

class SignUpForm extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            name: "",
            hasAgreed: false
        };

        this.handldeChange = this.handleChange.bind(this);
        this.handldeSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {
        let target = e.target;
        let value = target.type === "checkbox" ? target.check : target.value;
        let name = target.name

        this.setState({
            [name]: value

        });
    }
    handleSubmit(e) {
        e.preventDefault();

        console.log("The form was submitted with the following data");
        console.log(this.state);

    }
    render() {
        return (
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Email</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" />
                    </div>
                    <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" />I agree to all statements in <a href="" className="FormField__TermsLink">Terms of service</a>
                        </label>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign Up</button><Link to="/sign-in" className="FormField__Link"> I'm already a member</Link>
                    </div>


                </form>
            </div>
        )

    }

}
export default SignUpForm