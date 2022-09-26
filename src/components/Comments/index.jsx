import React from "react"
import PropTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

import { CommentsWrapper, CommentsTitle } from "./styled"

const Comments = ({ url, title }) => {
  const completeURL = `https://johnywalves.com.br${url}`

  return (
    <CommentsWrapper>
      <CommentsTitle>Comentários</CommentsTitle>
      <ReactDisqusComments
        shortname="johnywalves"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
