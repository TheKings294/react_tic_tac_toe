import {useState} from "react";
import {Cpu, Users, X, Infinity} from "lucide-react";
import Button from "./Button.tsx";

function FormGame() {
    const [arePlayer, setArePlayer] = useState<number>(1)
    const [gameMode, setGameMode] = useState<number>(1)


    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center justify-center w-full gap-8 p-6 text-white lg:w-auto"
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
                        action={() => setGameMode(1)}
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
                        action={() => setGameMode(2)}
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
                        />
                    </section>
                </div>
            )}

            <Button text={"Commencer la partie"} theme={"orange"} />
        </form>
    );
}

export default FormGame;