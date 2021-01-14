function vowelsAndConsonants(s) {
    const vowels = 'aeiou';

    for (let index = 0 ; index < s.length ; index++) {
        if (vowels.includes(s[index])) {
            console.log(s[index]);
        }
    }

    for (let index = 0 ; index < s.length ; index++) {
        if (!vowels.includes(s[index])) {
            console.log(s[index]);
        }
    }
}
