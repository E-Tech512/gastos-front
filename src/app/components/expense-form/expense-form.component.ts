import { Component, OnInit } from '@angular/core';
import { Expense, ExpenseService } from '../../service/expense.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';  // Correcta importación de Router
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']  // Nota: Cambié styleUrl a styleUrls
})
export class ExpenseFormComponent implements OnInit {
  expense: Expense = { description: '', amount: 0 };
  isEditing = false;

  constructor(
    private expenseService: ExpenseService,
    private router: Router,  // Asegúrate de importar Router correctamente desde @angular/router
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.expenseService.getExpense(+id).subscribe((data) => {
        this.expense = data;
      });
    }
  }

  saveExpense() {
    if (this.isEditing) {
      this.expenseService
        .updateExpense(this.expense.id!, this.expense)
        .subscribe(() => {
          this.router.navigate(['/']); // Navegar correctamente
        });
    } else {
      this.expenseService.createExpense(this.expense).subscribe(() => {
        this.router.navigate(['/']); // Navegar correctamente a la ruta principal
      });
    }
  }
}
