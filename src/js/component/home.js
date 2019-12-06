import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Vehicles } from "./carrousel/carousel-vehicles";
import { People } from "./carrousel/carousel-people";
import { Planet } from "./carrousel/carousel-planet";
import { Menu } from "./utils/menu";

//create your first component
export function Home() {
	return (
		<React.Fragment>
			<div className="container">
				<div className="header text-center m-2">
					<img
						className="titulo"
						src="http://www.mrindie.com/wp-content/uploads/2019/11/star-wars-rise-of-skywalker.jpeg"
					/>
				</div>
				<hr />
				<div className="function m-2">
					<div className="filtros">
						<Menu />
					</div>
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
