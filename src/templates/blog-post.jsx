import React from "react"
import { graphql } from "gatsby"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import Comments from "components/Comments"
import Recommended from "components/Recommended"
import Share from "components/Share"

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
  const { slug, recommendedLast, recommendedCategory } = pageContext

  return (
    <Blueprint
      content
      openGraphImage={post.frontmatter.openGraphImage}
      title={post.frontmatter.title}
      description={post.frontmatter.description}
    >
      <ArticleWrapper itemScope itemType="http://schema.org/Article">
        <ArticleForehead>
          {post.frontmatter.featuredImage && (
            <PostFeaturedImage
              itemProp="image"
              image={
                post.frontmatter.featuredImage.childImageSharp.gatsbyImageData
              }
              alt=""
            />
          )}
          <ArticleForeheadCover />
          <PostHeader>
            <PostDate
              itemProp="datePublished"
              datetime={post.frontmatter.created}
            >
              {post.frontmatter.date} <span>●</span> {post.timeToRead} min de
              leitura
            </PostDate>
            <PostTitle itemProp="headline">{post.frontmatter.title}</PostTitle>
            <meta itemProp="name" content={post.frontmatter.title} />
            <PostDescription itemProp="description">
              {post.frontmatter.description}
            </PostDescription>
            <meta itemProp="author" content={data.site.siteMetadata.author} />
            <meta
              itemProp="keywords"
              content={`${post.frontmatter.category.toLowerCase()}, ${post.frontmatter.tags
                .join(", ")
                .toLowerCase()}`}
            />
            <meta itemProp="wordCount" content={post.html.length} />
          </PostHeader>
        </ArticleForehead>

        <MainContent>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </MainContent>

        <Share slug={slug} title={post.frontmatter.title} />

        <Recommended
          recommendedLast={recommendedLast}
          recommendedCategory={recommendedCategory}
        />

        <Comments title={post.frontmatter.title} url={slug} />
      </ArticleWrapper>

      {post.frontmatter.extras &&
        post.frontmatter.extras.map((extra, index) => {
          if (extra.endsWith("css")) {
            return (
              <link key={index} rel="stylesheet" href={`/extras/${extra}`} />
            )
          }
          return <script key={index} src={`/extras/${extra}`} />
        })}
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
      image: [urlImage],
      author: [
        {
          "@type": "Person",
          name: author,
          url: siteUrl,
        },
      ],
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
