import React, { useState } from "react";
import PropTypes from "prop-types";
/* Aqui hacemos un cosito pero que solo aparesca con props al darle click y lo haga aparecer */

const TicTac = props => {
	const [icono, useIcono] = useState("ㅤ");
	const cambioIcono = () => {
		useIcono("X");
	};
	return (
		/* Aca hacemos un cambio de d-none a d-block */
		<div className={"col-10 contenedorChico p-3 " + props.estado}>
			<div className="row justify-content-center">
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100"
						onClick={() => {
							useIcono(props.icono);
						}}>
						{icono}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100">{icono}</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100">{icono}</button>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100">{icono}</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100">{icono}</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100">{icono}</button>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100">{icono}</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100">{icono}</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100">{icono}</button>
				</div>
			</div>
		</div>
	);
};

TicTac.propTypes = {
	estado: PropTypes.string,
	icono: PropTypes.string
};

export default TicTac;
