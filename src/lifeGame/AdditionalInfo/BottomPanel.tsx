import React from 'react'

import { RequirementsListItem } from './RequirementsListItem'
import { Box, List } from '@chakra-ui/core'

export const BottomPanel = () => {
    return (
        <>
            <Box mt={8}>
                <Box alignItems='center' d='flex'>
                    <Box w='20px' h='20px' bg='black' />
                    <Box>&nbsp;- Live</Box>
                </Box>
                <Box alignItems='center' d='flex' mt={1}>
                    <Box w='20px' h='20px' bg='white' />
                    <Box>&nbsp;- Dead</Box>
                </Box>
            </Box>
            <List mt={4}>
                <RequirementsListItem>
                    Any live cell with fewer than two live neighbours dies (underpopulation).
                </RequirementsListItem>
                <RequirementsListItem>
                    Any live cell with two or three live neighbours lives on to the next generation.
                </RequirementsListItem>
                <RequirementsListItem>
                    Any live cell with more than three live neighbours dies (overcrowding).
                </RequirementsListItem>
                <RequirementsListItem>
                    Any dead cell with exactly three live neighbours becomes a live cell (reproduction).
                </RequirementsListItem>
            </List>
        </>
    )
}
