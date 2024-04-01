function Button(){

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        width: "100px",
        height: "50px",
        fontFamily: "papyrus",
        fontSize: "20px",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    }

    return (
        <button style={styles}>Click me</button>
    )
}

export default Button