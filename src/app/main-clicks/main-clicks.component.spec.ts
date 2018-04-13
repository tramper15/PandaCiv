import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainClicksComponent } from './main-clicks.component';

describe('MainClicksComponent', () => {
  let component: MainClicksComponent;
  let fixture: ComponentFixture<MainClicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainClicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
