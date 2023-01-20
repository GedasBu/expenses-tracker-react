import React from "react";
import ExpenseItem from "./ExpenseItem.js";

import "./ExpensesList.css";

const ExpenesesList = (props) => {
  return (
    <ul className="expenses-list">
      {(props.selectedYear === "all"
        ? props.items
        : props.filteredExpenses
      ).map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpenesesList;
