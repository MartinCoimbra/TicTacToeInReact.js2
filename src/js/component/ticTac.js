import React from "react";
import PropTypes from "prop-types";
/* Aqui hacemos un cosito pero que solo aparesca con props al darle click y lo haga aparecer */

const TicTac = props => {
	return (
		/* Aca hacemos un cambio de d-none a d-block */
		<div className={"container " + props.estado}>
			<h1>Hola mundo ;D</h1>
		</div>
	);
};

TicTac.propTypes = {
	estado: PropTypes.string
};

export default TicTac;
