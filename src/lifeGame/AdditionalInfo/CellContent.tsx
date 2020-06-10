import React, { FC, useMemo } from 'react'

import { Box } from '@chakra-ui/core'
import { useCustomizeContext } from '../customize/_customize'
import { ChildType } from 'lifeGame/Grid'

export const _CellContent: ChildType = ({ cell, newCell, cellWidth }) => {
    const showBgOnlyForAboutToChangeCell = useCustomizeContext((state) => state.showBgOnlyForAboutToChangeCell)
    const showCellBg = useCustomizeContext((state) => state.showCellBg)
    const showUpdateIndicator = useCustomizeContext((state) => state.showUpdateIndicator)

    let text = ''
    if (cell && !newCell) {
        text = 'd'
    } else if (!cell && newCell) {
        text = 'l'
    }

    return (
        <Box
            w={cellWidth + 'px'}
            color={cell ? 'white' : 'black'}
            d='flex'
            justifyContent='center'
            alignItems='center'
            bg={!showCellBg || (showBgOnlyForAboutToChangeCell && !text) ? 'transparent' : cell ? 'black' : 'white'}
        >
            {showUpdateIndicator && <Box>{text}</Box>}
        </Box>
    )
}

export const CellContent = React.memo(_CellContent)
