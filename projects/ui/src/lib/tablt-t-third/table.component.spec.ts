import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableThridComponent } from './table.component';

describe('TableThridComponent', () => {
  let component: TableThridComponent;
  let fixture: ComponentFixture<TableThridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableThridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableThridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
