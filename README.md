# namaste-react
# dev build server 
<!-- 
    refresh
    Local Server
    HMR : Hot Module Replacement
    File Watching Algorithm - written in C++
    Faster Build beacuse of cache
    Image Optimization
    Minification and create bundling
    Compress
    Consistent Hashing : Need to check
    Code Splitting
    Differential Bundling : Support older browser
    Diagonstic
    Error Handling
    Https on the Local
    Tree Shaking : Remove unused code for you
    Different Dev and Prod Builds
 -->

 <!-- 
  We need to remove the app.js in the main while creating the bundle
  -->

  <!-- Config Driven Interview
    based on the configuration the UI will be displayed
  
  
  
   -->
// react elements : Object => (when we rendered it become HTML)
// it will replace on the root
// JSX : HTML or XML like syntax (is not HTML);
// transpiled before it reaches the JS Engine -- > DONE BY -> PARCEL -> BABEL
//  JSX => React.createElement => ReactElement - JS Object -> HTML
// AST -. Tokinization -> 
// attribute : camelCase
// for multiple wrap in bracker
// const jsonHeading = (<h1 id="jsx-id">
//                       Abhay Kumar Pandey REAXR
//                     </h1>);
// const heading = React.createElement('div', {id:"heading"}, "Jai Prabhupad");
// const root = ReactDOM.createRoot(document.getElementById("root"));


// const TestComponent = () => {
    //     return (
//         <h1>ABHAY KUMAR PANDEY</h1>
//     )
// }
// React functional Component just JavaScript Functions Just returning the JSX
// Functional components just returning the React elements

// Component Composition : One Component into another
// Cross Site Scripting : it sanitize it automatically

// const HeadingComponent = () => {
    //     return (
        //         <div id="newID">
        //             { 1 + 1}
        //             {jsonHeading}
        //             <TestComponent />
        //             {TestComponent()}
        //             <h1>Hare Krishna</h1>
        //         </div>
        //     )
        // }
        

        
// React Component
// Class Components(OLD) And Functional Components(NEW)
/*
HEader
    - Logos
    - NAV
Body
    Search
    card container
     Individual Card
Footer
  -Disclaimer
  -Information
*/


React (Reconsilation Algorithm) React Fiber

Virtual Dom : representation of actual dom

Monolith 
MicroServices : Single responsibility : 

loads -> Render -> API ->Render (Currently we are using this tech)
shimmer page : Fake card : ---
SPA Sigle page application

routing :
client Side 

Server Side Routing

Dynamic Routing


<!-- 
    Class based components:---

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


 -->

 Single Responsibility : no hard rule for that
  reusable
  testable
  maintable


  Tailwind css :---
  major advantages : only include used class in the build


  Higher Order Components
  Takes a component and return a component :-- 
  Takes acomponent and enhance it and than return it.


controlled Components : ---
  when it controlled by the parents

  when it controls all it by self : uncontrolled



  <!-- 
    React toolkit : ----
    Reacr Redux
    RTK (React tool kit)
    
    Redux object : Big javascript kept in the global state

    slices :-- part or portion of the store
    example : user slice , user, cart , rest card 

    cannot directly modify 
    dispatch action => it call a action -> and this function modify the function (or slict of a redux store)
    function -> reducer

    Read the data from the store :---
    Selector :-- to read the data
    subscribing to the store (Reading or sync with the store)

    install the redux toolkit , react-redux
    1. Build the store
    2.connect store to app
    3. slice create (cart slice)
    4 dispatch Action
    5. Selector

    Dont Mutate state (Older redux) returning wasmandatory


    redux toolkit
    we have to mutate the state
    Returning is not mandatory

    immer library : find difference between the state
    you need to mutate the existing state or return the value (it will replace it)

    Types of Test (Developer)
    - Unit Testing
    - Integeration Testing
    - End to End (e2e)

    React testing library based in DOm Testing library : JEST
    jest is a delightful testing library


    Setting up Testing in our App
     - Install React Testing library 
     - Install Jest
     - Installed babel dependencies
     - configure babel
        - config parcel config file to diable babel transpilation
        - jest configuration (npx jest --init)
        - install js dom library
        - Install @babel/preset-react - to make JSX work in test cases
        - include @babel/preset-react inside my babel config file
        - Install @testing-library/jest-dom

        __ called as dunder

   -->