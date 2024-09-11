import TestForm from "../components/TestForm";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import calculateMBTI from "../utils/mbtiCalculator";

const Test = ({ user }) => {
    const navigate = useNavigate();

    const handleTestSubmit = async (answers) => {
        const result = calculateMBTI(answers);
        const resultData = {
            userId: user.id,
            nickname: user.nickname,
            result,
            answers,
            date: new Date().toISOString(),
            visibility: true,
        };
        await createTestResult(resultData);
        navigate("/result");
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">MBTI 테스트</h1>
            <TestForm onSubmit={handleTestSubmit} />
        </div>
    );
};

export default Test;
