const Buttons = (props: any) => {

    return (
        <div className="flex gap-4 justify-center">
            <button className="bg-white text-black font-semibold px-4 py-2 rounded-md hover:scale-95 duration-300
            disabled:text-slate-300 disabled:hover:scale-100" disabled={!props.startActive} onClick={props.startTimer} >Start</button>
            <button className="bg-white text-black font-semibold px-4 py-2 rounded-md hover:scale-95 duration-300" onClick={props.pauseTimer}>Pause</button>
            <button className="bg-white text-black font-semibold px-4 py-2 rounded-md hover:scale-95 duration-300" onClick={props.resetTimer}>Reset</button>
        </div>
    )
}

export default Buttons