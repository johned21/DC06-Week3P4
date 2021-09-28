import { StudentService } from '../student.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students;
  output:any;

  constructor(service: StudentService) {
    this.students = service.getStudents()
    this.output = service.getStudents()
  }

//colleges
  showCAST(){
    this.output = this.students
    this.output = this.students.filter(student => student.college === 'CAST')
  }

  showCON(){
    this.output = this.students
    this.output = this.students.filter(student => student.college === 'CON')
  }

  showCOE(){
    this.output = this.students
    this.output = this.students.filter(student => student.college === 'COE')
  }

  showCCJ(){
    this.output = this.students
    this.output = this.students.filter(student => student.college === 'CCJ')
  }

  showCABMB(){
    this.output = this.students
    this.output = this.students.filter(student => student.college === 'CABM-B')
  }

  showCABMH(){
    this.output = this.students
    this.output = this.students.filter(student => student.college === 'CABM-H')
  }


//gender
  showFemale(){
    this.output = this.students
    this.output = this.students.filter(student => student.gender === 'Female')
  }

  showMale(){
    this.output = this.students
    this.output = this.students.filter(student => student.gender === 'Male')
  }

  showAll(){
    this.output = this.students
  }

  ngOnInit(): void {
   
  }

}
