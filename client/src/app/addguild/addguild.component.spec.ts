import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddguildComponent } from './addguild.component';

describe('AddguildComponent', () => {
  let component: AddguildComponent;
  let fixture: ComponentFixture<AddguildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddguildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddguildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
