import React from "react"
import { graphql } from "gatsby"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import RecommendedPost from "components/RecommendedPost"
import Comments from "components/Comments"

import {
  PostFeaturedImage,
  PostHeader,
  PostDate,
  PostTitle,
  PostDescription,
  MainContent,
} from "components/Article/styled"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { nextPost, previousPost, slug } = pageContext

  return (
    <Blueprint content>
      {post.frontmatter.featuredImage && (
        <PostFeaturedImage
          image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt=""
        />
      )}
      <PostHeader>
        <PostDate>
          {post.frontmatter.date} ● {post.timeToRead} min de leitura
        </PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDescription>{post.frontmatter.description}</PostDescription>
      </PostHeader>
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </MainContent>
      <RecommendedPost next={nextPost} previous={previousPost} />
      <Comments title={post.frontmatter.title} url={slug} />
    </Blueprint>
  )
}

export const query = graphql`
  query PostNew($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(locale: "pt_br", formatString: "DD [de] MMMM [de] YYYY")
        title
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 1600
              height: 320
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

export default BlogPost

export const Head = ({ location, data }) => {
  const {
    frontmatter: { title, description, featuredImage },
  } = data.markdownRemark

  return (
    <Seo
      location={location}
      title={title}
      description={description}
      image={
        featuredImage?.childImageSharp?.gatsbyImageData?.images?.fallback.src
      }
    />
  )
}
