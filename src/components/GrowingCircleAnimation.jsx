import React, {useEffect, useRef} from "react";
import propTypes from "prop-types";


const COLORS = {
  white: "#FFF",
  midNightBlack: "#FFD7D4"
}

const RADIUS_GROWTH_PER_MS = 0.3

const GROWTH_FUNCTION_EXPONENTIAL = 2.9

const PIXEL_SCALING_FACTOR = 0.5


const circleCenterCoordinates = {
  x: null,
  y: null,

  resetMouseState: () => {
    circleCenterCoordinates.x = null
    circleCenterCoordinates.y = null
  }
}


const m = {

  ctx: null, 
  isDark: null,
  radiusMultiplier: null,
  maxRadiusMultiplier: null,
  timeAtPreviousDraw: null,
  height: null,
  width: null,

  createMachine: (ctx, isDark) => {
    m.ctx = ctx
    m.isDark = isDark
    m.height = Math.max(window.screen.height, window.innerHeight)
    m.width = Math.max(window.screen.height, window.innerWidth)
    m.radiusMultiplier = Math.max(m.height, m.width) ** (1.0 / GROWTH_FUNCTION_EXPONENTIAL)
    m.timeAtPreviousDraw = Date.now

    document.body.style.backgroundColor = m.isDark ? COLORS.midNightBlack : COLORS.white
    

    const {width, height} = m.ctx.canvas.getBoundingClientRect()
    if(m.ctx.canvas.width !== width || m.ctx.canvas.height !== height) {
      const {devicePixelRatio: originalRatio = 1} = window
      const lowerResolutionRatio = originalRatio * PIXEL_SCALING_FACTOR
      m.ctx.canvas.width = width * lowerResolutionRatio
      m.ctx.canvas.height = height * lowerResolutionRatio
      m.ctx.scale(lowerResolutionRatio, lowerResolutionRatio)
    }

    if(circleCenterCoordinates.x === null || circleCenterCoordinates.y === null) {
      m.radiusMultiplier = isDark ? 0 : m.radiusMultiplier
    }

    return m.start
  },

  start: () => {
    return m.isDark ? m.shrinkCircle : m.growCircle
  },

  growCircle: () => {
    m.radiusMultiplier += RADIUS_GROWTH_PER_MS * Math.max(1, (Date.now() - m.timeAtPreviousDraw))
    return m.verifyCircleBounds
  },

  shrinkCircle: () => {
    m.radiusMultiplier -= RADIUS_GROWTH_PER_MS * Math.max(1, (Date.now() - m.timeAtPreviousDraw))
    return m.verifyCircleBounds
  },

  verifyCircleBounds: () => {
    if(m.radiusMultiplier <= 0 && m.isDark || 
      m.radiusMultiplier >= m.maxRadiusMultiplier && !m.isDark) {

        m.ctx.fillStyle = m.isDark ? COLORS.midNightBlack : COLORS.white
        m.ctx.fillRect(0, 0, m.width, m.height)

      m.radiusMultiplier = m.isDark ? 0 : m.maxRadiusMultiplier

      return null
      }

      m.ctx.clearRect(0, 0, m.width, m.height)
      return m.drawCircle
  },
  drawCircle: () => {
    m.ctx.fillStyle = COLORS.white
    m.ctx.beginPath()

    m.ctx.arc(
      circleCenterCoordinates.x,
      circleCenterCoordinates.y,
      m.radiusMultiplier ** GROWTH_FUNCTION_EXPONENTIAL,
      0,
      2 * Math.PI
    )

    m.ctx.fill()

    m.timeAtPreviousDraw = Date.now()

    return new Promise((rtn) => {
      const runAfterAnimating = () => {
        rtn(m.start)
      }

      window.requestAnimationFrame(runAfterAnimating)
    })
  }
}

