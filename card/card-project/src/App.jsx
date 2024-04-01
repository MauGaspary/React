import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";

function App() {
    return (
        <>
            <Card />
            <Student name="John" age="30" isStudent={false} />
            <Student name="Fagundes" age={23} isStudent={true} />
            <Student name="Cachorro"/>
        </>
    );
}

export default App;
