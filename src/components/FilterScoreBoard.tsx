import {useScore} from "@/hooks/useScore.tsx";
import Button from "@/components/Button.tsx";
import {Medal, CalendarFold} from "lucide-react";

function FilterScoreBoard() {
    const {
        setFilter,
        filter
    } = useScore()
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full">
                <p className={"text-gray-light"}>Filtré par :</p>
                <section className="flex flex-row items-center justify-center w-full gap-4">
                    <Button text={<><Medal /> Streak</>} action={() => setFilter("STREAK")} isDisabled={filter === "STREAK"} />
                    <Button text={<><CalendarFold /> Date</>} action={() => setFilter("DATE")} isDisabled={filter === "DATE"} />
                </section>
            </div>

        </>
    )
}

export default FilterScoreBoard;