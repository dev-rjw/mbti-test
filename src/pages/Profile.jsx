import { useState } from "react";
import { updateProfile } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Profile = ({ user, setUser }) => {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState(user?.nickname || "");

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProfile(user.accessToken, { nickname });
        setUser({ ...user, nickname });
        navigate("/");
    };

    return (
        <div>
            <div>
                <h1>프로필 수정</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>닉네임</label>
                        <input value={nickname} onChange={handleNicknameChange} />
                    </div>
                    <button type="submit">프로필 업데이트</button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
