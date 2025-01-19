import React from 'react';
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);

        this.state = {
        userInfo:{
            name: 'Dummy',
            location: 'Default',
        }
        };
        // console.log("Child Constructor");
    }

    //  componentDidMount() {
    //     // console.log("Child Mounted");
    //     // const data = await fetch("https://api.github.com/users/akshaymarch7");
    //     // const json = await data.json(); 
    //     // console.log(json);
    //     // this.setState({
    //     //     userInfo:json,
    //     // });
    //     // console.log("child component did mount" + this.props.name);
    //  }
     

    // this problem is solved by using the componentWIllMount.
    // it continusly render the component so decrese the performance of the application.
        componentDidMount() {
        this.time = setInterval(() =>{
            // console.log("Interval");
        },1000);
        // console.log("Child Mounted");
    }

     componentDidUpdate() {
        // console.log("component did UPDATED");
    }

     componentWillUnmount() {

        // here use clearinterval to solve the problem of the componentDidMount.
        clearInterval(this.time);
        // console.log("componentdidUnmounted");
    }

  render() {

    // console.log("Child Render" + this.props.name);

    // const{count} = this.state;
    // const{count1} = this.state;
    // const{name} = this.props;
    const{name , location , avatar_url} = this.state.userInfo;

    return(
        <div className = " card ">
            {/* <h1>count : {count1}</h1>
            <h1>Count : {count}</h1>
            <button onClick = {()=>
                this.setState({
                    count:this.state.count + 1,
                    count1:this.state.count1+1,
                })}
                >Increment
                </button> */}
        <img src = {avatar_url}/>
        <h2>Name :{name}</h2>
        <h2>Age : {21}</h2>
        <h3>Location : {location}</h3>
        </div>
        );
  }
}
export default UserClass;