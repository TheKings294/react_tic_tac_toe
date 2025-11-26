import FormGame from "../components/FormGame.tsx";
import {useLocalStorage} from "@/hooks/useLocalStorage.tsx";
import type {SaverGame} from "@/types/BoardType.ts";
import {useGame} from "@/hooks/useGame.tsx";
import {useEffect} from "react";

function Home() {
    const {
        loadGame
    } = useGame()

    const [game, ] = useLocalStorage<SaverGame>("game", {
        username: "",
        player1Wins: 0,
        ties: 0,
        player2Wins: 0,
        playerTurn: 'X',
        moves: []
    })

    useEffect(() => {
        if (game.username !== "") {
            loadGame()
        }
    }, [game.username, loadGame]);

    return (
        <>
            <div>
                <h1 className="text-6xl leading-tight text-center text-gray-light">TicTacToe</h1>
            </div>
            <div id="formNewGame">
                <FormGame />
            </div>
        </>
    )
}

export default Home