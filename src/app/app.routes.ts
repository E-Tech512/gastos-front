import { Routes } from '@angular/router';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';

export const routes: Routes = [ // Asegúrate de exportar routes
    { path: '', component: ExpensesComponent },
    { path: 'expense-form/:id', component: ExpenseFormComponent },
    { path: 'expense-form', component: ExpenseFormComponent },
];
