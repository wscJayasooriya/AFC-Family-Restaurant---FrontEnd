import { Pipe, PipeTransform } from '@angular/core';
import {Meal} from '../dtos/meal';

@Pipe({
  name: 'mealFilter'
})
export class MealFilterPipe implements PipeTransform {

  transform(meals: Meal[], searchTerm?: string): Meal[] {
    if (!meals || !searchTerm) {
      return meals;
    }
    return meals.filter(meal =>
      meal.category.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
