import React, {useState, useRef} from "react";
import {Cpu, Users, X, Infinity} from "lucide-react";
import Button from "./Button.tsx";
import {useGame} from "@/hooks/useGame.tsx";
import {useNavigate} from "react-router";

function FormGame() {
    const [arePlayer, setArePlayer] = useState<number>(1)
    const [gameMode, setGameModeForm] = useState<number>(1)
    const [player1, setPlayer1] = useState<string>("")
    const [player2, setPlayer2] = useState<string>("")
    const {
        setPlayers,
        setGameMode
    } = useGame()
    const navigate = useNavigate();
    const formRef = useRef<HTMLFormElement>(null);

    const setStateForGame = (e: React.FormEvent) => {
        e.preventDefault()
        setGameMode(gameMode as 1 | 2)
        const players = []

        if (arePlayer === 2) {
            players.push({name: player1}, {name: player2})
        } else {
            players.push({name: player1})
        }

        setPlayers(players)
        navigate("/game")
    }
    return (
        <form
            onSubmit={(e) => setStateForGame(e)}
            className="flex flex-col items-center justify-center w-full gap-8 p-6 text-white lg:w-auto"
            ref={formRef}
        >
            <div className="flex flex-col items-center w-full gap-4">
                <label className="text-2xl font-semibold text-[var(--color-cyan)]">
                    IA ou multijoueur
                </label>
                <section className="flex flex-row items-center justify-center w-full gap-6">
                    <Button
                        text={<><Cpu /> CPU</>}
                        action={() => setArePlayer(1)}
                        className={`flex flex-row items-center justify-center gap-2 px-4 py-2 text-xl rounded-xl 
                        transition-all duration-200 hover:scale-105 border border-transparent lg:w-auto ${
                            arePlayer === 1
                                ? "bg-[var(--color-orange)] text-black shadow-md"
                                : "bg-[var(--color-gray-darker)] hover:border-[var(--color-orange)]"

                        }`}
                        overwrite={true}
                    />
                    <Button
                        text={<><Users /> Multijoueur</>}
                        action={() => setArePlayer(2)}
                        className={`flex flex-row items-center justify-center gap-2 px-4 py-2 text-xl rounded-xl 
                        transition-all duration-200 hover:scale-105 border border-transparent lg:w-auto ${
                            arePlayer === 2
                                ? "bg-[var(--color-orange)] text-black shadow-md"
                                : "bg-[var(--color-gray-darker)] hover:border-[var(--color-orange)]"

                        }`}
                        overwrite={true}
                    />
                </section>
            </div>

            <div className="flex flex-col items-center w-full gap-4">
                <label className="text-2xl font-semibold text-[var(--color-cyan)]">
                    Mode de jeux
                </label>
                <section className="flex flex-row items-center justify-center w-full gap-6 text-xl">
                    <Button
                        text={<><X /> Classic</>}
                        action={() => setGameModeForm(1)}
                        className={`flex flex-row items-center justify-center gap-2 px-4 py-2 rounded-xl transition-all 
                        duration-200 hover:scale-105 border border-transparent ${
                            gameMode === 1
                                ? "bg-[var(--color-orange)] text-black shadow-md"
                                : "bg-[var(--color-gray-darker)] hover:border-[var(--color-orange)]"
                        }`}
                        overwrite={true}
                    />
                    <Button
                        text={<><Infinity /> 3 coups</>}
                        action={() => setGameModeForm(2)}
                        className={`flex flex-row items-center justify-center gap-2 px-4 py-2 rounded-xl transition-all 
                        duration-200 hover:scale-105 border border-transparent ${
                            gameMode === 2
                                ? "bg-[var(--color-orange)] text-black shadow-md"
                                : "bg-[var(--color-gray-darker)] hover:border-[var(--color-orange)]"
                        }`}
                        overwrite={true}
                    />
                </section>
            </div>
            {arePlayer === 2 ? (
                <div className="flex lg:flex-row items-center justify-center w-full gap-4 flex-col">
                    <section className="flex flex-col w-full">
                        <label htmlFor="player1" className="mb-1 text-[var(--color-gray-light)]">
                            Nom du joueur 1
                        </label>
                        <input
                            type="text"
                            id="player1"
                            className="bg-[var(--color-gray-dark)] border border-[var(--color-gray-light-omber)]
                            text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-cyan)]"
                            placeholder="John Doe"
                            required={arePlayer === 2}
                            value={player1}
                            onChange={(e) => setPlayer1(e.target.value)}
                        />
                    </section>

                    <section className="flex flex-col w-full">
                        <label htmlFor="player2" className="mb-1 text-[var(--color-gray-light)]">
                            Nom du joueur 2
                        </label>
                        <input
                            type="text"
                            id="player2"
                            className="bg-[var(--color-gray-dark)] border border-[var(--color-gray-light-omber)]
                            text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-cyan)]"
                            placeholder="Jane Doe"
                            required={arePlayer === 2}
                            value={player2}
                            onChange={(e) => setPlayer2(e.target.value)}
                        />
                    </section>
                </div>
            ) : (
                <div className="w-full">
                    <section className="flex flex-col w-full">
                        <label htmlFor="player" className="mb-1 text-[var(--color-gray-light)]">
                            Nom du joueur
                        </label>
                        <input
                            type="text"
                            id="player"
                            className="bg-[var(--color-gray-dark)] border border-[var(--color-gray-light-omber)]
                            text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-cyan)]"
                            placeholder="John Doe"
                            required={arePlayer === 1}
                            value={player1}
                            onChange={(e) => setPlayer1(e.target.value)}
                        />
                    </section>
                </div>
            )}

            <Button text={"Commencer la partie"} theme={"orange"} action={() => formRef.current?.requestSubmit()} />
        </form>
    );
}

export default FormGame;