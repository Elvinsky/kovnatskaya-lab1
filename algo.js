function findKthCoin(coinsSets, k) {
  let left = 0;
  let right = Number.MAX_SAFE_INTEGER;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;

    for (let coins of coinsSets) {
      count += coins.filter((coin) => coin <= mid).length;
    }

    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

const coinsSets = [
  [5, 4, 2],
  [9, 6, 3],
  [10, 7, 1],
];

const k = 9;
const kthCoin = findKthCoin(coinsSets, k);
console.log(`k-я монета по массе: ${kthCoin}`);
