import Board from "../components/Board.tsx";
import {Link} from "react-router";
import { ArrowBigLeft, Save, RotateCcw } from "lucide-react"
import Button from "@/components/Button.tsx";
import { X, Circle } from "lucide-react"
import {useGame} from "@/hooks/useGame.tsx";
import BannerModal from "@/components/Modal.tsx";

function Game() {
    const {
        curentPlayer,
        modalIsOpen,
    } = useGame()

    return (
        <>
            <BannerModal isOpen={modalIsOpen} onClose={() => !modalIsOpen}/>
            <div className="flex flex-row items-center justify-between m-2">
                <Link to="/">
                    <Button text={<><ArrowBigLeft /> Home</>} />
                </Link>
                <h1 className="text-6xl leading-tight text-center text-gray-light">Game</h1>
                <div className="flex flex-row gap-2">
                    <Button text={<><RotateCcw /></>} theme={"grayLight"} />
                    <Button text={<><Save /> Save</>} />
                </div>
            </div>
            <div className="flex flex-col items-center justify-between mt-4">
                <Board />
                <section className="flex flex-row gap-3">
                    <div className="flex flew-row justify-between items-center rounded-xl text-xl p-2 mt-3 bg-gray-light
                    text-black shadow-[0_4px_0_var(--color-gray-light-shadow)]">
                        {
                            curentPlayer === "X" ? <X /> : <Circle />
                        }
                         Turn
                    </div>
                </section>
            </div>
        </>
    )
}

export default Game