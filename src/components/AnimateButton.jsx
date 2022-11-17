export function AnimateButtonPrimary() {

    return (
        <button>
            <a href="#intro"></a>
        </button>
    )
} 

export function AnimateButtonPoint(props) {
    return(
        <div className={`animate-button w-full flex justify-center ${props.animateButtonClass}`}>
            <div className="animate-button-contain pr-8">
                <div  
                id="btn_2"
                // onClick={() => {setToggleCardThree(!toggleCardThree)}}
                className="info-end m-0">
                    
                </div>
            </div>
        </div>
    )
}