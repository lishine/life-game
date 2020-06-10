export type GridType = boolean[][]

export const calcCell = (isLive: boolean, nLiveNeighbours: number) => {
    if (isLive) {
        if (nLiveNeighbours < 2 || nLiveNeighbours > 3) {
            return false
        }
    } else if (nLiveNeighbours === 3) {
        return true
    }
    return isLive
}

export const countLiveNeighbours = (grid: GridType, colIndex: number, rowIndex: number) => {
    const nRows = grid.length
    const nCols = grid[0].length
    const pairs: [number, number][] = []

    if (colIndex > 0) {
        pairs.push([rowIndex, colIndex - 1])
    }
    if (colIndex < nCols - 1) {
        pairs.push([rowIndex, colIndex + 1])
    }
    if (rowIndex > 0) {
        pairs.push([rowIndex - 1, colIndex])
        if (colIndex > 0) {
            pairs.push([rowIndex - 1, colIndex - 1])
        }
        if (colIndex < nCols - 1) {
            pairs.push([rowIndex - 1, colIndex + 1])
        }
    }
    if (rowIndex < nRows - 1) {
        pairs.push([rowIndex + 1, colIndex])
        if (colIndex > 0) {
            pairs.push([rowIndex + 1, colIndex - 1])
        }
        if (colIndex < nCols - 1) {
            pairs.push([rowIndex + 1, colIndex + 1])
        }
    }

    return pairs.reduce((acc, pair) => (grid[pair[0]][pair[1]] ? acc + 1 : acc), 0)
}

export const processGrid = (currentGrid: GridType) => {
    return currentGrid.map((row, rowIndex) => {
        return row.map((cell, colIndex) => {
            const nLiveNeighbours = countLiveNeighbours(currentGrid, colIndex, rowIndex)
            return calcCell(cell, nLiveNeighbours)
        })
    })
}
