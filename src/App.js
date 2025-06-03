import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Kitchen from "./pages/Kitchen";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./route/PrivateRoute";
import Layout from "./layout/Layout";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/kitchen/request"
            element={
              <PrivateRoute>
                <Layout>
                  <Kitchen />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
