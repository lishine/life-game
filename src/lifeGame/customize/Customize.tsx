import React from 'react'
import { Flex, Box, Checkbox, BoxProps } from '@chakra-ui/core'
import { NumberInput } from '../AdditionalInfo/NumberInput'
import { useCustomizeContext } from './_customize'

const inputWidth = '100px'

export const Customize = (props: BoxProps) => {
    const dimensionNCells = useCustomizeContext((state) => state.dimensionNCells)
    const handleSetDimensionNCells = useCustomizeContext((state) => state.handleSetDimensionNCells)
    const cellWidth = useCustomizeContext((state) => state.cellWidth)
    const handleSetCellWidth = useCustomizeContext((state) => state.handleSetCellWidth)
    const tickInterval = useCustomizeContext((state) => state.tickInterval)
    const handleSetTickInterval = useCustomizeContext((state) => state.handleSetTickInterval)
    const showBgOnlyForAboutToChangeCell = useCustomizeContext((state) => state.showBgOnlyForAboutToChangeCell)
    const handleShowBgOnlyForAboutToChangeCell = useCustomizeContext(
        (state) => state.handleShowBgOnlyForAboutToChangeCell
    )
    const showCellBg = useCustomizeContext((state) => state.showCellBg)
    const handleShowCellBg = useCustomizeContext((state) => state.handleShowCellBg)
    const showUpdateIndicator = useCustomizeContext((state) => state.showUpdateIndicator)
    const handleShowUpdateIndicator = useCustomizeContext((state) => state.handleShowUpdateIndicator)

    return (
        <Box pt={4} data-id='Customize' {...props}>
            <Box>
                <Box>
                    <Checkbox
                        isChecked={showBgOnlyForAboutToChangeCell}
                        onChange={handleShowBgOnlyForAboutToChangeCell}
                    >
                        Show background only for about to change cell
                    </Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={showCellBg} onChange={handleShowCellBg}>
                        Show cell background
                    </Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={showUpdateIndicator} onChange={handleShowUpdateIndicator}>
                        Show update indicator
                    </Checkbox>
                </Box>
            </Box>
            <Box mt={4}>
                <label htmlFor='cellWidth'>Cell width</label>
                <NumberInput
                    size='sm'
                    mb={3}
                    min={5}
                    max={50}
                    w={inputWidth}
                    id='cellWidth'
                    value={cellWidth}
                    onChange={handleSetCellWidth}
                />
                <label htmlFor='dimensionNCells'>Dimension number of cells</label>
                <NumberInput
                    size='sm'
                    mb={3}
                    min={5}
                    max={50}
                    w={inputWidth}
                    id='dimensionNCells'
                    value={dimensionNCells}
                    onChange={handleSetDimensionNCells}
                />
                <label htmlFor='tickInterval'>Tick Interval</label>
                <NumberInput
                    size='sm'
                    mb={3}
                    min={100}
                    max={100000}
                    step={1000}
                    w={inputWidth}
                    id='tickInterval'
                    value={tickInterval}
                    onChange={handleSetTickInterval}
                />
            </Box>
        </Box>
    )
}
