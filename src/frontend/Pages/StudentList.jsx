import { React } from "react";

export default class StudentListPage extends React {
	constructor(props) {
		super(props);
		this.state = {
			studentsList: [],
		};
	}

	render() {
		return (
			<div>
				<div className="top-actions">
					{/* Component Search here */}
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
						{this.state.studentsList.map((student) => {
							return (
								<tr key={student.ra}>
									<td>{student.ra} </td>
									<td>{student.nome} </td>
									<td>{student.cpf} </td>
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
		);
	}
}
