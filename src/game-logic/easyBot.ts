import type {BoardType, Move} from "@/types/BoardType.ts";

export const easyBot = (board: BoardType, move: ({x, y}: Move) => void) => {
    const availableCells: [number, number][] = [];

    board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            if (cell === "#") availableCells.push([rowIndex, colIndex]);
        })
    })


    console.log(availableCells);
    const [x, y] = availableCells[Math.floor(Math.random() * availableCells.length)]

    console.log(x, y)

    move({ x: y, y:  x });
}