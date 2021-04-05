import React, { useCallback } from "react"
import { Refresh } from "@styled-icons/boxicons-regular/Refresh"

import * as S from "./styled"

const SWUpdater = () => {
  const updatePage = useCallback(() => {
    if (typeof window !== "undefined") {
      window.location.reload()
    }
  }, [])

  return (
    <S.NotificationWrapper onClick={updatePage}>
      <p>Tem uma atualização disponível</p>
      <S.IconWrapper>
        <Refresh />
      </S.IconWrapper>
    </S.NotificationWrapper>
  )
}

export default SWUpdater
