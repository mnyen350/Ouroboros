import { NavLink } from "react-router-dom";
import Profile from "../forms/Profile";
import Password from "../forms/EditPassword"
import { useStateContext } from "../../StateContextProvider";

function ProfilePage() {

    const { setIsHalf } = useStateContext();
    setIsHalf(true);

    return (
        <>


            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab">Profile</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-password-tab" data-bs-toggle="pill" data-bs-target="#pills-password" type="button" role="tab">Password</button>
                </li>

            </ul>


            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-profile" role="tabpanel" tabIndex="0">
                    <div className="text-center">
                        <h3>Profile</h3>
                    </div>
                    <Profile />
                </div>
                <div className="tab-pane fade" id="pills-password" role="tabpanel" tabIndex="0">
                    <div className="text-center">
                        <h3>Password</h3>
                    </div>
                    <Password />
                </div>

            </div>
        </>
    );

}
export default ProfilePage;