# finance-pwa

## Features
- Checking account
- Add money to checking
- Subtract money from checking (with tag?)
- Expense Tracking, with date of incurrment, section with expenses due, click to apply (subtracts from checking)
- Add tags to expenses?
- Cashflow calculator
- Checking account envelopes
- Amounts Payable
- Amounts Receivable
- Log In/Out
- Password Reset


# Tech
- MongoDb
- Express
- React
- Node
- Luxon


# Schemas
- User
    - Username
    - Display Name
    - Email
    - password

- Account
    - username_id
    - checking
    - envelopes (list of envelope)
    - expenses (list of expense)
    - due (list of expense)

- Envelope
    - Name (string)
    - Amount (integer)

- Expense
    - name (string)
    - amount (integer)
    - frequency of occurrence (some kind of time stamp)


# To Run Locally 
    - Clone repo
    - From root directory, run `node server.js` to launch backend
    - In new terminal, navigate to `finance-front-end` directory
    - Run `npm start` to launch front end

# Tips
    - Use Insomnia to test endpoints
    - For development, check out branch for each story
