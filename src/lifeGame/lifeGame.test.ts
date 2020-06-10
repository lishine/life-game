import { GridType, countLiveNeighbours, calcCell, processGrid } from './lifeGame'

test('Count live Neighbours', () => {
    let grid: GridType = [
        [true, true],
        [true, true],
    ]
    expect(countLiveNeighbours(grid, 0, 0)).toBe(3)
    expect(countLiveNeighbours(grid, 0, 1)).toBe(3)
    expect(countLiveNeighbours(grid, 1, 0)).toBe(3)
    expect(countLiveNeighbours(grid, 1, 1)).toBe(3)
})

test('These are the original requirements', () => {
    expect(calcCell(true, 1)).toBe(false)
    expect(calcCell(true, 2)).toBe(true)
    expect(calcCell(true, 3)).toBe(true)
    expect(calcCell(true, 4)).toBe(false)
    expect(calcCell(false, 3)).toBe(true)
})

test('Process grid', () => {
    let grid: GridType = [
        [true, true],
        [true, true],
    ]
    expect(processGrid(grid)).toEqual([
        [true, true],
        [true, true],
    ])
})
