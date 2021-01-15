function sides(literals, ...expressions) {
    const [a, p] = expressions;
    const root = Math.sqrt((p * p) - ( 16 * a))
    const s1 = (p + root) / 4;
    const s2 = (p - root) / 4;
    // s2 will always be smaller because of the (-/+) above
    return [s2, s1];
}
