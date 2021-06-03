import { ChangeDetectionStrategy, Component, NgZone, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

interface Region {
  id: string;
  name: string;
}

const regions: Region[] = [
  'Москва',
  'Калифорния',
  'Тибет',
  'Тайвань',
].map((name, index) => ({id: index.toString(), name}));

enum PolicyType {
  Other = 'other',
  VSK = 'vsk',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  readonly isLoadingRegions$ = new BehaviorSubject(true);
  readonly regions$ = new BehaviorSubject<Region[]>([]);
  readonly PolicyType = PolicyType;

  /**
   * Value is a region's id
   */
  readonly regionControl = new FormControl();
  readonly alreadyHasPolicyControl = new FormControl(false);
  readonly existingPolicyTypeControl = new FormControl(PolicyType.Other);
  readonly isPolicyOpenControl = new FormControl(false);
  readonly driversControl = new FormArray([]);

  readonly form = new FormGroup({
    region: this.regionControl,
    alreadyHasPolicy: this.alreadyHasPolicyControl,
    existingPolicyType: this.existingPolicyTypeControl,
    isPolicyOpen: this.isPolicyOpenControl,
    drivers: this.driversControl,
  });

  constructor(private readonly ngZone: NgZone) {}

  ngOnInit() {
    this.addDriver();
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.isLoadingRegions$.next(false);
        this.regions$.next(regions);
      }, 3000);
    });
  }

  onSearch(query: string) {
    this.regions$.next(regions.filter(r => r.name.toLowerCase().includes(query.toLowerCase())));
  }

  addDriver() {
    const driverControl = new FormGroup({
      birthDate: new FormControl(),
      drivingStartDate: new FormControl(),
      isMarried: new FormControl(false),
    });
    this.driversControl.push(driverControl);
  }
}
