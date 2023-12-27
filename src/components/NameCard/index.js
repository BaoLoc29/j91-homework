// =========================Truyền theo kiểu props ============================
import './style.css';

const NameCard = ({user, increaseAge}) => {
    const { name, age, gender } = user;

    // Xác định màu nền dựa trên gender
    let backgroundColor;
    if (gender === "male") {
        backgroundColor = "green";
    } else {
        backgroundColor = "red";
    }
    return (
        <div className="card" style={{ backgroundColor }}>
            <div className="name">Name: {name}</div>
            <div className="age">Age: {age}</div>
            <div className="gender">Gender: {gender}</div>
            <button onClick={() => increaseAge(name)}>Increase Age</button>
        </div>
    );
};

export default NameCard;
