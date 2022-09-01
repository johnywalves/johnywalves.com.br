import React from "react"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"

import * as S from "components/Post/styled"

const NotFoundPage = () => (
  <Blueprint>
    <Seo title="404: Not found" />
    <S.PostHeader>
      <S.PostTitle>404: Not Found</S.PostTitle>
      <S.PostDescription>
        Um endereço para apresentar ausência de algum endereço
      </S.PostDescription>
    </S.PostHeader>
    <S.MainContent>
      <div>
        <p>
          Pode ser problema de um link quebrado, apontando para o endereço
          errado, ou erro de digitação do usuário
        </p>
      </div>
    </S.MainContent>
  </Blueprint>
)

export default NotFoundPage
