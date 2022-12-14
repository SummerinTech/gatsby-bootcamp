import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

export const query = graphql`
	query ($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			publishedDate(formatString: "MMMM Do, YYYY")
		}
	}
`;

const Blog = (props) => {
	return (
		<Layout>
			<Head title={props.data.contentfulBlogPost.title} />
			<h1>Hello world</h1>
		</Layout>
	);
};

export default Blog;
