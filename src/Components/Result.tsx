import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Result = ({ input }) => {
  const resultData = calculateInvestmentResults(input);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
        <tbody>
          {resultData.map((yearData) => {
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{yearData.year}</td>
                <td>{yearData.interest}</td>
              </tr>
            );
          })}
        </tbody>
      </thead>
    </table>
  );
};

export default Result;
