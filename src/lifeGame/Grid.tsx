import React, { FC, ReactElement } from 'react'

import { Box } from '@chakra-ui/core'
import { GridType } from './lifeGame'

export type ChildType = (params: { cellWidth: number; cell: boolean; newCell: boolean }) => React.ReactElement

export const Grid: FC<{
    grid: GridType
    nextGrid: GridType
    cellWidth: number
    children: ChildType
}> = ({ grid, nextGrid, children, cellWidth }) => {
    return (
        <Box data-id='Grid' boxShadow='5px 5px 15px 5px #8e8285'>
            {grid.map((row, rowIndex) => (
                <Box key={rowIndex} h={cellWidth + 'px'} d='flex'>
                    {row.map((cell, colIndex) =>
                        React.cloneElement(
                            children({
                                cell,
                                newCell: nextGrid[rowIndex][colIndex],
                                cellWidth,
                            }),
                            { key: colIndex }
                        )
                    )}
                </Box>
            ))}
        </Box>
    )
}
