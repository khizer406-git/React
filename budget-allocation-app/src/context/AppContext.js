import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let new_expenses = [];
    switch (action.type) {
        case 'ADD_QUANTITY':
            let updatedqty = false;
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.quantity = expense.quantity + action.payload.quantity;
                    updatedqty = true;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

            case 'RED_QUANTITY':
                state.expenses.map((expense)=>{
                    if(expense.name === action.payload.name) {
                        expense.quantity = expense.quantity - action.payload.quantity;
                    }
                    expense.quantity = expense.quantity < 0 ? 0: expense.quantity;
                    new_expenses.push(expense);
                    return true;
                })
                state.expenses = new_expenses;
                action.type = "DONE";
                return {
                    ...state,
                };

                case 'ADD_PRICE':
                    let spent = state.expenses.reduce((prev,e)=>prev+parseInt(e.unitprice),0)
                    let Budget = state.budget
                    state.expenses.map((expense)=>{
                        if(expense.name === action.payload.name) {
                            if(spent+action.payload.price <= Budget){
                                expense.unitprice = expense.unitprice + action.payload.price;
                                console.log(action.payload)
                            }else{
                                alert("The Value Cannot exceed remaining Funds")
                            }
                        }
                        expense.unitprice = expense.unitprice < 0 ? 0: expense.unitprice;
                        new_expenses.push(expense);
                        return true;
                    })
                    state.expenses = new_expenses;
                    action.type = "DONE";
                    return {
                        ...state,
                    };
            
                case 'RED_PRICE':
                state.expenses.map((expense)=>{
                    if(expense.name === action.payload.name) {
                        expense.unitprice = expense.unitprice + action.payload.price;
                    }
                    expense.unitprice = expense.unitprice < 0 ? 0: expense.unitprice;
                    new_expenses.push(expense);
                    return true;
                })
                state.expenses = new_expenses;
                action.type = "DONE";
                return {
                    ...state,
                };
                case 'ADD_ITEM':
                    new_expenses = state.expenses.map((expense)=>{
                        return expense 
                    })
                    new_expenses.push(action.payload)
                    state.expenses = new_expenses;
                    action.type = "DONE";
                    return {
                        ...state,
                    };
        case 'DELETE_ITEM':
            new_expenses = state.expenses.filter((expense)=>{
                return expense.name !== action.payload.name 
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

        case 'CHG_LOCATION':
                action.type = "DONE";
                state.Location = action.payload;
                return {
                    ...state
                }

        default:
            return state;
        
        case 'CHG_BUDGET':
            action.type = "DONE";
            let budget = state.budget
            budget = parseInt(action.payload) ;
            state.budget = budget
            return {
                ...state
            }
        
    }    
};

// 1. Sets the initial state when the app loads
const initialState = {
    expenses: [
        { id: "Marketing", name: 'Marketing', quantity: 0, unitprice: 50 },
        { id: "Finance", name: 'Finance', quantity: 0, unitprice: 300 },
        { id: "Sales", name: 'Sales', quantity: 0, unitprice: 70 },
        { id: "Human Resource", name: 'Human Resource', quantity: 0, unitprice: 40 },
        { id: "IT", name: 'IT', quantity: 0, unitprice: 500 },
    ],
    Location: '£',
    budget: 20000,
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total = total + (item.unitprice*item.quantity));
    }, 0);
state.CartValue = totalExpenses;

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                CartValue: state.CartValue,
                dispatch,
                Location: state.Location,
                budget: state.budget,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};