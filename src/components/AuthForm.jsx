import { useState } from "react";

// 회원가입인지 로그인인지 구분 : mode
const AuthForm = ({ mode, onSubmit }) => {
    const [formData, setFormData] = useState({
        id: "",
        password: "",
        nickname: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="w-full p-4 border border-gray-300 rounded-lg" name="id" value={formData.id} onChange={handleChange} placeholder="아이디" required />
            <input type="password" className="w-full p-4 border border-gray-300 rounded-lg" name="password" value={formData.password} onChange={handleChange} placeholder="비밀번호" required />
            {mode === "signup" && <input type="text" className="w-full p-4 border border-gray-300 rounded-lg" name="nickname" value={formData.nickname} onChange={handleChange} placeholder="닉네임" required />}
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">
                {mode === "login" ? "로그인" : "회원가입"}
            </button>
        </form>
    );
};

export default AuthForm;
