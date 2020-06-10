import React, { ChangeEvent } from 'react'
import { useHandler } from 'react-handler-hooks'
import { useState } from 'reinspect'
import { Box, Heading, Checkbox, Input, ListItem, List, ListIcon } from '@chakra-ui/core'
import { useEffect } from 'react'

import { processGrid, GridType } from './lifeGame'
import { Grid, ChildType } from './Grid'
import { CellContent } from './AdditionalInfo/CellContent'
import { useCustomizeContext } from './customize/_customize'
import { BottomPanel } from './AdditionalInfo/BottomPanel'
import { Customize } from './customize/Customize'
import { Stats } from './AdditionalInfo/Stats'

const getInitialGrid = (dimensionNCells: number) => {
    return Array(dimensionNCells)
        .fill(1)
        .map(() =>
            Array(dimensionNCells)
                .fill(1)
                .map(() => Math.random() < 0.5)
        )
}

export const LifeGame = () => {
    const dimensionNCells = useCustomizeContext((state) => state.dimensionNCells)
    const tickInterval = useCustomizeContext((state) => state.tickInterval)
    const cellWidth = useCustomizeContext((state) => state.cellWidth)

    const showAdditionalInfo = useCustomizeContext((state) => state.showAdditionalInfo)
    const handleShowAdditionalInfo = useCustomizeContext((state) => state.handleShowAdditionalInfo)

    const [grid, setGrid] = useState<GridType>([[]], 'setGrid')
    const [nextGrid, setNextGrid] = useState<GridType>([[]], 'setNextGrid')

    useEffect(() => {
        const grid = getInitialGrid(dimensionNCells)
        setGrid(grid)
        setNextGrid(processGrid(grid))
    }, [dimensionNCells])

    useEffect(() => {
        const intervalRef = setInterval(() => {
            setGrid(nextGrid)
            const newGrid = processGrid(nextGrid)
            setNextGrid(newGrid)
        }, tickInterval)
        return () => {
            clearInterval(intervalRef)
        }
    }, [tickInterval, nextGrid])

    return (
        <Box data-id='Life Game' h='100vh'>
            <Box d='grid' width='100vw' gridTemplateColumns='420px auto minmax(0,420px)' justifyContent='space-between'>
                <Box pl={4} pt={8}>
                    <Checkbox isChecked={showAdditionalInfo} onChange={handleShowAdditionalInfo}>
                        Additional info
                    </Checkbox>
                    {showAdditionalInfo && (
                        <Box pl={4}>
                            <Customize />
                            <Stats grid={grid} nextGrid={nextGrid} />
                        </Box>
                    )}
                </Box>

                <Box pl={4}>
                    <Box d='flex'>
                        <Box>
                            <Heading textAlign='center' pt={4} pb={4} color='white'>
                                Life game
                            </Heading>
                            <Grid grid={grid} nextGrid={nextGrid} cellWidth={cellWidth}>
                                {(params) => <CellContent {...params} />}
                            </Grid>
                        </Box>
                    </Box>

                    {showAdditionalInfo && <BottomPanel />}
                </Box>
                <div />
            </Box>
        </Box>
    )
}
