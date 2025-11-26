export type ScoreboardType = {
    username: string,
    winStreak: number,
    timestamp: number,
    gameMode: 1 | 2
}

export type ScoreboardTypeWithRank = ScoreboardType & {
    rank: number
}