import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MealService} from '../../services/meal.service';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../../dtos/employee';
import {NgForm} from '@angular/forms';
import {Meal} from '../../dtos/meal';
import swal from 'sweetalert2';
import {FileService} from '../../services/file.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  meals: Array<Meal> = [];
  selectedMeal: Meal = new Meal();
  tempMeal: Meal = null;
  manuallySelected: boolean ;
  @ViewChild('frmEmployee') frmEmployee: NgForm;
  @ViewChild('fileInput') inputEl: ElementRef;

  size: string;

  constructor(private mealService: MealService, private http: HttpClient, private fileService: FileService) { }

  ngOnInit() {
    this.loadAllMeals();
  }

  loadAllMeals(): void {
    this.mealService.getAllMeals().subscribe(
      (result) => {
        this.meals = result;
        for (let i = 0; i < this.meals.length; i++) {
          this.meals[i].imageURL = this.mealService.getImage(this.meals[i].imageURL);
        }
          console.log(this.meals);
      }
    );
  }

  selectMeal(meal: Meal): void {
    this.clear();
    this.selectedMeal = meal;
    this.tempMeal = Object.assign({}, meal);
    this.manuallySelected = true;
  }

  clear(): void {
    const index = this.meals.indexOf(this.selectedMeal);
    if (index !== -1) {
      this.meals[index] = this.tempMeal;
      this.tempMeal = null;
    }
    this.selectedMeal = new Meal();
    this.manuallySelected = false;
  }

  deleteMeal(meal: Meal): void {
    if (confirm('Are you sure ? Remove this Employee')) {
      this.mealService.deleteMeal(meal.mealCode).subscribe(
        (result) => {
          if (result) {
            swal({
              position: 'center',
              type: 'success',
              title: 'This Meal has been Deleted',
              showConfirmButton: false,
              timer: 1500
            });
            this.clear();
            this.loadAllMeals();
          } else {
            swal({
              position: 'center',
              type: 'error',
              title: 'Deleted Failed !',
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
      );
    }
  }

  upload() {
    console.log('upload');
    const inputEl: HTMLInputElement = this.inputEl.nativeElement;
    const fileCount: number = inputEl.files.length;
    const formData = new FormData();
    if (fileCount > 0) { // a file was selected
      const meal: Meal = new Meal();
      formData.append('file', inputEl.files.item(0), inputEl.files.item(0).name);
      this.size = (inputEl.files.item(0).size / 1024 / 1024).toFixed(2);
      this.fileService.uploadFile(formData);

      this.selectedMeal.imageURL = inputEl.files.item(0).name; // database imageurl column ekata image name eka set karana thana
      console.log(this.selectedMeal);
      this.mealService.saveMeal(this.selectedMeal).subscribe(
        (result) => {
          if (result) {
            this.meals = new Array();
            this.loadAllMeals();
            swal('Congrats!', 'You Sussefully Add Item To Database!', 'success');
            this.clear();
          } else {

          }
        }
      );
    }
  }

}
