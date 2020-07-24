import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
export const Canvas = () => {
  const ref = useRef<HTMLElement>()
  const [mounted, setMounted] = useState(false)
  const [tapePosition, setTapePosition] = useState(0)
  const [transformMatrix, setTransformMatrix] = useState({ h: 0, v: 0 })

  useEffect(() => {
    ref.current = document.body
    setTapePosition(Math.random() * 10)
    setMounted(true)
    setTransformMatrix({
      h: Math.round(Math.random()),
      v: Math.round(Math.random()),
    })
  }, [])

  return mounted
    ? createPortal(
        <>
          <div className="canvas"></div>
          <style jsx>{`
            .canvas {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: -1;
              transform: rotateX(-${transformMatrix.h * 180}deg)
                rotateY(-${transformMatrix.v * 180}deg);
              transform-origin: center;
              animation: canvasEnter 3s ease, canvasHues 20s linear infinite;
              animation-fill-mode: both;
              animation-delay: 0s, -${tapePosition}s;
              background-color: orange;
              background-image: radial-gradient(
                  circle at top left,
                  #008000ff,
                  #00800000
                ),
                radial-gradient(circle at center, #1e90ffff, #1e90ff00),
                radial-gradient(circle at bottom right, #da70d6ff, #da70d600),
                radial-gradient(circle at bottom left, #ffd700ff, #ffd70000),
                radial-gradient(circle at bottom, #ff1493ff, #ff149300);
              will-change: opacity filter;
            }

            @keyframes canvasEnter {
              from {
                opacity: 0;
              }
            }

            @keyframes canvasHues {
              from {
                filter: hue-rotate(-360deg);
              }
            }
          `}</style>
        </>,
        ref.current as Element
      )
    : null
}
