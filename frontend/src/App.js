import "./App.css";
import Navbar from "./components/Navbar";
import StudentList from "./Pages/StudentList";

function App() {
	return (
		<div className="main-container">
			<Navbar />
			<StudentList />
		</div>
	);
}

export default App;
