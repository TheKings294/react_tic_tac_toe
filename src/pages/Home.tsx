import FormGame from "../components/FormGame.tsx";

function Home() {
    return (
        <>
            <div>
                <h1 className="text-6xl leading-tight text-center text-gray-light">TicTacToe</h1>
            </div>
            <div id="formNewGame">
                <FormGame />
            </div>
        </>
    )
}

export default Home