const GrowingCircleAnimation = ({isDark}) => {
  
  const canvasRef = useRef(null);

  useEffect(() => {

    const ctx = canvasRef.current.getContext("2d");

    let stateMachine = m.createMachine(ctx, isDark)
    let isStatemachinePowered = true
    
    const stateMachineRunner = () => {
      if(stateMachine !== null && isStatemachinePowered) {

        if (stateMachine instanceof Function) {
          stateMachine = stateMachine()
          stateMachineRunner()
        } else {
          stateMachine.then((val)=> {
            stateMachine = val
            stateMachineRunner()
          })
        }
      }
    }

    stateMachineRunner()

    const handleClick = (event) => {
            circleCenterCoordinates.x = event.detail.x
            circleCenterCoordinates.y = event.detail.y
          }

    // const handleResize = () => {
    //   circleCenterCoordinates.resetMouseState()
    //   stateMachine = m.createMachine(ctx, isDark)
    //   stateMachineRunner()
    // }

    window.addEventListener("darkModeToggle", handleClick)
    // window.addEventListener("resize", throttle(debounce(handleResize)), false)
 
    return () => {
      window.removeEventListener("darkModeToggle", handleClick)
      isStatemachinePowered = false
    }
  
  }, [isDark])
  
  console.log('isDark', isDark)
  
    return <canvas className="w-[410vw] h-[400vh] fixed z-[-1] bg-[#111]" ref={canvasRef} />;
}


GrowingCircleAnimation.prototype = {
  isDark: propTypes.bool.isRequired
}

// console.log('m.ctx.canvas', m.ctx.canvas.boundingClientRect())

// let shouldDraw = false

// const mouseCoordinates = {
//   mouseX: null,
//   mouseY: null
// }

// const GrowingCircleAnimation = () => {
//   const canvasRef = useRef(null);
 
//   const draw = (ctx, radius) => {
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//     ctx.fillStyle = "#00F";
//     ctx.beginPath();
//     ctx.arc(mouseCoordinates.mouseX, mouseCoordinates.mouseY, Math.pow(radius, 2.9), 0, 2 * Math.PI);
//     ctx.fill();
//   };
 
//   useEffect(() => {
//     const context = canvasRef.current.getContext("2d");
//     let radius = 0;
//     let animationFrameId;

//     const { width, height } = context.canvas.getBoundingClientRect();
// if (context.canvas.width !== width || context.canvas.height !== height) {
//   const { devicePixelRatio: originalRatio = 1 } = window;
//   // we don't need such a high resolution for this type of animation. Plus it makes the edges
//   // of the circle look blurred, which looks nicer. Also improves performance a lot on slow GPUs
//   // change from 0.5 to 1 if you want to use display's native resolution.
//   const lowerResolutionRatio = originalRatio * 0.5;
//   context.canvas.width = width * lowerResolutionRatio;
//   context.canvas.height = height * lowerResolutionRatio;
//   context.scale(lowerResolutionRatio, lowerResolutionRatio);
// }

//     const handleClick = (event) => {
//       shouldDraw = true

//       mouseCoordinates.mouseX = event.detail.x
//       mouseCoordinates.mouseY = event.detail.y
//     }

//     const screenHeight = window.screen.height;
//     const screenWidth = window.screen.height;
//     const maxRadiusMultiplier = Math.pow(Math.max(screenWidth, screenHeight), (1.0 / 2.9));
 
//     const render = () => {
//       radius += 0.3;

//       if(radius < maxRadiusMultiplier) {
//         draw(context, radius);
//       animationFrameId = window.requestAnimationFrame(render);
//     };
//       }
      

//     if(shouldDraw) {render();}

//     window.addEventListener("darkModeToggle", handleClick)
 
//     return () => {
//       window.cancelAnimationFrame(animationFrameId);
//       window.removeEventListener("darkModeToggle", handleClick)
//     }; 
//   }, [draw]);
 
//   return <canvas className="w-[410vw] h-[400vh] fixed z-[-1] bg-[#111]" ref={canvasRef} />;
// };
 
export default GrowingCircleAnimation;