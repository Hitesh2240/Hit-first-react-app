
function BodyComponent(props){
   
    console.log(props)
    let {name, age} = props;
    // let userName = props.name;
    // let userAge = props.age


    return(<>
   
    <h2>My user has a name {name} and his age is {age}</h2>

</>)
}

export default BodyComponent