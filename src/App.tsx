import ExpenseForm from "./pages/expenseForm"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MainLayout } from "./pages/mainLayout"
import HelpSection from "./pages/helpSection"
import Profile from "./pages/profile";
import Home from "./pages/home";

function App() {

  return (
    <div className="font-montSerrat">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home/>}/>
            <Route path="/addexpense" element={<ExpenseForm />} />
            <Route path="/help" element={<HelpSection/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
