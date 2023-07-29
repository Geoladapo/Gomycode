/* Problem 1

Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
Example:
Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements 4, 7, 2 )
Give a solutions to this problem, using arrays


Problem 2 
You are asked to write an algorithm that fulfill the following: 

Name: Dot product
Description:
Write a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
Modify the previous algorithm if you use a dot_product function instead of a procedure.

*/

////////////////////////////////
// CODE IN JAVASCRIT -- SOLUTION 1

// Input arrays representing sets
const Set1 = [3, 1, 7, 9];
const Set2 = [2, 4, 1, 9, 3];

// Create sets containing the elements of the input sets
const set1Set = new Set(Set1);
const set2Set = new Set(Set2);

// Create an empty set called DistinctSet to store the distinct elements
const DistinctSet = new Set();

// Iterate through the elements in Set1 and add them to DistinctSet if not already present
for (const element of set1Set) {
  DistinctSet.add(element);
}

// Iterate through the elements in Set2 and add them to DistinctSet if not already present
for (const element of set2Set) {
  DistinctSet.add(element);
}

// Calculate the sum of all elements in DistinctSet
let sumDistinct = 0;
for (const element of DistinctSet) {
  sumDistinct += element;
}

// The sumDistinct variable now holds the sum of all distinct elements from both sets
console.log(sumDistinct);

////////////////////////////////////////
// SOLUTION 2

////////////// Using Functional Approach ///////////////////////

// Function to calculate the dot product of two vectors
function dot_product(v1, v2) {
  if (v1.length !== v2.length) {
    throw new Error("Vector dimensions must be the same");
  }

  let product = 0;
  for (let i = 0; i < v1.length; i++) {
    product += v1[i] * v2[i];
  }

  return product;
}

// Algorithm to check if two vectors are orthogonal
function isOrthogonal(v1, v2) {
  const dotProduct = dot_product(v1, v2);
  return dotProduct === 0;
}

// Example usage:
const v1 = [1, 2, 3];
const v2 = [4, -2, 1];

console.log("Dot product:", dot_product(v1, v2));
console.log("Are vectors orthogonal?", isOrthogonal(v1, v2));

////////////// Using Procedural Approach ///////////////////////

function dot_product(v1, v2) {
  if (v1.length !== v2.length) {
    throw new Error("Vector dimensions must be the same");
  }

  let product = 0;
  for (let i = 0; i < v1.length; i++) {
    product += v1[i] * v2[i];
  }

  return product;
}

// Algorithm to check if two vectors are orthogonal
function isOrthogonal(v1, v2) {
  const ps = dot_product(v1, v2);
  return ps === 0;
}

// Example usage:
const v1 = [1, 2, 3];
const v2 = [4, -2, 1];

dot_product(v1, v2);
console.log("Dot product (stored in ps):", ps);
console.log("Are vectors orthogonal?", isOrthogonal(v1, v2));
