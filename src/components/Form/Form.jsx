import React  from "react";

class Form extends React.Component {
    state = {
        name : "",
        email : "",
        pass : "",
        mess : "",
        alf : "",
        gender : true
    }
    eventHandler = (event) => {
        this.setState ({
            [event.target.name] : event.target.value,
            [event.target.chacked] : event.target.value,
        })
    }
    formSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render () {
        return (
            <div>
                <h1>React form validation</h1>
                <form >
                    <input type="text" name="name" onChange={this.eventHandler} placeholder="Enter your name"/><br />

                    <input type="email" name="email" onChange={this.eventHandler} placeholder="Enter your email" /><br />

                    <input type="password" name="pass" onChange={this.eventHandler} placeholder="Enter your password" /><br />

                    <textarea name="mess" onChange={this.eventHandler} ></textarea>

                    <select name="alf" onChange={this.eventHandler} > 
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select><br /><br />

                    <input type="checkbox" name="gender" chacked={this.state}  />Male
                    <input type="checkbox" name="gender"  chacked={this.state}/>Female
                        <br />
                    <button onClick={this.formSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form;