export function getScalingFactor(thresholds, value, edgeWidth = 40, chartWidth = 440) {
    if (thresholds) {
        const maxValuePosition = (chartWidth - (edgeWidth / 2))
        let lastThreshold = thresholds.at(-1)
        let maxValue = chartWidth / maxValuePosition * lastThreshold

        return maxValuePosition / (value > maxValue ? value : maxValue)
    }
    return 0
}

export function scaleThresholds(thresholds, scalingFactor, value, chartWidth = 440) {
    let rightEdgeValue = chartWidth / scalingFactor

    // scale
    let scaledThresholds = thresholds.map(item => item  * scalingFactor)

    // push edge as a treshold
    scaledThresholds.push((value > rightEdgeValue ? value : rightEdgeValue) * scalingFactor)

    return scaledThresholds
}

export function getWidths(scaledThresholds) {
    let widths = [scaledThresholds[0]]
    for (let index = 1; index < scaledThresholds.length; index++) {
        const currentElement = scaledThresholds[index];
        const prevElement = scaledThresholds[index-1]
        widths.push(currentElement - prevElement)
    }
    return widths
}

export function adjustLabelPosition(elements) {

    let textAttr = []


    // extract the x and width
    for (let index = 0; index < elements.length; index++) {

        const textElement = elements[index].querySelector('text')
        const width = textElement.getBoundingClientRect().width ;
        const settedX = parseFloat(textElement.getAttribute('x'))

        textAttr.push({width, settedX})
    }


    // calculate the adjusted values
    for (let index = 0; index < textAttr.length; index++) {
        const element = textAttr[index]

        if (index == 0) {
            if ((element.settedX - (element.width / 2)) < 0) {
                textAttr[index]['settedX'] = textAttr[index]['width'] / 2 + 1
            }
        } else {
            const labelPadding = 5
            const prevElement = textAttr[index-1]

            let rightValue = prevElement.settedX + (prevElement.width / 2)
            let leftValue = element.settedX - (element.width / 2)

             if (rightValue > leftValue) {
                textAttr[index]['settedX'] = prevElement.settedX 
                                                + (prevElement.width / 2) 
                                                + (element.width / 2) 
                                                + labelPadding
             }
        }

    }


    // repaint
    for (let index = 0; index < elements.length; index++) {
        const textElement = elements[index].querySelector('text')
        const lineElement = elements[index].querySelector('line')
        textElement.setAttribute('x', textAttr[index]['settedX'])
        lineElement.setAttribute('x2', textAttr[index]['settedX'])
    }

}