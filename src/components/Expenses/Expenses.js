import React, { useState } from "react";
import ExpenesesList from "./ExpensesList.js";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesChart from "./ExpensesChart.js";

import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("all");
  const addYearFilterHandler = (year) => {
    setYearFilter(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearFilterChange={addYearFilterHandler}
        selectedYear={yearFilter}
      />
      {filteredExpenses.length === 0 && yearFilter !== "all" && (
        <h2 className="expenses-list__fallback">No expenses found</h2>
      )}
      {yearFilter !== "all" && filteredExpenses.length !== 0 && (
        <ExpensesChart expenses={filteredExpenses} />
      )}
      <ExpenesesList
        items={props.items}
        filteredExpenses={filteredExpenses}
        selectedYear={yearFilter}
      />
    </Card>
  );
};

export default Expenses;
