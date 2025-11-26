import {useContext} from "react";
import {BoardContext} from "@/context/BoardContext.tsx";

export function useGame() {
    return useContext(BoardContext);
}