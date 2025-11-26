import Board from "../components/Board.tsx";
import {Link, useNavigate} from "react-router";
import { ArrowBigLeft, Save, RotateCcw } from "lucide-react"
import Button from "@/components/Button.tsx";
import { X, Circle } from "lucide-react"
import {useGame} from "@/hooks/useGame.tsx";
import BannerModal from "@/components/Modal.tsx";
import Cross from "@/components/Cross.tsx";
import clsx from "clsx";

function Game() {
    const {
        curentPlayer,
        modalIsOpen,
        players,
        winner,
        nextGame,
        leaveGame,
        saveGame,
    } = useGame()

    const navigate = useNavigate();

    return (
        <>
            <BannerModal
                isOpen={modalIsOpen}
                onClose={() => navigate("/")}
                children={
                <>
                    {winner ?
                        <div className="flex flex-col gap-3">
                            <span
                                className={clsx("text-3xl flex flex-row items-center justify-center",
                                    (winner.name === "X" ? "text-cross": "text-circle"))}>
                                {winner.name === "X" ? <Cross /> : <Circle />} gagne la partie
                            </span>
                            <Button text={"Jeux Suivant"} theme={"orange"} action={nextGame} />
                        </div>
                        : <div className="flex flex-col gap-3">
                            <span
                                className={"text-3xl flex flex-row items-center justify-center text-gray-light"}>
                                Égalité
                            </span>
                            <Button text={"Jeux Suivant"} theme={"orange"} action={nextGame} />
                        </div>}
                </>
                }
            />
            <div className="flex lg:flex-row items-center justify-between m-2 flex-col">
                <Link to="/">
                    <Button text={<><ArrowBigLeft /> Home</>} />
                </Link>
                <h1 className="text-6xl leading-tight text-center text-gray-light">
                    {
                        players.length === 2 ?
                            <>
                                <span>{players[0].name}</span>
                                <span> VS </span>
                                <span>{players[1].name}</span>
                            </>
                             :
                            <>
                                <span>CPU</span>
                                <span> VS </span>
                                <span>{players[0].name}</span>
                            </>
                    }
                </h1>
                <div className="flex flex-row gap-2">
                    <Button text={<><RotateCcw /> Leave</>} theme={"grayLight"} action={() => {
                        leaveGame();
                        navigate("/");
                    }} />
                    <Button text={<><Save /> Save</>} action={saveGame}/>
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