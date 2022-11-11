import React from "react"
import { Link } from "gatsby"

import Blueprint from "components/Blueprint"
import Comments from "components/Comments"
import Recommended from "components/Recommended"
import Seo from "components/seo"
import Share from "components/Share"
import MainContent from "components/MainContent"

import {
  ArticleWrapper,
  ArticleForehead,
  ArticleForeheadCover,
  PostFeaturedImage,
  PostHeader,
  PostDate,
  PostTitle,
  PostDescription,
  PostLabels,
  PostCategory,
  PostTag,
} from "./styled"

const Article = ({ data, pageContext }) => {
  const post = data.markdownRemark,
    { slug, recommendedLast, recommendedCategory } = pageContext,
    uriImage = `/ogimages/${slug.split("/").join("")}.jpg`

  return (
    <Blueprint
      content
      openGraphImage={uriImage}
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
              <span>{post.frontmatter.date}</span>
              <span>●</span>
              <span>{post.timeToRead} min de leitura</span>
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
          <PostLabels>
            <Link to={`/category/${post.frontmatter.category.toLowerCase()}/`}>
              <PostCategory>{post.frontmatter.category}</PostCategory>
            </Link>
            {post.frontmatter.tags.map((tag) => (
              <PostTag>{tag}</PostTag>
            ))}
          </PostLabels>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </MainContent>

        <Share slug={slug} title={post.frontmatter.title} />

        <Recommended
          recommendedLast={recommendedLast}
          recommendedCategory={recommendedCategory}
        />

        <Comments title={post.frontmatter.title} url={slug} />
      </ArticleWrapper>
    </Blueprint>
  )
}

export const ArticleHead = ({ location, data, pageContext }) => {
  const {
      html,
      excerpt,
      frontmatter: { title, description, created, extras },
    } = data.markdownRemark,
    { title: titleSite, author, siteUrl } = data.site.siteMetadata,
    { slug } = pageContext

  const uriImage = `/ogimages/${slug.split("/").join("")}.jpg`,
    richSnipppet = {
      "@context": "https://schema.org",
      "@type": "Article",
      url: `${siteUrl}${slug}`,
      headline: title,
      alternativeHeadline: description,
      image: [`${siteUrl}${uriImage}`],
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
    <>
      <Seo
        location={location}
        title={title}
        description={description}
        image={uriImage}
      >
        <script type="application/ld+json">
          {JSON.stringify(richSnipppet)}
        </script>
      </Seo>
      {extras &&
        extras.map((extra, index) => {
          if (extra.endsWith("css")) {
            return (
              <link key={index} rel="stylesheet" href={`/extras/${extra}`} />
            )
          }
          return <script key={index} src={`/extras/${extra}`} />
        })}
    </>
  )
}

export default Article
