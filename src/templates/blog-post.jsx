
import React from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout";
import SEO from "components/seo";
import RecommendedPost from "components/RecommendedPost";
import Comments from "components/Comments";

import * as S from "components/Post/styled";

const BlogPost = ({ data, pageContext }) => {
    const post = data.markdownRemark
    const { nextPost, previousPost } = pageContext
    return (
        <Layout>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                image={post.frontmatter.coverImage}
            />
            <S.PostCoverImage style={{ backgroundImage: `url(${post.frontmatter.coverImage})` }} />
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
            <Comments title={post.frontmatter.title} url={pageContext.slug} />
        </Layout>
    )
}

export const query = graphql`
    query Post($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
                date(locale: "pt_br", formatString: "DD [de] MMMM [de] YYYY")
                title
                description
                coverImage
            }
            html
            timeToRead
        }
    }
`

export default BlogPost