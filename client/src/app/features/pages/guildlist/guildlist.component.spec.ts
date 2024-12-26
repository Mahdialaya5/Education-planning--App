import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildlistComponent } from './guildlist.component';

describe('GuildlistComponent', () => {
  let component: GuildlistComponent;
  let fixture: ComponentFixture<GuildlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuildlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
