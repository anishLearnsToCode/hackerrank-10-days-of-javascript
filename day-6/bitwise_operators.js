function getMaxLessThanK(n, k) {
    let maximumBitwiseAnd = 0;
    for (let i = 1 ; i <= n ; i++) {
        for (let j = i + 1 ; j <= n ; j++) {
            let currentBitwise = i & j;
            if (maximumBitwiseAnd < currentBitwise && currentBitwise < k) {
                maximumBitwiseAnd = currentBitwise;
                if (maximumBitwiseAnd === k - 1) {
                    return maximumBitwiseAnd;
                }
            }
        }
    }

    return maximumBitwiseAnd;
}
