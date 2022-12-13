import React from "react";
import * as footerStyles from "./footer.module.scss";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
	const year = new Date().getFullYear();

	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
				}
			}
		}
	`);
	return (
		<footer className={footerStyles.footer}>
			<p>
				© {year}. Created by{" "}
				<a
					href="https://www.github.com/summerintech"
					target="_blank"
					rel="noreferrer"
				>
					{data.site.siteMetadata.author}
				</a>
			</p>
		</footer>
	);
};

export default Footer;
