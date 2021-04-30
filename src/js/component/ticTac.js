import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

/* Aqui hacemos un cosito pero que solo aparesca con props al darle click y lo haga aparecer */

const TicTac = props => {
	useEffect(() => {
		console.log(";D");
	});
	const cambiarTurno = () => {
		let aux = props.tablero;
		aux[0][0] = props.turnoActual;
		props.setTablero(aux);
	};

	return (
		/* Aca hacemos un cambio de d-none a d-block */
		<div className={"col-10 contenedorChico p-3 " + props.estado}>
			<div className="row justify-content-center">
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100"
						onMouseUp={(cambiarTurno, props.alternarTurno)}>
						{props.tablero[0][0]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100"
						onClick={props.alternarTurno}>
						{props.tablero[0][1]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100"
						onClick={props.alternarTurno}>
						{props.tablero[0][2]}
					</button>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100"
						onClick={props.alternarTurno}>
						{props.tablero[1][0]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100"
						onClick={props.alternarTurno}>
						{props.tablero[1][1]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100"
						onClick={props.alternarTurno}>
						{props.tablero[1][2]}
					</button>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100"
						onClick={props.alternarTurno}>
						{props.tablero[2][0]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100"
						onClick={props.alternarTurno}>
						{props.tablero[2][1]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100"
						onClick={props.alternarTurno}>
						{props.tablero[2][2]}
					</button>
				</div>
			</div>
		</div>
	);
};

TicTac.propTypes = {
	estado: PropTypes.string,
	turnoActual: PropTypes.string,
	tablero: PropTypes.array,
	setTablero: PropTypes.func,
	alternarTurno: PropTypes.func
};

export default TicTac;
