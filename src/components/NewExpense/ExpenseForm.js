import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
  };
  const subCategoryChangeHandler = (e) => {
    setSubCategory(e.target.value);
  };
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const sumbitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      category: category,
      subCategory: subCategory,
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);

    setCategory("");
    setSubCategory("");
    setTitle("");
    setAmount("");
    setDate("");
    props.showForm(false);
  };

  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={categoryChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Subcategory</label>
          <input
            type="text"
            value={subCategory}
            onChange={subCategoryChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2024-01-01"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={() => props.showForm(false)}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
