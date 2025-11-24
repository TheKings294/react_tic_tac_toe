import circle from "@/assets/circle.svg";
import cross from "@/assets/cross.svg";
import Button from "@/components/Button.tsx";
import {useGame} from "@/hooks/useGame.tsx";

function Board() {
    const {
        board,
        move
    } = useGame();

    return (
        <>
            <div className="grid grid-rows-3 grid-cols-3 gap-4 rounded-2xl bg-gray-light p-6 min-w-xl">
                {
                    board.map((row, rowIndex) => (
                        row.map((cell, colIndex) => (
                            <Button
                                text={
                                    cell === "X" ? <img src={cross} alt={"circle"} /> :
                                    cell === "O" ? <img src={circle} alt={"cross"} /> :
                                        ""
                                }
                                className="rounded-lg p-4 w-full aspect-square"
                                theme={"grayDark"}
                                action={() => move({ x: colIndex, y: rowIndex })}
                                key={rowIndex-colIndex}
                            />
                        ))
                    ))
                }
            </div>
        </>
    )
}

export default Board;