const Timer = (props: any) => {
    
    return (            
            <div className="text-white flex flex-col max-h-[70vh]
            items-center gap-14 justify-center">
                <h2 className="font-extrabold text-4xl pb-12">My Timer</h2>
                <p className="font-bold text-3xl">
                    {(props.timer.minutes < 10? '0' + props.timer.minutes: props.timer.minutes) + ' : '}
                     {(props.timer.seconds < 10? '0' + props.timer.seconds: props.timer.seconds) + ' : '} 
                     {props.timer.milliseconds < 10? '00' + props.timer.milliseconds : props.timer.milliseconds < 100? '0' + props.timer.milliseconds : props.timer.milliseconds}
                </p>
            </div>
    )
}



export default Timer