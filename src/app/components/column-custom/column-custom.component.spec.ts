import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnCustomComponent } from './column-custom.component';

describe('ColumnCustomComponent', () => {
  let component: ColumnCustomComponent;
  let fixture: ComponentFixture<ColumnCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumnCustomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
