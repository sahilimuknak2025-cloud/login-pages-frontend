import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbSlide } from "../../../../node_modules/@ng-bootstrap/ng-bootstrap/index";
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './user-table.html',
  styleUrls: ['./user-table.scss']
})
export class UserTable implements OnInit {
  users: any[] = [];
  editIndex: number | null = null;
  editForm: FormGroup;
  selectedUser: any;

  @ViewChild('deleteModal') deleteModal!: TemplateRef<any>;

  constructor(private api: ApiService, private fb: FormBuilder, private modalService:NgbModal,  private message: NzMessageService  ) {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/), Validators.minLength(10), Validators.maxLength(10)]],
      age: [''],
      gender: ['']
    });
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.api.getUsers().subscribe({
      next: (res: any) => {
        this.users = res;
      },
      error: (err) => console.error(err)
    });
  }

  editUser(index: number): void {
    this.editIndex = index;
    const user = this.users[index];
    this.editForm.setValue({
      name: user.name,
      email: user.email,
      phone: user.phone,
      age: user.age,
      gender: user.gender
    });
  }
 
  cancelEdit(): void {
    this.editIndex = null;
  }

  submitEdit(userId: string): void {
      if (this.editForm.invalid) {
        this.editForm.markAllAsTouched();
        return;
      }

    const updatedUser = this.editForm.value;
    if (this.editIndex === null) return;
    this.users[this.editIndex] = { ...this.users[this.editIndex], ...updatedUser };
    this.editIndex = null;
    this.api.updateUser(userId, updatedUser).subscribe({
      next: () => {
       this.message.success('User Updated Successfully!')
       this.fetchUsers();
 
      },
      error: (err) => {
        console.error(err);
        this.message.error(err.error?.message || 'Failed to update user!');

      }
    });
  }

   
  openDeleteModal(user: any) {
    this.selectedUser = user;
    this.modalService.open(this.deleteModal, {centered: true}); 
  }

   confirmDelete(modal: any) {
    this.api.deleteUser(this.selectedUser._id).subscribe({
      next: () => {
        this.message.success('User Deleted Successfully!')
        this.fetchUsers();
         modal.close();
      },
      error: (err) => { console.error(err)
      this.message.error('Failed to delete user')
      }
    });
  }
   
  refreshUsers(){
    this.fetchUsers();
  }
}
