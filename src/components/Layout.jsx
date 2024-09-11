import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ user, setUser, children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, []);

    // 로그아웃
    const handleLogout = () => {
        setUser({ user: null });
        navigate("/");
    };

    return (
        <div>
            <header className="w-full p-4">
                <nav className="flex justify-between items-center p-4">
                    <Link to="/" className="text-red-600">
                        홈
                    </Link>
                    <div className="space-x-4 flex items-center">
                        {user ? (
                            <>
                                <Link to="/profile" className="text-red-600">
                                    프로필
                                </Link>
                                <Link to="/test" className="text-red-600">
                                    테스트
                                </Link>
                                <Link to="/result" className="text-red-600">
                                    결과 보기
                                </Link>
                                <button onClick={handleLogout} className="text-red-600">
                                    로그아웃
                                </button>
                            </>
                        ) : (
                            <Link to="/login" className="text-red-600">
                                로그인
                            </Link>
                        )}
                    </div>
                </nav>
            </header>
            <hr></hr>
            <main className="container mx-auto pt-10 main">{children}</main>
        </div>
    );
};

export default Layout;
