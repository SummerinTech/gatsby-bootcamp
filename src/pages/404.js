import React from "react";
import { Link } from "gatsby";

const notFound = () => {
	return (
		<div>
			<h2>Sorry that page doesn't exist.</h2>
			<p>
				Return <Link to="/">home</Link>
			</p>
		</div>
	);
};

export default notFound;
