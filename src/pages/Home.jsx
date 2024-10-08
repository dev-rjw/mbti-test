import { Link } from "react-router-dom";

const Home = ({ user }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">무료 성격 테스트</h1>
            <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
            {!user && (
                <Link to="/login" className="text-red-600">
                    로그인하기
                </Link>
            )}
        </div>
    );
};

export default Home;
