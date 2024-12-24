export function AnimateButtonPrimary() {

    return (
        <button className="button-primary">
            <a href="#intro"></a>
        </button>
    )
} 

export function AnimateButtonPoint(props) {

    const btnClass = props.animateButtonClass

    return(
        <div className={`animate-button w-full flex justify-center ${btnClass == "btn-class" ? "button-class" : btnClass == "btn-end" ? "btn-end" : ""}`}>
            <div className="animate-button-contain pr-8">
                <div  
                id="btn_2"
                className="info-end m-0">
                    
                </div>
            </div>
        </div>
    )
}