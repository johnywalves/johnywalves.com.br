import React from "react"

import Strings from "components/strings"

import { ShowAll } from "./styled"

const ShowAllPosts = () => (
    <ShowAll
        to="/blog"
        cover
        direction="right"
        bg="var(--background)"
        duration={0.6}
    >
        {Strings.posts.viewAll}
    </ShowAll>
)

export default ShowAllPosts