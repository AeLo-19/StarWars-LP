import React from "react";

export const Menu = props => {
	return (
		<div className="dropdown">
			<button
				className="btn btn-secondary dropdown-toggle"
				type="button"
				id="dropdownMenuButton"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Filtros
			</button>
			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<a className="dropdown-item" href="#">
					Planetas
				</a>
				<a className="dropdown-item" href="#">
					Vehículos
				</a>
				<a className="dropdown-item" href="#">
					Personas
				</a>
			</div>
		</div>
	);
};
