const style = {
    color : 'red', 
}
const MyComponent = props => {
    return <h1 style={style}>{props.name} 입니다</h1>
}

MyComponent.defaultProps = {
    name : "default"
}


export default MyComponent;