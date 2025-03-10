import facebook from "../assets/images/facebook.png"
import linkedIn from "../assets/images/linkedin.png"
import dribble from "../assets/images/dribbble.png"
import instagram from "../assets/images/instagram.png"
// import tumblr from "../assets/images/tumblr.png"
import github from "../assets/images/github-dark.jpg"
import twitter from "../assets/images/twitter.png"

export default function Footer() {

    return (
    <footer>
    
        <h1 className="footer-text">let's connect</h1>
        <div className="social flex flex-row justify-center">
            <a href="https://facebook.com/joseph.akinwole.7/"><img src={facebook} alt="" height="130" id="facebook-logo" className="h-40"></img></a>
            <a href="https://www.linkedin.com/in/joseph-akinwole-71415a198/"><img src={linkedIn} alt="" height="130" id="linkedin-logo" className="h-40"></img></a>
            <a href="https://dribbble.com/Joebim"><img src={dribble} alt="" height="130" id="dribble-logo" className="h-40"></img></a>
            <a href="https://github.com/Joebim"><img src={github} alt="" height="130" id="github-logo" className="rounded-[120px] h-40"></img></a>
            <a href="https://www.instagram.com/josephakinwole/"><img src={instagram} alt="" height="130" id="instagram-logo" className="h-40"></img></a>
            <a href="https://twitter.com/akinwole_joseph"><img src={twitter} alt="" height="130" id="twitter-logo" className="h-40"></img></a>
        </div>
        
        
        

        <cite className="footer-cite">Redesigned by me @ TwentyTwentyTwo</cite>
        {/* <script src="./main.js"></script> */}
    </footer>
    )
}