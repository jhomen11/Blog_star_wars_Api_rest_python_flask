import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const User = () => {
	const { store, actions } = useContext(Context);
	console.log(store.users);
	return (
		<>
			<h2>Users</h2>
			<div className="container tabla">
				<div className="row justify-content-center mt-4">
					<div className="col-md-10">
						<table className="tabla_user">
							<thead>
								<tr>
									<th scope="col">Name</th>
									<th scope="col">Email</th>
									<th scope="col">Favorites</th>
								</tr>
							</thead>
							<tbody>
								{store.users.map((el, index) => {
									return (
										<tr key={index}>
											<td>{el.name}</td>
											<td>{el.email}</td>
											<td>@mdo</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default User;
