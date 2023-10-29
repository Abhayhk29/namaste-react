import React from 'react'
import User from './User';
import UserClass from './UserClass';

class About extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("parent component did mount called");
    }
    render(){
        return (
            <div>
                <h2>User</h2>
                {/* <User name={"Abhay Pandey(functional)"}/> */}
                <UserClass />
                {/* <UserClass name={"second (class)"} /> */}
            </div>
          )
    }
}

// const About = () => {
//   return (
//     <div>
//         <h2>User</h2>
//         {/* <User name={"Abhay Pandey(functional)"}/> */}
//         <UserClass name={"Abhay Pandey(class)"} />
//     </div>
//   )
// }

export default About;


// constructor - render - API or component Did Mount 
// render and commit
// batch render phase than api or mount will happenn for both


// componentDidUpdate