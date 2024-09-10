import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import TestPage from "./pages/TestPage";
import TestResultPage from "./pages/TestResultPage";
import { createContext, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";

export const UserContext = createContext();

function App() {
    const [user, setUser] = useState(null);

    return (
        <>
            <BrowserRouter>
                <UserContext.Provider value={{ user, setUser }}>
                    <Layout user={user} setUser={setUser}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login setUser={setUser} />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route
                                path="/profile"
                                element={
                                    <ProtectedRoute user={user}>
                                        <Profile user={user} setUser={setUser} />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/test"
                                element={
                                    <ProtectedRoute user={user}>
                                        <TestPage user={user} />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/result"
                                element={
                                    <ProtectedRoute user={user}>
                                        <TestResultPage user={user} />
                                    </ProtectedRoute>
                                }
                            />
                        </Routes>
                    </Layout>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
