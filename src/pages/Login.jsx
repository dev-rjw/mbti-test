import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";

const Login = ({ setUser }) => {
    const navigate = useNavigate();

    const handleLogin = async (formData) => {
        try {
            const response = await login(formData);
            setUser(response.data);
            navigate("/");
        } catch (error) {
            alert("로그인에 실패했습니다. 다시 시도해주세요. ", error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">로그인</h1>
            <AuthForm mode="login" onSubmit={handleLogin} />
            <div>
                <p>
                    계정이 없으신가요?{" "}
                    <Link to="/signup" className="text-red-600">
                        회원가입
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
