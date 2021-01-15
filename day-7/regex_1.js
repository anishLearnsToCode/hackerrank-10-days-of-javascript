function regexVar(str) {
    /**
     *  ^ => first item matches:
        () => stores matching value captured within
        [aeiou] => matches any of the characters in the brackets
        . => matches any character:
        + => for 1 or more occurrences (this ensures str length > 3)
        \1 => matches to previously stored match.
        \2 looks for matched item stored 2 instances ago
        \3 looks for matched item stored 3 ago, etc

        $ ensures that matched item is at end of the sequence
     */

    return /^([aeiou]).+\1$/;
}
