import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import CourseDetails from "./pages/CourseDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Layout Wrapper */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/courses"
          element={
          /*  <ProtectedRoute> */
              <MainLayout>
                <Courses />
              </MainLayout>
         /*   </ProtectedRoute> */
          }
        />

        <Route
          path="/courses/:id"
          element={
            <ProtectedRoute> 
              <MainLayout>
                <CourseDetails />
              </MainLayout>
           </ProtectedRoute> 
          }
        />
<Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;