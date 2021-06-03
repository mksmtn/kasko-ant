import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ru_RU, NZ_I18N } from 'ng-zorro-antd/i18n';

import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzRadioModule,
    NzButtonModule,
    NzInputModule,
    NzCheckboxModule,
    NzDatePickerModule,
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: ru_RU,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
