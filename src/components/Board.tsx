import {useContext} from "react";
import {BoardContext} from "@/context/BoardContext.tsx";
import circle from "@/assets/circle.svg";
import cross from "@/assets/cross.svg";
import Button from "@/components/Button.tsx";

function Board() {
    const boardContext = useContext(BoardContext)

    return (
        <>
            <div className="grid grid-rows-3 grid-cols-3 gap-4 rounded-2xl bg-gray-light p-6 min-w-xl">
                {
                    boardContext.board.map((row) => (
                        row.map((cell) => (
                            <Button
                                text={
                                    cell === "X" ? <img src={cross} alt={"circle"} /> :
                                    cell === "O" ? <img src={circle} alt={"cross"} /> :
                                        ""
                                }
                                className="rounded-lg p-4 w-full aspect-square"
                                theme={"grayDark"}
                            />
                        ))
                    ))
                }
            </div>
        </>
    )
}

export default Board;