import { useEffect, useRef } from "react"
import { getScalingFactor, scaleThresholds, getWidths, adjustLabelPosition } from './helpers'


export default function ObxHbar({cmap='RYG', thresholds, value, units, locale='de-DE'}) {
    const ref = useRef(null)

    let cmapKey = {
        'G': "mavie-fill-mint-medium",
        'Y': "mavie-fill-yellow-medium",
        'R': "mavie-fill-coral-medium",
    }

    const markerColor = "mavie-fill-gray-dark mavie-stroke-gray-dark"

    let rectColors = cmap.toUpperCase().split("").map(item =>cmapKey[item])
    let decFormat = new Intl.NumberFormat(locale, { maximumSignificantDigits: 3 })

    let scaledThresholds, labelPositions, scaledWidths, scaledValue
    let rects = []

    let padding = 2 // value of the gap between the rects


    if (thresholds) {

        // Calculates scaling factor for the rectangles.
        // Takes shifts if the value exceeds right edge.
        let c = getScalingFactor(thresholds, value)


        // scale thresholds
        scaledThresholds = scaleThresholds(thresholds, c, value)
        scaledWidths = getWidths(scaledThresholds)


        // scale value
        scaledValue = value * c


        //  rectangles
        let cursor = 0
        for (let index = 0; index < scaledWidths.length; index++) {
            const width = scaledWidths[index];

            rects.push({
                'width': Math.max(width - padding, padding),
                'x': cursor + (padding/2),
                'fill': rectColors[index]
            })
            cursor += width
        }

        labelPositions = [...scaledThresholds.slice(0, -1)]

    }

    useEffect(() => {
        adjustLabelPosition(ref.current.children)
    })



    return (
        <svg baseProfile="full"
            version="1.1" viewBox="0 0 650 50" 
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">

        {/* background */}
        <rect className="fill-transparent" height="50" width="650" x="0" y="0" />

        {/* bars */}
        {rects.map((rect, index) => (
            <rect key={index} className={rect.fill} height="10" width={rect.width} x={rect.x} y="15"/>
        ))}

        {/* threshold values */}
        <g className="text-xs font-sans" ref={ref}>
            {labelPositions.map((t, index) => (
                <g className="text-boxes">
                    <line x1={t} y1="27" x2={t} y2="32" className="stroke-gray-300"/>
                    <text className="mavie-fill-gray-medium" key={index} textAnchor="middle" x={t} y="46">
                        {thresholds[index]}
                    </text>
                </g>
            ))}
        </g>

        {/* marker */}
        <g className={`stroke-2 hover:animate-pulse ${markerColor}`}>
            <line x1={scaledValue} x2={scaledValue} y1="10" y2="27" strokeLinecap="round" strokeWidth="3"/>
            <circle cx={scaledValue} cy="6" r="5" className=""/>
        </g>

        {/* actual measurement at the end */}
        <g className="text-sm">
            <text className="font-bold font-sans text-2xl mavie-fill-gray-dark" x="520" y="28" textAnchor="end">
                {decFormat.format(value)}
            </text>
            <text className="italic mavie-fill-gray-medium" x="530" y="28">
                {units}
            </text>
        </g>

    </svg>
    )
}