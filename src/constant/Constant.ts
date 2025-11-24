import type {BoardType} from "../types/BoardType.ts";

export const PLAY_BOARD_CONFIG: number[] = [3, 3]
export const INITIAL_BOARD: BoardType = [
    ["#", "#", "#"],
    ["#", "#", "#"],
    ["#", "#", "#"]
]

export const themeClasses: Record<string, string> = {
    orange: `
    bg-orange
    text-black
    shadow-[0_4px_0_var(--color-orange-shadow)]
    hover:shadow-[0_2px_0_var(--color-orange-shadow)]
    active:shadow-none
  `,

    grayLight: `
    bg-gray-light
    text-black
    shadow-[0_4px_0_var(--color-gray-light-shadow)]
    hover:shadow-[0_2px_0_var(--color-gray-light-shadow)]
    active:shadow-none
  `,

    grayDark: `
    bg-gray-dark
    text-white
    shadow-[0_4px_0_var(--color-gray-dark-shadow)]
    hover:shadow-[0_2px_0_var(--color-gray-dark-shadow)]
    active:shadow-none
  `,
};
