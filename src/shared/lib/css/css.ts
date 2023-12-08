export const px = (...value: (number | undefined)[]) => value
    .map(x => x === undefined ? "unset" : x)
    .join("px ") + "px";
