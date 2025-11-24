import clsx from "clsx";
import {themeClasses} from "@/constant/Constant.ts";

function Button(props: {
    text: React.ReactNode,
    className?: string,
    action?: () => void,
    theme?:  "orange" | "grayLight" | "grayDark",
    overwrite?: boolean,
}) {
    const baseStyle =
        "flex flex-row items-center justify-center gap-2 px-4 py-2 text-xl rounded-xl transition-all duration-200 " +
        "hover:scale-105 lg:w-auto active:translate-y-[2px]";

    let style = clsx(
        themeClasses[props.theme ?? "orange"],
        props.className || baseStyle
    );

    if (props.overwrite) {
        style = props.className || baseStyle;
    }

    return (
        <button
            onClick={props.action}
            className={style}
        >
            {props.text}
        </button>
    )
}

export default Button