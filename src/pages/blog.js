import React from "react";
import * as blogStyles from "./blog.module.scss";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";

const BlogPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulBlogPost(sort: { publishedDate: DESC }) {
				edges {
					node {
						title
						slug
						publishedDate(formatString: "MMMM Do, YYYY")
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<h1>Blog</h1>
			<ol className={blogStyles.posts}>
				{data.allContentfulBlogPost.edges.map((blog, index) => {
					return (
						<li key={index} className={blogStyles.post}>
							<Link to={`/blog/${blog.node.slug}`}>
								<h2>{blog.node.title}</h2>
								<p>{blog.node.publishedDate}</p>
							</Link>
						</li>
					);
				})}
			</ol>
		</Layout>
	);
};

export default BlogPage;
