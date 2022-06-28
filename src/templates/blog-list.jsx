import React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Seo from "components/seo"
import PostItem from "components/PostItem"
import Pagination from "components/Pagination"

import * as S from "components/ListWrapper/styled"

const BlogList = (props) => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, prevPage, nextPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  
  return (
    <Layout>
      <Seo title="Artigos" />
      <S.ListWrapper>
        {postList.map(
          (
            {
              node: {
                frontmatter: {
                  date,
                  title,
                  category,
                  description,
                  tags,
                  coverImage,
                  featuredImage,
                },
                timeToRead,
                fields: { slug },
              },
            },
            index
          ) => (
            <PostItem
              key={index}
              slug={slug}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              tags={tags}
              coverImage={coverImage}
              featuredImage={featuredImage}
            />
          )
        )}
      </S.ListWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: { published: { ne: false }, category: { ne: "Comic" } }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(locale: "pt_br", formatString: "DD [de] MMMM [de] YYYY")
            title
            category
            description
            tags
            coverImage
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 120
                  height: 120
                  layout: CONSTRAINED
                  placeholder: TRACED_SVG
                )
              }
            }
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogList
