import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Vehicles } from "./carrousel/carousel-vehicles";
import { People } from "./carrousel/carousel-people";
import { Planet } from "./carrousel/carousel-planet";

//create your first component
export function Home() {
	return (
		<React.Fragment>
			<div className="container">
				<div className="header" />
				<div className="function">
					<div className="filtros" />
					<div className="fondo" />
				</div>
				<div className="info">
					<Vehicles />
					<People />
					<Planet />
				</div>
			</div>
		</React.Fragment>
	);
}
