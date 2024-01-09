import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees!: Employee[];

  constructor(private EmployeeService:EmployeeService,private Router:Router){}

  ngOnInit(): void {

    this.getEmployees();

    console.log('rhsdgn',this.getEmployees());
    
  }

  private getEmployees(){
    this.EmployeeService.getEmployeesList().subscribe(data=>{
      this.employees=data;
    });
  }

  updateEmployee(id:number){
    this.Router.navigate(['update-employee',id]);
  }
}
