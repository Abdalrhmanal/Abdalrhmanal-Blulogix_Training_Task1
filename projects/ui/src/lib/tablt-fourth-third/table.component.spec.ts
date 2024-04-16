import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFourthComponent } from './table.component';

describe('TableThridComponent', () => {
  let component: TableFourthComponent;
  let fixture: ComponentFixture<TableFourthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFourthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
