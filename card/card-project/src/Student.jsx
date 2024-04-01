import PropTypes from 'prop-types';

function Student(props) {

    const styles = {
        display: "flex",
        margin: "10px",
        width: "60%",
        displayFlex: "between",
        padding: "0 10px 0 10px",
        justifyContent: "space-around",
        fontFamily: "papyrus, Arial",
        fontSize: "20px",
        border: "1px solid hsl(0, 0%, 50%, 0.8)",
    }
    return (
        <div style={styles} className="students">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
// Student.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isStudent: PropTypes.bool
// }
Student.defaultProps = {
    name: "Guest",
    age: "N/A",
    isStudent: false
}
export default Student;