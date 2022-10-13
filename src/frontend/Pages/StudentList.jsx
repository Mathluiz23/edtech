import { React } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import "../css/studentList.css";

function StudentList() {
	const studentsList = ["2", "3"];
	return (
		<section className="container">
			<Header />
			<div className="content-page">
				<div className="top-actions">
					<Search />
					<a className="btn btn-dark" href="studentManager.html">
						Cadastrar aluno
					</a>
				</div>
				<table id="studentList" className="table-list">
					<thead>
						<tr>
							<th>Registro Acadêmico</th>
							<th>Nome </th>
							<th>CPF</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						{studentsList.map((student) => {
							return (
								<tr key={student}>
									<td>{"2"} </td>
									<td>{"3"} </td>
									<td>{"4"} </td>
									<td>
										<a>Editar</a>
										<a className="removeStudent" href="/#">
											Excluir
										</a>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</section>
	);
}

export default StudentList;
