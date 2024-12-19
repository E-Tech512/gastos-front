import { Component, OnInit } from '@angular/core';
import { Expense, ExpenseService } from '../../service/expense.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [FormsModule,RouterModule, CommonModule],  // Asegúrate de incluir RouterModule y CommonModule aquí
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']  // Asegúrate de usar styleUrls
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
    this.loadExpenses();
  }

  loadExpenses() {
    this.expenseService.getExpenses().subscribe((data) => {
      this.expenses = data;
    });
  }

  deleteExpense(id: number | undefined) {
    if (id) {
      this.expenseService.deleteExpense(id).subscribe(() => {
        this.loadExpenses();
      });
    }
  }
}
