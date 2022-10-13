import "./App.css";
import Navbar from "./frontend/components/Navbar";
import StudentList from "./frontend/Pages/StudentList";

function App() {
	return (
		<div className="main-container">
			<Navbar />
			<StudentList />
		</div>
	);
}

export default App;
