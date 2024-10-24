import React, { useState } from 'react'

interface FormErrors {
    amount?: string;
    category?: string;
    date?: string;
    description?: string;
}

const ExpenseForm = () => {
    const [expenseData, setExpenseData] = useState({
        amount: 0,
        category: "",
        date: "",
        description: ""
    })
    const [error, setError] = useState<FormErrors>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setExpenseData({
            ...expenseData,
            [name]: value
        })

    }

    const validateForm = () => {
        const newErrors: FormErrors = {}

        if (!expenseData.amount || isNaN(expenseData.amount) || expenseData.amount < 0) {
            newErrors.amount = "please enter valid amount"
        }
        if (!expenseData.category) {
            newErrors.category = "category is needed"
        }
        if (!expenseData.date) {
            newErrors.date = "date is needed"
        }
        if (!expenseData.description) {
            newErrors.description = "description is needed"
        }
        setError(newErrors)

        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("you successfully added expenses", expenseData)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="amount">amount:</label>
                <input
                    type="text"
                    name='amount'
                    value={expenseData.amount}
                    onChange={handleChange}
                />
                {error.amount && <p className='text-red-500'>{error.amount}</p>}
            </div>

            <div>
                <label htmlFor="category">category:</label>
                <input
                    type="text"
                    name='category'
                    value={expenseData.category}
                    onChange={handleChange}
                />
                {error.category && <p className='text-red-500'>{error.category}</p>}
            </div>

            <div>
                <label htmlFor="date">date:</label>
                <input
                    type="date"
                    name='date'
                    value={expenseData.date}
                    onChange={handleChange}
                />
                {error.date && <p className='text-red-500'>{error.date}</p>}
            </div>

            <div>
                <label htmlFor="description">description:</label>
                <input
                    type="text"
                    name='description'
                    value={expenseData.description}
                    onChange={handleChange}
                />
                {error.description && <p className='text-red-500'>{error.description}</p>}
            </div>


            <button type="submit">Submit</button>
        </form>
    )
}
export default ExpenseForm
