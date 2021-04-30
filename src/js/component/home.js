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

	return (
		<div className="container">
			<div className="container text-white mt-3 ">
				<div className="row justify-content-center text-center">
					<div className="col-8 contenedorCentro my-5 p-5">
						<h1>TicTacToe in React.js</h1>
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
											desaparecerLogin();
											aparecerTicTack();
											<TicTac estado={aparecerTic} />;
										}
									}}>
									X
								</button>
								<button
									className="btnTicTac m my-3 text-primary"
									onClick={() => {
										{
											desaparecerLogin();
											aparecerTicTack();
											<TicTac estado={aparecerTic} />;
										}
									}}>
									O
								</button>
							</div>
							<TicTac estado={aparecerTic} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
