import React from "react"
import { graphql } from "gatsby"

import Strings from "components/strings"
import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import Share from "components/Share"
import ComicNavigation from "components/ComicNavigation"
import MainContent from "components/MainContent"

import {
  ComicPostWrapper,
  ComicPostHeader,
  PostTitle,
  PostDate,
  ComicWrapper,
  PostComic,
} from "components/Comic/styled"

const ComicPost = ({ data, pageContext: { number, slug } }) => {
  const post = data.markdownRemark

  return (
    <Blueprint content title={post.frontmatter.title}>
      <ComicPostWrapper>
        <ComicPostHeader comics>
          <PostDate>{post.frontmatter.date}</PostDate>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <ComicWrapper>
            <PostComic
              image={
                (post.frontmatter.featuredImage || post.frontmatter.comicImage)
                  .childImageSharp.gatsbyImageData
              }
              alt={post.frontmatter.transcription}
            />
          </ComicWrapper>
          <ComicNavigation
            action={Strings.comics.viewAll}
            number={number}
            showCount
          />
        </ComicPostHeader>

        <MainContent>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </MainContent>

        <Share slug={slug} title={post.frontmatter.title} />
      </ComicPostWrapper>
    </Blueprint>
  )
}

export const query = graphql`
  query ComicNew($slug: String!) {
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
              width: 1200
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
        comicImage {
          childImageSharp {
            gatsbyImageData(
              width: 750
              layout: CONSTRAINED
              placeholder: BLURRED
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
      image={coverImage}
      title={title}
      description={transcription}
    />
  )
}
