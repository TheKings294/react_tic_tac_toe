import {Link, NavLink} from "react-router";
import logo from '../assets/tic_tac_toe.webp'
import {House, ChartNoAxesCombined, GamepadDirectional} from 'lucide-react'
import {useLocalStorage} from "@/hooks/useLocalStorage.tsx";
import type {SaverGame} from "@/types/BoardType.ts";

function Navbar() {
    const [game] = useLocalStorage<SaverGame>('game', {
        username: "",
        player1Wins: 0,
        ties: 0,
        player2Wins: 0,
        playerTurn: "X",
        moves: []
    });

    return (
        <nav className="w-full border-b border-b-gray-light">
            <div className="mx-auto flex items-center justify-between px-4 py-3 md:max-w-6xl">
                <Link to="/" className="text-lg font-semibold">
                    <img src={logo} width={"60rem"} height={"60rem"} />
                </Link>

                <div
                    className={`flex-col items-center gap-4 py-4 transition-all 
                    md:static flex md:flex-row md:w-auto md:py-0`}
                >
                    <NavLink to="/" className={({ isActive, isPending }) => (
                            isActive ? "btn bg-orange px-3 py-2 rounded-xl border border-transparent transition-all " +
                                "duration-200 hover:scale-105 flex flex-row justify-center gap-2" :
                            isPending ? "btn px-3 py-2 text-white bg-gray-darker transition-all duration-200 " +
                                "hover:scale-105" :
                                "mr-1 text-base px-3 py-2 rounded-xl transition-all duration-200 hover:scale-105 " +
                                "hover:border-orange border border-transparent text-white flex flex-row justify-center gap-2"
                    )}>
                        <House />
                        Home
                    </NavLink>
                    <NavLink to="/board" className={({ isActive, isPending }) => (
                        isActive ? "bg-orange px-3 py-2 rounded-xl border border-transparent transition-all " +
                            "duration-200 hover:scale-105 flex flex-row justify-center gap-2" :
                            isPending ? "px-3 py-2 bg-gray-darker transition-all duration-200 hover:scale-105" :
                                "btn mr-1 px-3 py-2 rounded-xl text-base transition-all duration-200 hover:scale-105 " +
                                "hover:border-orange border border-transparent text-white flex flex-row justify-center gap-2"
                    )}>
                        <ChartNoAxesCombined />
                        Leader Board
                    </NavLink>
                    {
                        game.username !== "" ?
                            <NavLink to="/game" className={({ isActive, isPending }) => (
                                isActive ? "bg-orange px-3 py-2 rounded-xl border border-transparent transition-all " +
                                    "duration-200 hover:scale-105 flex flex-row justify-center gap-2" :
                                    isPending ? "px-3 py-2 bg-gray-darker transition-all duration-200 hover:scale-105" :
                                        "btn mr-1 px-3 py-2 rounded-xl text-base transition-all duration-200 hover:scale-105 " +
                                        "hover:border-orange border border-transparent text-white flex flex-row justify-center gap-2"
                            )}>
                                <GamepadDirectional />
                                Game
                            </NavLink>
                            :
                            ""
                    }
                </div>
            </div>
        </nav>
    )
}
{/**/}

export default Navbar