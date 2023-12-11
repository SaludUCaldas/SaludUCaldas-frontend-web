import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const isAuthenticated = !!localStorage.getItem('id_doctor');
    console.log(isAuthenticated);

    if (!isAuthenticated) {
        console.log(isAuthenticated);
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default ProtectedRoutes;