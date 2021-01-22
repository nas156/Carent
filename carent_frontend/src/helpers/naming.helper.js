function toUpper(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function toLower(s) {
    return s.charAt(0).toLowerCase() + s.slice(1);
}

export function makePretty(string) {
    const splitedByUpper = string.split(/(?=[A-Z])/);
    return toUpper(splitedByUpper.map(item => toLower(item)).join(" "));
}