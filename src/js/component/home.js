import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
        <div className="container">
            <div className="header"></div>
            <div className="funciones">
                <div className="filtros"></div>
                <div className="cambiador"></div>
            </div>
            <div className="cards uno"></div>
            <div className="cards dos"></div>
            <div className="cards tres"></div>
        </div>
	);
}
