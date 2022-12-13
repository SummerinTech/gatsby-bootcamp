import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => {
	return (
		<Layout>
			<h1>About Me</h1>
			<p>
				I am originally from Atlanta, GA but moved to Los Angeles 7 years ago. I
				studied Nutrition Science at the University of Georgia, thinking I would
				work in the medical field. Now I am a flight attendant for a major US
				airline and enjoy traveling the world.
				<br />
				<br />
				Two years ago I started learning computer science and fell in love with
				front-end development. I'm proficient in HTML, CSS, vanilla JS, and
				React.
			</p>
			<p>
				<Link to="/contact">Want to work with me?</Link>
			</p>
		</Layout>
	);
};

export default AboutPage;
