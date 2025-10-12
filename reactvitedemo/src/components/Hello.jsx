function Hello(props){
    const { name, greet} = props;
    return (
        <div>
            <h1>hello {name}, {greet}</h1>
        </div>
        )
}

export default Hello;