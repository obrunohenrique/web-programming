function Clock({color}: {color:string}) {
    const getHours = () => {
    
        const clock = document.querySelector("div.clock") as HTMLElement
        const date = new Date()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        const hour = hours < 10 ? `0${hours}` : hours
        const minute = minutes < 10 ? `0${minutes}` : minutes
        const second = seconds < 10 ? `0${seconds}` : seconds
        clock.innerHTML = `${hour}:${minute}:${second}`
    }

    setInterval(()=> {
        getHours()
    }, 1000)

    return (
        <>
            <div className="clock" style={{color: color}}>
            </div>
        </>
    )
}

export default Clock;