import Button from "@/components/Button.tsx";
import {useGame} from "@/hooks/useGame.tsx";
import Cross from "@/components/Cross.tsx";
import Circle from "@/components/Circle.tsx";
import {useCallback} from "react";
import clsx from "clsx";

function Board() {
    const {
        board,
        move,
        winPattern
    } = useGame();

    const getButtonClassName = useCallback((rowIndex: number, colIndex: number, cell: string) => {
        if (!winPattern) return "";

        if (winPattern.some(([first, second]) => first === rowIndex && second === colIndex)) {
            if (cell === "X") return "!bg-cross !text-gray-dark";
            return "!bg-circle !text-gray-darker";
        }

        return "";
    }, [winPattern]);

    return (
        <>
            <div className="grid grid-rows-3 grid-cols-3 gap-4 rounded-2xl bg-gray-light p-6 lg:min-w-xl min-w-dvw">
                {
                    board.map((row, rowIndex) => (
                        row.map((cell, colIndex) => (
                            <Button
                                text={
                                    cell === "X" ? <Cross /> :
                                    cell === "O" ? <Circle /> :
                                    ""
                                }
                                className={clsx(getButtonClassName(rowIndex, colIndex, cell), "rounded-lg p-4 w-full aspect-square",
                                    cell === "X" && !winPattern ?
                                        "!text-cross" : "!text-circle"
                                )}
                                theme={"grayDark"}
                                action={() => move({x: colIndex, y: rowIndex})}
                                key={rowIndex - colIndex}
                                overwrite={false}
                            />
                        ))
                    ))
                }
            </div>
        </>
    )
}

export default Board;
