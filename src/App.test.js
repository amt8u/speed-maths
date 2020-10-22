import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { getRandomOperator, getRandomNumber, addRandomNumber, generateInputs, generateRandomOperator, evaluateExpression, generateOptions } from "./utils";

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('addRandomNumber with range', () => {
  let set1 = new Set();
  addRandomNumber(set1, 0, 10);
  addRandomNumber(set1, 0 ,10);
  expect(set1.size).toEqual(2);
});

test('addRandomNumber without range', () => {
  let set1 = new Set();
  addRandomNumber(set1);
  expect(set1.size).toEqual(0);
});

test('generateInputs with impossible range', () => {
  let inputs = generateInputs(5, 1, 3);
  expect(inputs.size).toEqual(0);
});

test('generate 3 Inputs from 0 to 10', () => {
  let inputs = generateInputs(3, 0, 10);
  expect(inputs.size).toEqual(3);
});

test('generate 10 Inputs from 0 to 200', () => {
  let inputs = generateInputs(10, 0, 200);
  expect(inputs.size).toEqual(10);
});

test('number within range', () => {
  let num = getRandomNumber(78, 99);
  expect(num).toBeGreaterThanOrEqual(78);
  expect(num).toBeLessThanOrEqual(99);
});

test('generate 5 inputs from -5 to 5 ', () => {
  let inputs = generateInputs(5, -5, 5);
  expect(inputs.size).toEqual(5);
});

test('Operator should be + for level 0', () => {
  let op = generateRandomOperator(0);
  expect(op).toEqual("+");
});

// test('Operator should be +/- for level 1', () => {
//   let op = generateRandomOperator(1);
//   let expected = [op];
//   expect(["+", "-"]).not.toEqual(
//     expect.arrayContaining(expected)
//   );
// });

test('Expression evaluation is correct', () => {
  let inputs = new Set([2,5]);
  let operator = "-";
  expect(evaluateExpression(inputs, operator)).toEqual(-3);
});

test('Expression evaluation is correct with negative numbers', () => {
  let inputs = new Set([5,-5]);
  let operator = "-";
  expect(evaluateExpression(inputs, operator)).toEqual(10);
});

test('Expression addition', () => {
  let inputs = new Set([2,5]);
  let operator = "+";
  expect(evaluateExpression(inputs, operator)).toEqual(7);
});

test('Expression Substraction', () => {
  let inputs = new Set([2,5]);
  let operator = "-";
  expect(evaluateExpression(inputs, operator)).toEqual(-3);
});

test('Expression Multiplication', () => {
  let inputs = new Set([2,5]);
  let operator = "*";
  expect(evaluateExpression(inputs, operator)).toEqual(10);
});

test('Expression division', () => {
  let inputs = new Set([2,5]);
  let operator = "/";
  expect(evaluateExpression(inputs, operator)).toEqual(2/5);
});

test('Generate 4 options for value 56', () => {
  let options = generateOptions(4, 56);
  expect(options.size).toEqual(4);
});