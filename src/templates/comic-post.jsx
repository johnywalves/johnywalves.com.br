import React from "react"
import { graphql } from "gatsby"

import Strings from "components/strings"
import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import Comments from "components/Comments"
import ComicNavigation from "components/ComicNavigation"

import {
  ComicPostWrapper,
  ComicPostHeader,
  PostTitle,
  PostDate,
  ComicWrapper,
  PostComic,
  MainContent,
} from "components/Comic/styled"

const ComicPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { number, slug } = pageContext

  return (
    <Blueprint content>
      <ComicPostWrapper>
        <ComicPostHeader comics>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <PostDate>{post.frontmatter.date}</PostDate>
          <ComicWrapper>
            <PostComic
              image={
                (post.frontmatter.featuredImage || post.frontmatter.comicImage)
                  .childImageSharp.gatsbyImageData
              }
              alt={post.frontmatter.transcription}
            />
          </ComicWrapper>
          <ComicNavigation action={Strings.comics.viewAll} number={number} />
        </ComicPostHeader>
        <MainContent>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </MainContent>
        <Comments title={post.frontmatter.title} url={slug} />
      </ComicPostWrapper>
    </Blueprint>
  )
}

export const query = graphql`
  query ComicNew($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(locale: "pt_br", formatString: "DD [de] MMMM YYYY")
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
