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
    };

    return (
        <div>
            <header>
                <nav>
                    <Link to="/">홈</Link>
                    <div className="space-x-4">
                        {user ? (
                            <>
                                <Link to="/profile">프로필</Link>
                                <Link to="/test">테스트</Link>
                                <Link to="/result">결과 보기</Link>
                                <button onClick={handleLogout}>로그아웃</button>
                            </>
                        ) : (
                            <Link to="/login">로그인</Link>
                        )}
                    </div>
                </nav>
            </header>
            <main className="container mx-auto pt-10 main">{children}</main>
        </div>
    );
};

export default Layout;
