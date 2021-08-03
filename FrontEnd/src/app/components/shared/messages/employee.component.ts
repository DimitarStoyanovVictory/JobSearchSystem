import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/services/shared/employee/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  private _citiesAll: string[] = ['Айтос', 'Асеновград', 'Ахтопол', 'Балчик', 'Банкя', 'Банско', 'Батак', 'Белене', 'Белица', 'Белослав', 'Берковица', 'Битоля', 'Благоевград', 'Ботевград', 'Брацигово', 'Брезник', 'Бургас', 'Бяла', 'Варна', 'Велес', 'Велики Преслав', 'Велико Търново', 'Велинград', 'Видин', 'Враца', 'Вършец', 'Габрово', 'Гевгели', 'Горна Оряховица', 'Гоце Делчев', 'Гюмюрджина', 'Дедеагач', 'Демир Хисар', 'Димитровград', 'Добрич', 'Дойран', 'Долна Баня', 'Долна Оряховица', 'Долни Дъбник', 'Драма', 'Дупница', 'Елена', 'Исперих', 'Ихтиман', 'Кавала', 'Каварна', 'Казанлък', 'Калофер', 'Карлово', 'Карнобат', 'Кешан', 'Китен', 'Козлодуй', 'Копривщица', 'Костенец', 'Костур', 'Котел', 'Кресна', 'Крушево', 'Ксанти', 'Кукуш', 'Кърджали', 'Кюстендил', 'Лерин', 'Ловеч', 'Лозенград', 'Лом', 'Люле Бургас', 'Мадан', 'Мелник', 'Момчилград', 'Монтана', 'Несебър', 'Никопол', 'Ниш', 'Нова Загора', 'Обзор', 'Одрин', 'Оряхово', 'Охрид', 'Павликени', 'Пазарджик', 'Панагюрище', 'Перник', 'Перущица', 'Петрич', 'Пещера', 'Пирдоп', 'Плевен', 'Пловдив', 'Поморие', 'Попово', 'Пордим', 'Правец', 'Прилеп', 'Приморско','Провадия', 'Първомай', 'Радомир', 'Разград', 'Разлог', 'Русе', 'Самоков', 'Сандански', 'Свиленград', 'Свищов', 'Своге', 'Севлиево', 'Серес', 'Силистра', 'Симеоновград', 'Скопие', 'Сливен', 'Смолян', 'Созопол', 'Солун', 'Сопот', 'София', 'Стара Загора', 'Стражица', 'Струга', 'Струмица', 'Тетово', 'Тополовград', 'Троян', 'Трън', 'Тулча', 'Тутракан', 'Търговище', 'Харманли', 'Хасково', 'Хисар', 'Царево', 'Цариброд', 'Цариград', 'Чаталджа', 'Чепеларе', 'Червен бряг', 'Чирпан', 'Чорлу', 'Шумен', 'Щип', 'Якоруда','Ямбол'];
  
  selectedCity: string;
  citiesFiltered: string[] = this._citiesAll;
  citiesSearch: string[] = [];
  showDropDownCities : boolean = false;
  minLengthError: boolean = false;
  maxLengthError: boolean = false;
  maxEmployeeNameLength: boolean = false;
  maxEmailLength: boolean = false;
  maxCityLength: boolean = false;

  employeeForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      phone: [''],
      employeeName: [''],
      email: [''],
      currentCity: ['']
    });

    this.employeeForm.controls.currentCity.valueChanges.subscribe(x => {
      this.citiesFiltered = this.filterCities(x);
    });

    this.phone.valueChanges.subscribe(x => {
      if ((x + '').length < 7 && this.phone.valid) {
        this.minLengthError = true;
        this.maxLengthError = false;
        document.getElementById('phoneText').classList.add('is-invalid');
      } else if ((x + '').length > 20 && this.phone.valid) {
        this.minLengthError = false;
        this.maxLengthError = true;
        document.getElementById('phoneText').classList.add('is-invalid');
      } else {
        this.minLengthError = false;
        this.maxLengthError = false;
        document.getElementById('phoneText').classList.remove('is-invalid');
      }
    });

    this.employeeForm.controls.employeeName.valueChanges.subscribe(x => {
      if (x.length > 30) {
        this.maxEmployeeNameLength = true;
        document.getElementById('employeeText').classList.add('is-invalid');
      } else {
        this.maxEmployeeNameLength = false;
        document.getElementById('employeeText').classList.remove('is-invalid');
      }
    });

    this.employeeForm.controls.email.valueChanges.subscribe(x => {
      if (x.length > 30) {
        this.maxEmailLength = true;
        document.getElementById('emailText').classList.add('is-invalid');
      } else {
        this.maxEmailLength = false;
        document.getElementById('emailText').classList.remove('is-invalid');
      }
    });

    this.employeeForm.controls.currentCity.valueChanges.subscribe(x => {
      if (x.length > 30) {
        this.maxCityLength = true;
        document.getElementById('cityText').classList.add('is-invalid');
      } else {
        this.maxCityLength = false;
        document.getElementById('cityText').classList.remove('is-invalid');
      }
    });
  }

  get phone() { return this.employeeForm.controls.phone; }

  private filterCities(cityName: string): string[] {
    return this._citiesAll.filter(city => city.toLocaleLowerCase().indexOf(cityName.toLocaleLowerCase()) !== -1);
  }

  isSubmitButtonActive() : boolean {
    if (this.phone.valid && !this.minLengthError && !this.maxLengthError) {
      return false;
    } else {
      return true;
    }
  }

  isAddCityButtonActive() : boolean {
    if (this.citiesSearch.length > 6) {
      return true;
    } else {
      return false;
    }
  }

  addCity(cityName: string) {
    if (cityName.replace(' ', '') != '' && this.citiesSearch.length < 7) {
      this.citiesSearch.push(cityName);
      this.employeeForm.controls.currentCity.setValue('');

      const index = this._citiesAll.indexOf(cityName, 0);
      if (index > -1) {
        this._citiesAll.splice(index, 1);
      } 

      this.citiesFiltered = this._citiesAll;
    }
  }
  
  removeCity(cityName: string) {
    const index = this.citiesSearch.indexOf(cityName, 0);
    this.citiesSearch.splice(index, 1);
    this._citiesAll.push(cityName);
    this._citiesAll.sort((a, b) => a.localeCompare(b));
    this.citiesFiltered = this._citiesAll;
  }

  toggleDropDownCities() {
    this.citiesFiltered = this._citiesAll;
    this.showDropDownCities = !this.showDropDownCities;
  }

  selectCity(selectedCity: string) {
    this.toggleDropDownCities();
    this.addCity(selectedCity);
  }

  employeeSubmit() {
    let employee = {
      "Phone": String(this.employeeForm.value.phone),
      "EmployeeName":  String(this.employeeForm.value.employeeName),
      "Email": String(this.employeeForm.value.email),
      "CitiesSearch": this.citiesSearch.join(', ')
    };

    this.employeeService.insertEmployee(employee).subscribe(
      (data) => {
        this.router.navigate(['/success']);
      },
      (error: any) => { 
        this.router.navigate(['/error']);
      }
    );
  }
}