import React, { useState, useEffect, useMemo } from "react"
import Prism from "prismjs"
import "prismjs/components/prism-typescript"

import Strings from "components/strings"
import { CodeWrapper } from "./styled"

const TypingCode = () => {
  const [text, setText] = useState("")

  const codeString = useMemo(() => {
    const sampleProjects = Strings.projects.list.slice(0, 3).map(p => ({
      name: p.name,
      stack: p.stack,
    }))

    const position = Strings.experience?.list?.[0]?.role?.split(" | ")?.[0] || "Senior Front-End Engineer";

    return `const topProjects = ${JSON.stringify(sampleProjects, null, 2)};

const developer = {
  name: 'Johny W. Alves',
  position: '${position}',
  skills: ['React', 'Next.js', 'TypeScript', 'Node.js']
};

developer.code();`
  }, [])

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      setText(codeString.substring(0, i))
      i++
      if (i > codeString.length) {
        clearInterval(typingInterval)
      }
    }, 10) // Speed of typing increased slightly for longer text

    return () => clearInterval(typingInterval)
  }, [codeString])

  const highlightedCode = Prism.highlight(
    text,
    Prism.languages.typescript,
    "typescript"
  )

  return <CodeWrapper dangerouslySetInnerHTML={{ __html: highlightedCode }} />
}

export default TypingCode
