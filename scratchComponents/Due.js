//import react


function Due({expensesDue}) {

    function handleApply(e) {
        event.target.value
        //remove Expense for expenses due list
        //deduct amount from checking

    }

    return (
        <>
            <h1>Expenses Due</h1>
            {expensesDue.map((expenseDue) => {
                return (
                    <>
                       <Expense name={expenseDue.name} amount={expenseDue.amount}/>
                        <button onClick={handleApply} value={expenseDue.id}>Apply</button>
                    </>
                )
            }
         
            )}
        </>
    )
}

export default Due