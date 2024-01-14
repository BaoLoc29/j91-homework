import { Outlet } from "react-router-dom";
const Profile = () => {
    return (
        <div className="profile">
            <h5>Profile</h5>
            <Outlet />
        </div>
    )
}
export default Profile;