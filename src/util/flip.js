// H = 1, T = 0
export function flipOne () {
    const flip = Math.floor(2*Math.random());
    return (flip == 1 ? "H" : "T");
}

// -1 represents the choice of heads or tails in a two flip
export function flipTwo () {
    const flip1 = Math.floor(2*Math.random());
    const flip2 = Math.floor(2*Math.random());
    if (flip1 == flip2) {
        return (flip1 == 1 ? "H" : "T");
    }
    return "B";
}

export function flipNSingles (n) {
    const res = { H:0, T:0, B:0 };
    for (let i = 0; i < n; i++) {
        const flip = flipOne();
        res[flip]++;
    }
    return res;
}

export function flipNDoubles (n) {
    const res = { H:0, T:0, B:0 };
    for (let i = 0; i < n; i++) {
        const flip = flipTwo();
        res[flip]++;
    }
    return res;
}