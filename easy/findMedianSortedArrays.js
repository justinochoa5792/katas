// 4. Median of Two Sorted Arrays
//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let sorted = nums1.concat(nums2).sort((a, b) => a - b);
  let median = Math.floor(sorted.length / 2);

  return sorted.length % 2 !== 0
    ? sorted[median]
    : (sorted[median] + sorted[median - 1]) / 2;
};
