import React, { useState } from "react";
import TicTac from "./ticTac.js";

export function Home() {
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

	let cuadronum;
	const asignaNum = cuadronum => {
		switch (cuadronum) {
			case 1:
				console.log("Eres el boton 1");

				break;
			case 2:
				console.log("Eres el boton 2");

				break;

			default:
				break;
		}
	};
	console.log(tablero);
	console.log(turno);

	return (
		<div className="container">
			<div className="container text-white mt-3 ">
				<div className="row justify-content-center text-center">
					<div className="col-8 contenedorCentro my-5 p-5">
						<h1>TicTacToe in React.js</h1>
						<h2>Es turno de {turno}</h2>
						<div className="row justify-content-center">
							<div
								className={
									"col-10 contenedorChico p-3 " + desaparecer
								}>
								<p>¿Como se llaman?</p>
								{/* formularios */}
								<div className="d-flex justify-content-center">
									<input
										type="text"
										className="col-4 mr-2 form-control"></input>
									<input
										type="text"
										className="col-4 ml-2 form-control"></input>
								</div>
								{/* Botones  al hacer click mandamos un prop con habilitado y desabilitamos este*/}
								<button
									className="btnTicTac ml-3 mr-2 my-3 text-warning"
									onClick={() => {
										{
											asignarTurno("X");
											desaparecerLogin();
											aparecerTicTack();
											//<TicTac estado={aparecerTic} />;
										}
									}}>
									X
								</button>
								<button
									className="btnTicTac m my-3 text-primary"
									onClick={() => {
										{
											asignarTurno("O");
											desaparecerLogin();
											aparecerTicTack();
											//<TicTac estado={aparecerTic} />;
										}
									}}>
									O
								</button>
							</div>
							<TicTac
								setTurno={setTurno}
								asignarTurno={asignarTurno}
								turno2={turno2}
								tablero2={tablero2}
								tablero={tablero}
								setTablero={setTablero}
								alternarTurno={alternarTurno}
								turnoActual={turno}
								estado={aparecerTic}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
