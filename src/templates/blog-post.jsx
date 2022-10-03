import React from "react"
import { graphql } from "gatsby"

import Article, { ArticleHead } from "components/Article"

const BlogPost = (props) => <Article {...props} />

export const query = graphql`
  query PostNew($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(locale: "pt_br", formatString: "DD [de] MMMM [de] YYYY")
        created: date
        title
        description
        category
        tags
        extras
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              height: 500
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
      }
      html
      timeToRead
      excerpt(format: PLAIN)
    }
  }
`

export default BlogPost

export const Head = (props) => <ArticleHead {...props} />
