import clsx from "clsx";

function Button(props: {
    text: React.ReactNode,
    className?: string,
    action?: () => void;
}) {
    const style = clsx(
        props.className ? props.className : "flex flex-row items-center justify-center gap-2 px-4 py-2 text-xl " +
            "rounded-xl transition-all duration-200 hover:scale-105 border border-transparent lg:w-auto",
    )

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