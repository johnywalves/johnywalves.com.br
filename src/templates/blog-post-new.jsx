import React from "react"
import { graphql } from "gatsby"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import RecommendedPost from "components/RecommendedPost"
import Comments from "components/Comments"

import {
  ArticleWrapper,
  ArticleForehead,
  ArticleForeheadCover,
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
    <Blueprint content openGraphImage={post.frontmatter.openGraphImage}>
      <ArticleWrapper>
        <ArticleForehead>
          {post.frontmatter.featuredImage && (
            <PostFeaturedImage
              image={
                post.frontmatter.featuredImage.childImageSharp.gatsbyImageData
              }
              alt=""
            />
          )}
          <ArticleForeheadCover />
          <PostHeader>
            <PostDate
              itemprop="datePublished"
              datetime={post.frontmatter.created}
            >
              {post.frontmatter.date} <span>●</span> {post.timeToRead} min de
              leitura
            </PostDate>
            <PostTitle itemprop="headline">{post.frontmatter.title}</PostTitle>
            <PostDescription itemprop="description">
              {post.frontmatter.description}
            </PostDescription>
            <meta itemprop="wordCount" content={post.html.length} />
          </PostHeader>
        </ArticleForehead>
        <MainContent>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </MainContent>
        <RecommendedPost next={nextPost} previous={previousPost} />
        <Comments title={post.frontmatter.title} url={slug} />
      </ArticleWrapper>
    </Blueprint>
  )
}

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
        date(locale: "pt_br", formatString: "DD [de] MMMM YYYY")
        created: date
        title
        description
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
        openGraphImage: featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 900
              aspectRatio: 1.5
              layout: FIXED
              placeholder: NONE
              formats: [JPG]
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

export const Head = ({ location, data, pageContext }) => {
  const {
      html,
      excerpt,
      frontmatter: { title, description, created, openGraphImage },
    } = data.markdownRemark,
    { title: titleSite, author, siteUrl } = data.site.siteMetadata,
    { slug } = pageContext

  const urlImage =
      openGraphImage?.childImageSharp?.gatsbyImageData?.images?.fallback.src,
    widthImage = openGraphImage?.childImageSharp?.gatsbyImageData?.width,
    heightImage = openGraphImage?.childImageSharp?.gatsbyImageData?.height,
    richSnipppet = {
      "@context": "https://schema.org",
      "@type": "Article",
      url: `${siteUrl}${slug}`,
      headline: title,
      alternativeHeadline: description,
      image: urlImage,
      author: author,
      wordcount: html.length,
      publisher: {
        "@type": "Organization",
        name: titleSite,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/figures/favicon.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteUrl}/blog`,
      },
      datePublished: created,
      dateCreated: created,
      dateModified: created,
      description: description,
      articleBody: excerpt.slice(0, 128) + "...",
    }

  return (
    <Seo
      location={location}
      title={title}
      description={description}
      image={urlImage}
      imagenWidth={widthImage}
      imageHeight={heightImage}
    >
      <script type="application/ld+json">{JSON.stringify(richSnipppet)}</script>
    </Seo>
  )
}