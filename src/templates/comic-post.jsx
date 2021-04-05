import React from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout"
import Seo from "components/seo"
import Comments from "components/Comments"
import RecommendedPost from "components/RecommendedPost"
import ComicNavigation from "components/ComicNavigation"

import * as S from "components/Post/styled"

const ComicPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { nextPost, previousPost, number, slug } = pageContext

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={
          "Desenvolvendo, aprendendo, desenhando e fazendo humor sobre isso, espero que gostem"
        }
        image={post.frontmatter.coverImage}
      />
      <S.PostHeader>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostComic
          image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={post.frontmatter.transcription}
        />
        <ComicNavigation number={number} />
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.MainContent>
      <RecommendedPost next={nextPost} previous={previousPost} />
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
            gatsbyImageData(
              width: 1579
              layout: CONSTRAINED
              placeholder: TRACED_SVG
            )
          }
        }
      }
      html
      timeToRead
    }
  }
`

export default ComicPost
