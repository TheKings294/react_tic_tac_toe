import {useScore} from "@/hooks/useScore.tsx";
import {motion} from "framer-motion";
import ScoreTable from "@/components/ScoreTable.tsx";
import FilterScoreBoard from "@/components/FilterScoreBoard.tsx";

function LeaderBoard() {
    const {
        scoreboard,
        filteredScoreboard,
    } = useScore()
    return (
        <>
            <div>
                <h1 className="text-6xl leading-tight text-center text-gray-light">Leader Board</h1>
            </div>
            <section>
                {
                    scoreboard.length === 0 ?
                        (<p className="text-center text-lg">No games have been played yet</p>)
                        :
                        (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: -20
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 0.3,
                                    type: "tween",
                                }}
                                className="flex flex-col items-center justify-center gap-10 mx-10"
                            >
                                <ScoreTable scoreBoard={filteredScoreboard} />
                                <FilterScoreBoard />
                            </motion.div>
                        )
                }
            </section>
        </>
    )
}

export default LeaderBoard