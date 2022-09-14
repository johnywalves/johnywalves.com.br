import React from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout"
import Seo from "components/seo"
import RecommendedPost from "components/RecommendedPost"
import Comments from "components/Comments"

import * as S from "components/Post/styled"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { nextPost, previousPost, slug } = pageContext

  return (
    <Layout>
      {post.frontmatter.featuredImage && (
        <S.PostFeaturedImage
          image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt=""
        />
      )}
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} ● {post.timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
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
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(locale: "pt_br", formatString: "DD [de] MMMM [de] YYYY")
        title
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 1600
              height: 512
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
