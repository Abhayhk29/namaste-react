import React, { Component } from 'react'

// constructor => render =>
export default class UserClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            userInfo: {
                name: '',
                location: '',
                avatar_url: ''
            }
        }

        console.log(this.props.name + "child constructor called")
    }

    async componentDidMount() {
        // api call

        const data = await fetch("https://api.github.com/users/abhayhk29");
        const json = await data.json();
        console.log(json)
        console.log(this.props.name + "Child component did mount called");
        this.setState({
            userInfo:json
        })
    }

    componentDidUpdate(){
        console.log("component will updatwe")
    }

    componentWillUnmount(){
        console.log("Removed the code");
    }


  render() {
    console.log( this.props.name + "child render called")

    const {name, location, avatar_url} = this.state.userInfo;
    // const {name} = this.props;
    const {count} = this.state;
    return (
        <div className='user-card'>
            <h2>{count}</h2>
            <button onClick={() => {
                // never upate the state value
                this.setState({
                    count: this.state.count + 1
                })
            }}>Increment</button>
            <img src={avatar_url} />
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Company: Persistent</h2>
        </div>
    )
  }
}



/*
Constructoe (dummmy)
render(dummy)
  html dummy

  component did Mount
     api call
     this.setState 


     ----------update

     render (API Data
        <html (new API daata))

        compoenent did Update



        component will unmount  : when we removed from the comonent
        clear the things from the component
        example of setTimeOut because os single pages
        taking multiple times of setInterval 
        so we need to clean up the interval


        // super props : need to check --
        // async not for the useEffect :--- need to check 
*/
