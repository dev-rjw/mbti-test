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
                <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">프로필 수정</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input className="w-full p-4 border border-gray-300 rounded-lg" value={nickname} onChange={handleNicknameChange} placeholder="닉네임" required />
                    </div>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">
                        프로필 업데이트
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
