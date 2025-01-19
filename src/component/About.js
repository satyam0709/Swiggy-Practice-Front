import UserClass from "./UserClass";
import {Component , useContext} from "react";
import UserContext  from '../../utils/UserContext';

class About extends Component{
    constructor(props){
        super(props);

        // console.log("Parent Constructor");
    }

    componentDidMount(){
        // console.log("Parent componentDidMount");
    }

    render(){
        // console.log("Parent Render");
        return(
            <div>
                <h1>This is about US</h1>
                <div>
                    <UserContext.Consumer>
                    {({loggedInUser})=>(<h1>{loggedInUser}</h1>)}
                    </UserContext.Consumer>
                </div>
                {/* <User name = {"satyam (fun)"}/> */}
                <UserClass name = {"First"} locaction = {"PATNA"}/>
            </div>
        );
    }
}
export default About; 