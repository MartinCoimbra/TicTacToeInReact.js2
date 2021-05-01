import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

/* Aqui hacemos un cosito pero que solo aparesca con props al darle click y lo haga aparecer */

const TicTac = props => {
	/* Agregar case que edite cuadronum y dentro de la funcion cambiarTurno hacerle un case */
	let cuadronum;
	let [aparecer, setAparecer] = useState("d-none");

	let [ganador, setGanador] = useState("");

	useEffect(() => {
		/* Verificamos si hay ganador */
		let aux = props.tablero2;
		if (
			(aux[0][0] == "X" && aux[0][1] == "X" && aux[0][2] == "X") ||
			(aux[1][0] == "X" && aux[1][1] == "X" && aux[1][2] == "X") ||
			(aux[2][0] == "X" && aux[2][1] == "X" && aux[2][2] == "X") ||
			(aux[0][0] == "X" && aux[1][1] == "X" && aux[2][2] == "X") ||
			(aux[0][2] == "X" && aux[1][1] == "X" && aux[2][0] == "X")
		) {
			setAparecer("d-block");
			console.log("GANADOR");
			setGanador("X");
		} else if (
			(aux[0][0] == "O" && aux[0][1] == "O" && aux[0][2] == "O") ||
			(aux[1][0] == "O" && aux[1][1] == "O" && aux[1][2] == "O") ||
			(aux[2][0] == "O" && aux[2][1] == "O" && aux[2][2] == "O") ||
			(aux[0][0] == "O" && aux[1][1] == "O" && aux[2][2] == "O") ||
			(aux[0][2] == "O" && aux[1][1] == "O" && aux[2][0] == "O")
		) {
			setAparecer("d-block");
			console.log("GANADOR");
			setGanador("O");
		} else {
			console.log("Aun no hay ganador");
		}
	});
	const cambiarTurno = () => {
		/* Guardamos el array en aux */
		let aux = props.tablero2;
		if (aux[0][0] === "X" || aux[0][0] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[0][0] = props.turnoActual;
			/* Guardamos el simbolo actual en la posicion del btn clickeado */
			props.setTablero(aux);
			/* Alternamos el turno que estamos */
			props.alternarTurno(...props.turno2);
		}
	};
	const cambiarTurno1 = () => {
		let aux = props.tablero2;
		if (aux[0][1] === "X" || aux[0][1] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[0][1] = props.turnoActual;
			props.setTablero(aux);
			props.alternarTurno(...props.turno2);
		}
	};
	const cambiarTurno2 = () => {
		let aux = props.tablero2;
		if (aux[0][2] === "X" || aux[0][2] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[0][2] = props.turnoActual;
			props.setTablero(aux);
			props.alternarTurno(...props.turno2);
		}
	};
	const cambiarTurno3 = () => {
		/* Guardamos el array en aux */
		let aux = props.tablero2;
		if (aux[1][0] === "X" || aux[1][0] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[1][0] = props.turnoActual;
			/* Guardamos el simbolo actual en la posicion del btn clickeado */
			props.setTablero(aux);
			/* Alternamos el turno que estamos */
			props.alternarTurno(...props.turno2);
		}
	};
	const cambiarTurno4 = () => {
		let aux = props.tablero2;
		if (aux[1][1] === "X" || aux[1][1] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[1][1] = props.turnoActual;
			props.setTablero(aux);
			props.alternarTurno(...props.turno2);
		}
	};
	const cambiarTurno5 = () => {
		let aux = props.tablero2;
		if (aux[1][2] === "X" || aux[1][2] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[1][2] = props.turnoActual;
			props.setTablero(aux);
			props.alternarTurno(...props.turno2);
		}
	};
	const cambiarTurno6 = () => {
		/* Guardamos el array en aux */
		let aux = props.tablero2;

		if (aux[2][0] === "X" || aux[2][0] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[2][0] = props.turnoActual;
			/* Guardamos el simbolo actual en la posicion del btn clickeado */
			props.setTablero(aux);
			/* Alternamos el turno que estamos */
			props.alternarTurno(...props.turno2);
		}
	};
	const cambiarTurno7 = () => {
		let aux = props.tablero2;
		if (aux[2][1] === "X" || aux[2][1] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[2][1] = props.turnoActual;
			props.setTablero(aux);
			props.alternarTurno(...props.turno2);
		}
	};
	const cambiarTurno8 = () => {
		let aux = props.tablero2;
		if (aux[2][2] === "X" || aux[2][2] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[2][2] = props.turnoActual;
			props.setTablero(aux);
			props.alternarTurno(...props.turno2);
		}
	};

	return (
		/* Aca hacemos un cambio de d-none a d-block */
		<div className={"col-10 contenedorChico p-3 " + props.estado}>
			<h1 className={"h1 text-center " + aparecer}>
				¡GANADOR! {ganador}
			</h1>
			<div className="row justify-content-center">
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100" onClick={cambiarTurno}>
						{props.tablero[0][0]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100" onClick={cambiarTurno1}>
						{props.tablero[0][1]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100" onClick={cambiarTurno2}>
						{props.tablero[0][2]}
					</button>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100" onClick={cambiarTurno3}>
						{props.tablero[1][0]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100" onClick={cambiarTurno4}>
						{props.tablero[1][1]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100" onClick={cambiarTurno5}>
						{props.tablero[1][2]}
					</button>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100" onClick={cambiarTurno6}>
						{props.tablero[2][0]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100" onClick={cambiarTurno7}>
						{props.tablero[2][1]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100" onClick={cambiarTurno8}>
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
	setTurno: PropTypes.func,
	asignarTurno: PropTypes.func,
	tablero2: PropTypes.array
};

export default TicTac;
