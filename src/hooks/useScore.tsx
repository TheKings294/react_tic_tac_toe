import {useContext} from "react";
import {ScoreContext} from "@/context/ScoreContext.tsx";

export function useScore() {
    return useContext(ScoreContext)
}