import {motion} from "framer-motion";
import type {ScoreboardType} from "@/types/ScoreBoardType.ts";
import {containsRank} from "@/utils";
import {Crown} from 'lucide-react'

function ScoreTable({scoreBoard}: {
    scoreBoard: ScoreboardType[]
}) {
    return (
        <motion.table
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="table-auto
                bg-gray-dark
                rounded-xl
                overflow-hidden
                text-gray-light
                w-full
                mx-3"
            >
            <thead>
                <tr className="text-center">
                    <th></th>
                    <th>Username</th>
                    <th>Win Streak</th>
                    <th>Game Mode</th>
                    <th className="max-sm:hidden">Played At</th>
                </tr>
            </thead>
            <tbody>
            {
                containsRank(scoreBoard) ?
                    scoreBoard.map((score, idx) => (
                        <tr key={idx} className="text-center
                                odd:bg-gray-dark-500
                                even:bg-gray-dark-shadow
                                transition-colors">
                            <td>
                                {score.rank === 1 ?
                                    (
                                        <div className="flex items-center gap-2 text-secondary justify-center">
                                            <Crown className="size-4"/>
                                            <span className="underline">
                                        {
                                            score.rank
                                        }
                                        </span>
                                        </div>
                                    ) : score.rank
                                }
                            </td>
                            <td>{score.username}</td>
                            <td>{score.winStreak}</td>
                            <td>{score.gameMode === 1 ? "Solo" : "Multijoeur"}</td>
                            <td className="max-sm:hidden">{new Date(score.timestamp).toLocaleString()}</td>
                        </tr>
                    ))
                :
                scoreBoard.map((score: ScoreboardType, idx: number) => (
                    <tr key={idx} className="text-center
                    odd:bg-gray-dark-500
                    even:bg-gray-dark-shadow
                    transition-colors">
                        <td>{idx + 1}</td>
                        <td>{score.username}</td>
                        <td>{score.winStreak}</td>
                        <td>{score.gameMode === 1 ? "Solo" : "Multijoeur"}</td>
                        <td className="max-sm:hidden">{new Date(score.timestamp).toLocaleString()}</td>
                    </tr>
                ))
            }
            </tbody>
        </motion.table>
    )
}

export default ScoreTable;