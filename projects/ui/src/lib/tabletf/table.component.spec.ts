import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponenttf } from './table.component';

describe('TableComponent', () => {
  let component: TableComponenttf;
  let fixture: ComponentFixture<TableComponenttf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponenttf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponenttf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
