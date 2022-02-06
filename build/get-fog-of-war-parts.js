export const getFogOfWarParts = (element, padding) => {
    let topBottom = Math.floor(window.innerHeight - element.top);
    let centerTop = Math.floor(window.innerHeight - topBottom - padding);
    let centerBottom = Math.floor(window.innerHeight - element.bottom);
    let bottomTop = Math.floor(window.innerHeight - centerBottom);
    const isCenterTopAndTopBottomOverlapping = window.innerHeight - centerTop === topBottom + padding;
    if (isCenterTopAndTopBottomOverlapping) {
        topBottom += 0.5;
    }
    const isCenterBottomAndBottomTopOverlapping = window.innerHeight - centerBottom === bottomTop;
    if (isCenterBottomAndBottomTopOverlapping) {
        bottomTop += 0.5;
    }
    return {
        top: {
            top: 0,
            left: 0,
            right: 0,
            bottom: topBottom + padding,
        },
        left: {
            top: centerTop,
            left: 0,
            right: window.innerWidth - element.left + padding,
            bottom: centerBottom - padding,
        },
        right: {
            top: centerTop,
            left: element.right + padding,
            right: 0,
            bottom: centerBottom - padding,
        },
        bottom: {
            top: bottomTop + padding,
            left: 0,
            right: 0,
            bottom: 0,
        },
    };
};
