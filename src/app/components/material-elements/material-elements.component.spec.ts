import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialElementsComponent } from './material-elements.component';

describe('MaterialElementsComponent', () => {
  let component: MaterialElementsComponent;
  let fixture: ComponentFixture<MaterialElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
