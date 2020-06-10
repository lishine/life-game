import { ChangeEvent } from 'react'
import { useHandler } from 'react-handler-hooks'
import { useState } from 'reinspect'

import { createContext } from '../../lib/contextStore'

export type CustomizeInitType = {
    tickInterval: number
    dimensionNCells: number
    cellWidth: number
}

const useCustomizeState = (init: CustomizeInitType) => {
    const [dimensionNCells, setDimensionNCells] = useState(init.dimensionNCells, 'setDimensionNCells')

    const [cellWidth, setCellWidth] = useState(init.cellWidth, 'setCellWidth')
    const [tickInterval, setTickInterval] = useState(init.tickInterval, 'setTickInterval')
    const [showBgOnlyForAboutToChangeCell, setShowBgOnlyForAboutToChangeCell] = useState(
        false,
        'setShowBgOnlyForAboutToChangeCell'
    )
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false, 'setShowAdditionalInfo')
    const [showUpdateIndicator, setShowUpdateIndicator] = useState(false, 'setShowUpdateIndicator')
    const [showCellBg, setShowCellBg] = useState(true, 'setShowCellBg')

    const handleSetDimensionNCells = useHandler((value: number | string) => setDimensionNCells(+value))
    const handleSetCellWidth = useHandler((value: number | string) => setCellWidth(+value))
    const handleSetTickInterval = useHandler((value: number | string) => setTickInterval(+value))
    const handleShowBgOnlyForAboutToChangeCell = useHandler((e: ChangeEvent<HTMLInputElement>) =>
        setShowBgOnlyForAboutToChangeCell(e.target.checked)
    )
    const handleShowCellBg = useHandler((e: ChangeEvent<HTMLInputElement>) => setShowCellBg(e.target.checked))
    const handleShowUpdateIndicator = useHandler((e: ChangeEvent<HTMLInputElement>) =>
        setShowUpdateIndicator(e.target.checked)
    )
    const handleShowAdditionalInfo = useHandler((e: ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked
        if (checked && dimensionNCells > 20) {
            handleSetDimensionNCells(20)
            handleSetCellWidth(25)
            handleSetTickInterval(1000)
            setTimeout(() => setShowAdditionalInfo(true), 100)
        } else {
            setShowAdditionalInfo(checked)
        }
    })

    return {
        showAdditionalInfo,
        dimensionNCells,
        cellWidth,
        tickInterval,
        showBgOnlyForAboutToChangeCell,
        showUpdateIndicator,
        showCellBg,
        handleSetDimensionNCells,
        handleSetCellWidth,
        handleSetTickInterval,
        handleShowBgOnlyForAboutToChangeCell,
        handleShowCellBg,
        handleShowUpdateIndicator,
        handleShowAdditionalInfo,
    }
}

export const { Provider: CustomizeProvider, useContext: useCustomizeContext } = createContext(useCustomizeState)
