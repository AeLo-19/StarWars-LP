import React from "react";
import { Primero, Segundo } from "./cards/planets";

export const Planet = props => {
	return (
		<React.Fragment>
			<div
				id="carouselExampleSlidesOnly"
				className="carousel slide"
				data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<Primero />
					</div>
					<div className="carousel-item">
						<Segundo />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
