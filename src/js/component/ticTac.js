import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

/* Aqui hacemos un cosito pero que solo aparesca con props al darle click y lo haga aparecer */

const TicTac = props => {
	/* Agregar case que edite cuadronum y dentro de la funcion cambiarTurno hacerle un case */
	let cuadronum = 2;

	const cambiarTurno = () => {
		/* Alternamos el turno que estamos */
		props.alternarTurno(...props.turno2);
		/* Guardamos el array en aux */
		let aux = props.tablero2;
		/* Guardamos el simbolo actual en la posicion del btn clickeado */
		aux[0][0] = props.turnoActual;
		/* lo insertamos */
		props.setTablero(aux);
		console.log("BIEN CARAJO" + cuadronum);
	};

	return (
		/* Aca hacemos un cambio de d-none a d-block */
		<div className={"col-10 contenedorChico p-3 " + props.estado}>
			<div className="row justify-content-center">
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100" onClick={cambiarTurno}>
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
	turno2: PropTypes.string,
	tablero: PropTypes.array,
	setTablero: PropTypes.func,
	alternarTurno: PropTypes.func,
	asignarTurno: PropTypes.func,
	tablero2: PropTypes.array
};

export default TicTac;
