import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from 'src/app/services/shared/company/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {
  private _citiesAll: string[] = ['Айтос', 'Асеновград', 'Ахтопол', 'Балчик', 'Банкя', 'Банско', 'Батак', 'Белене', 'Белица', 'Белослав', 'Берковица', 'Битоля', 'Благоевград', 'Ботевград', 'Брацигово', 'Брезник', 'Бургас', 'Бяла', 'Варна', 'Велес', 'Велики Преслав', 'Велико Търново', 'Велинград', 'Видин', 'Враца', 'Вършец', 'Габрово', 'Гевгели', 'Горна Оряховица', 'Гоце Делчев', 'Гюмюрджина', 'Дедеагач', 'Демир Хисар', 'Димитровград', 'Добрич', 'Дойран', 'Долна Баня', 'Долна Оряховица', 'Долни Дъбник', 'Драма', 'Дупница', 'Елена', 'Исперих', 'Ихтиман', 'Кавала', 'Каварна', 'Казанлък', 'Калофер', 'Карлово', 'Карнобат', 'Кешан', 'Китен', 'Козлодуй', 'Копривщица', 'Костенец', 'Костур', 'Котел', 'Кресна', 'Крушево', 'Ксанти', 'Кукуш', 'Кърджали', 'Кюстендил', 'Лерин', 'Ловеч', 'Лозенград', 'Лом', 'Люле Бургас', 'Мадан', 'Мелник', 'Момчилград', 'Монтана', 'Несебър', 'Никопол', 'Ниш', 'Нова Загора', 'Обзор', 'Одрин', 'Оряхово', 'Охрид', 'Павликени', 'Пазарджик', 'Панагюрище', 'Перник', 'Перущица', 'Петрич', 'Пещера', 'Пирдоп', 'Плевен', 'Пловдив', 'Поморие', 'Попово', 'Пордим', 'Правец', 'Прилеп', 'Приморско','Провадия', 'Първомай', 'Радомир', 'Разград', 'Разлог', 'Русе', 'Самоков', 'Сандански', 'Свиленград', 'Свищов', 'Своге', 'Севлиево', 'Серес', 'Силистра', 'Симеоновград', 'Скопие', 'Сливен', 'Смолян', 'Созопол', 'Солун', 'Сопот', 'София', 'Стара Загора', 'Стражица', 'Струга', 'Струмица', 'Тетово', 'Тополовград', 'Троян', 'Трън', 'Тулча', 'Тутракан', 'Търговище', 'Харманли', 'Хасково', 'Хисар', 'Царево', 'Цариброд', 'Цариград', 'Чаталджа', 'Чепеларе', 'Червен бряг', 'Чирпан', 'Чорлу', 'Шумен', 'Щип', 'Якоруда','Ямбол'];
  
  selectedCity: string;
  citiesFiltered: string[] = this._citiesAll;
  citiesSearch: string[] = [];
  showDropDownCities : boolean = false;
  minPhoneLengthError: boolean = false;
  maxPhoneLengthError: boolean = false;
  maxCompanyNameLength: boolean = false;
  maxEmailLength: boolean = false;
  maxCityLength: boolean = false;

  companyForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private companyService: CompanyService, private router: Router) { }
  
  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      phone: [''],
      companyName: [''],
      email: [''],
      currentCity: ['']
    });

    this.companyForm.controls.currentCity.valueChanges.subscribe(x => {
      this.citiesFiltered = this.filterCities(x);
    });

    this.phone.valueChanges.subscribe(x => {
      if ((x + '').length < 7 && this.phone.valid) {
        this.minPhoneLengthError = true;
        this.maxPhoneLengthError = false;
        document.getElementById('phoneText').classList.add('is-invalid');
      } else if ((x + '').length > 20 && this.phone.valid) {
        this.minPhoneLengthError = false;
        this.maxPhoneLengthError = true;
        document.getElementById('phoneText').classList.add('is-invalid');
      } else {
        this.minPhoneLengthError = false;
        this.maxPhoneLengthError = false;
        document.getElementById('phoneText').classList.remove('is-invalid');
      }
    });

    this.companyForm.controls.companyName.valueChanges.subscribe(x => {
      if (x.length > 30) {
        this.maxCompanyNameLength = true;
        document.getElementById('companyText').classList.add('is-invalid');
      } else {
        this.maxCompanyNameLength = false;
        document.getElementById('companyText').classList.remove('is-invalid');
      }
    });

    this.companyForm.controls.email.valueChanges.subscribe(x => {
      if (x.length > 30) {
        this.maxEmailLength = true;
        document.getElementById('emailText').classList.add('is-invalid');
      } else {
        this.maxEmailLength = false;
        document.getElementById('emailText').classList.remove('is-invalid');
      }
    });

    this.companyForm.controls.currentCity.valueChanges.subscribe(x => {
      if (x.length > 30) {
        this.maxCityLength = true;
        document.getElementById('cityText').classList.add('is-invalid');
      } else {
        this.maxCityLength = false;
        document.getElementById('cityText').classList.remove('is-invalid');
      }
    });
  }

  get phone() { return this.companyForm.controls.phone; }

  private filterCities(cityName: string): string[] {
    return this._citiesAll.filter(city => city.toLocaleLowerCase().indexOf(cityName.toLocaleLowerCase()) !== -1);
  }

  isAddCityButtonActive() : boolean {
    if (this.citiesSearch.length > 6) {
      return true;
    } else {
      return false;
    }
  }

  isSubmitButtonActive() : boolean {
    if (this.phone.valid && !this.minPhoneLengthError && !this.maxPhoneLengthError) {
      return false;
    } else {
      return true;
    }
  }

  addCity(cityName: string) {
    if (cityName.replace(' ', '') != '' && this.citiesSearch.length < 7) {
      this.citiesSearch.push(cityName);
      this.companyForm.controls.currentCity.setValue('');
  
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

  companySubmit() {
    let company = {
      "Phone": String(this.companyForm.value.phone),
      "CompanyName": String(this.companyForm.value.companyName),
      "Email": String(this.companyForm.value.email),
      "CitiesSearch": this.citiesSearch.join(', ')
    };

    this.companyService.insertCompany(company).subscribe(
      (data) => {
        this.router.navigate(['/success']);
      },
      (error: any) => { 
        this.router.navigate(['/error']);
      }
    );
  }
}