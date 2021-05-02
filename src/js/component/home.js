import React, { useState, useEffect } from "react";
import TicTac from "./ticTac.js";

export function Home() {
	const [nombre1, setNombre1] = useState("");
	const [nombre2, setNombre2] = useState("");

	function tomarNombres() {
		let nombre1 = document.querySelector("#nombre1").value;
		let nombre2 = document.querySelector("#nombre2").value;
		setNombre1(nombre1);
		setNombre2(nombre2);
		console.log("Tus nombres son:" + nombre1 + " - " + nombre2);
	}

	const [desaparecer, setDesaparecer] = useState("d-block");
	const desaparecerLogin = () => {
		setDesaparecer("d-none");
	};

	const [aparecerTic, setAparecerTic] = useState("d-none");
	const aparecerTicTack = () => {
		setAparecerTic("d-block");
	};

	const [turno, setTurno] = useState("");
	const asignarTurno = XO => {
		setTurno(XO);
	};
	const turno2 = [...turno];

	const [tablero, setTablero] = useState([
		["ㅤ", "ㅤ", "ㅤ"],
		["ㅤ", "ㅤ", "ㅤ"],
		["ㅤ", "ㅤ", "ㅤ"]
	]);

	const tablero2 = [...tablero];

	const alternarTurno = () => {
		if (turno === "X") {
			setTurno("O");
		} else if (turno === "O") {
			setTurno("X");
		}
	};

	return (
		<div className="container">
			<div className="container text-white mt-1 ">
				<div className="row justify-content-center text-center">
					<div className="col-8 contenedorCentro mt-2 mb-5 p-2">
						<h1>TicTacToe in React.js</h1>
						<h2>Es turno de {turno}</h2>
						<div className="row justify-content-center">
							<div
								className={
									"col-10 contenedorChico p-3 " + desaparecer
								}>
								<p className="h3">¿Como se llaman?</p>
								{/* formularios */}
								<div className="d-flex justify-content-center">
									<input
										placeholder="Jugador 1"
										type="text"
										className="col-4 mr-2 form-control"
										id="nombre1"></input>
									<input
										type="text"
										placeholder="Jugador 2"
										className="col-4 ml-2 form-control"
										id="nombre2"></input>
								</div>
								{/* Botones  al hacer click mandamos un prop con habilitado y desabilitamos este*/}
								<p className="my-3 h4">¿Quien empieza?</p>
								<button
									className="btnTicTac ml-3 mr-2 mb-3 text-warning"
									id="btnLogin1"
									onClick={() => {
										{
											asignarTurno("X");
											desaparecerLogin();
											aparecerTicTack();
											tomarNombres();
											//<TicTac estado={aparecerTic} />;
										}
									}}>
									X
								</button>
								<button
									className="btnTicTac m my-3 text-primary"
									id="btnLogin2"
									onClick={() => {
										{
											asignarTurno("O");
											desaparecerLogin();
											aparecerTicTack();
											tomarNombres();
										}
									}}>
									O
								</button>
							</div>
							<TicTac
								setDesaparecer={setDesaparecer}
								nombre1={nombre1}
								nombre2={nombre2}
								setTurno={setTurno}
								asignarTurno={asignarTurno}
								turno2={turno2}
								tablero2={tablero2}
								tablero={tablero}
								setTablero={setTablero}
								alternarTurno={alternarTurno}
								turnoActual={turno}
								aparecerTic={aparecerTic}
								setAparecerTic={setAparecerTic}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
