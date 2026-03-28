import AllRoutes from "./routes/AllRoutes";
import { NavLink ,useLocation} from "react-router";

export default function App() {

 const location = useLocation();
  const isCreatePage = location.pathname === "/create";
  // const {} = useContext(MyContext)
  // console.log(test);

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* NAV */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Study Planner</h1>
          
          <NavLink to={isCreatePage?'/':'/create'}  className="px-4 py-2 rounded-xl bg-black text-white text-sm">
             {isCreatePage ? "← Back" : "+ New Session"}
          </NavLink>
        </div>

        <AllRoutes />
      </div>
    </div>
  );
}

// CREATE SESSION PAGE
