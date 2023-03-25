export const ellipsize = (str : string | undefined, f = 5, l = 5) => (
    str 
        ? str.length > f + l + 3
            ? str.slice(0, f) + '...' + str.slice(-l)
            : str
        : ''
);

export const toAptos = (lamports: number) => lamports / Math.pow(10, 8);

export const fromAptos = (aptos: number) => aptos * Math.pow(10, 8);

export const round = (num: number, precision = 2) => {
    const factor = Math.pow(10, precision);
    return Math.round(num * factor) / factor;
}