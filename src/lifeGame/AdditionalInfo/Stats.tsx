import React, { FC, useEffect } from 'react'
import { useState } from 'reinspect'
import { Box, css, PseudoBox } from '@chakra-ui/core'
import styled from '@emotion/styled'
import * as V from 'victory'

import { GridType } from '../lifeGame'
import { useCustomizeContext } from '../customize/_customize'

type DataType = {
    nDeadCells: number
    nLiveCells: number
    nAboutToLive: number
    nAboutToDie: number
    nCells: number
}

const Table = styled(Box)`
    div:nth-of-type(even) {
        justify-self: end;
    }
`

const getData = (grid: GridType, nextGrid: GridType, nCells: number) => {
    const data: DataType = { nDeadCells: 0, nLiveCells: 0, nAboutToLive: 0, nAboutToDie: 0, nCells }
    grid.map((row, rowIndex) => {
        row.map((cell, colIndex) => {
            if (cell) {
                data.nLiveCells++
            } else {
                data.nDeadCells++
            }
            if (cell && !nextGrid[rowIndex][colIndex]) {
                data.nAboutToDie++
            } else if (!cell && nextGrid[rowIndex][colIndex]) {
                data.nAboutToLive++
            }
        })
    })
    return data
}

export const Stats: FC<{ grid: GridType; nextGrid: GridType }> = ({ grid, nextGrid }) => {
    const dimensionNCells = useCustomizeContext((state) => state.dimensionNCells)

    const [data, setData] = useState<DataType[]>([], 'setChartData')

    useEffect(() => {
        setData((data) => [...data, getData(grid, nextGrid, dimensionNCells * dimensionNCells)])
    }, [grid, nextGrid, dimensionNCells])

    if (data.length < 2) {
        return null
    }
    const currentData = data[data.length - 1]
    return (
        <Box data-id='Stats'>
            <V.VictoryChart>
                <V.VictoryLine data={data} y='nCells' />
                <V.VictoryLine data={data} y='nDeadCells' />
                <V.VictoryLine data={data} y='nLiveCells' />
                <V.VictoryLine data={data} y='nAboutToLive' />
                <V.VictoryLine data={data} y='nAboutToDie' />
            </V.VictoryChart>
            <Table d='grid' gridTemplateColumns='auto 1fr' w='353px'>
                <Box>Number of cells</Box>
                <Box>{currentData.nCells}</Box>
                <Box>Number of dead cells</Box>
                <Box>{currentData.nDeadCells}</Box>
                <Box>Number of live cells</Box>
                <Box>{currentData.nLiveCells}</Box>
                <Box>Number of about to die cells</Box>
                <Box>{currentData.nAboutToDie}</Box>
                <Box>Number of about to live cells</Box>
                <Box>{currentData.nAboutToLive}</Box>
            </Table>
        </Box>
    )
}
