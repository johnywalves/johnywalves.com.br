import React from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout"
import Seo from "components/seo"
import Comments from "components/Comments"
import ComicNavigation from "components/ComicNavigation"

import * as S from "components/Post/styled"

const ComicPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { number, slug } = pageContext

  return (
    <Layout>
      <S.PostHeader comics>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDate>{post.frontmatter.date}</S.PostDate>
        <S.ComicWrapper>
          <S.PostComic
            image={
              (post.frontmatter.featuredImage || post.frontmatter.comicImage)
                .childImageSharp.gatsbyImageData
            }
            alt={post.frontmatter.transcription}
          />
        </S.ComicWrapper>
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
            gatsbyImageData(
              width: 800
              layout: CONSTRAINED
              placeholder: TRACED_SVG
            )
          }
        }
        comicImage {
          childImageSharp {
            gatsbyImageData(
              width: 600
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

export const Head = ({ location, data }) => {
  const {
    frontmatter: { title, transcription, coverImage },
  } = data.markdownRemark

  return (
    <Seo
      location={location}
      title={title}
      description={transcription}
      image={coverImage}
    />
  )
}
