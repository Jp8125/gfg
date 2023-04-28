import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcribedCourcesComponent } from './subcribed-cources.component';

describe('SubcribedCourcesComponent', () => {
  let component: SubcribedCourcesComponent;
  let fixture: ComponentFixture<SubcribedCourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcribedCourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcribedCourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
