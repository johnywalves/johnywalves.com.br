import React from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout"
import SEO from "components/seo"
import Comments from "components/Comments"
import ComicNavigation from "components/ComicNavigation"

import * as S from "components/Post/styled"

const ComicPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { number, slug } = pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={
          "Desenvolvendo, aprendendo, desenhando e fazendo humor sobre isso, espero que gostem"
        }
        image={post.frontmatter.coverImage}
      />
      <S.PostHeader>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostComic
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
          alt={post.frontmatter.transcription}
        />
        <ComicNavigation number={number} />
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.MainContent>
      <Comments title={post.frontmatter.title} url={slug} />
    </Layout>
  )
}

export const query = graphql`
  query Comic($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(locale: "pt_br", formatString: "DD [de] MMMM [de] YYYY")
        title
        description
        transcription
        coverImage
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1579) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      html
      timeToRead
    }
  }
`

export default ComicPost
