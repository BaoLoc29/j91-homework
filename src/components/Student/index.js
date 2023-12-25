import { useState } from "react";
import './style.css';
//Tạo 2 button Increase Decrease để tăng giảm level. Lưu ý không cho phép giảm khi level <=1.
//Tạo button Change Status để thay đổi isActive. 
// Nếu isActive là true thì background của component Student màu xanh, là false thì background màu xám.
const Student = () => {
    const [student, setStudent] = useState({ name: "John", level: 1, isActive: true });
    const handleClickIncrease = () => {
        setStudent({ ...student, level: student.level + 1 });
    };
    const handleClickDecrease = () => {
        if (student.level > 1) {
            setStudent({ ...student, level: student.level - 1 });
        }
    };
    const changeStatus = () => {
        setStudent({ ...student, isActive: !student.isActive });
    };
    return (
        <div className={student.isActive ? "Active" : "isActive"}>
            <h1>Level of student: {student.level}</h1>
            <button className="increase" onClick={handleClickIncrease}>Increase</button>
            <button className="reduction" onClick={handleClickDecrease}>Decrease</button>
            <button onClick={changeStatus}>ChangeStatus</button>
        </div>
    );
}
export default Student;