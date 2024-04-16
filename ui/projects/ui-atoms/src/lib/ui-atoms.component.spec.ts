import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAtomsComponent } from './ui-atoms.component';

describe('UiAtomsComponent', () => {
  let component: UiAtomsComponent;
  let fixture: ComponentFixture<UiAtomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiAtomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiAtomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
