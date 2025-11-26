import type {BoardType, Move} from "@/types/BoardType.ts";

export const easyBot = (board: BoardType, move: ({x, y}: Move) => void) => {
    const availableCells: [number, number][] = [];

    board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            if (cell === "#") availableCells.push([rowIndex, colIndex]);
        })
    })

    const [x, y] = availableCells[Math.floor(Math.random() * availableCells.length)]

    move({ x: y, y:  x });
}