import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatelogin2Component } from './updatelogin3.component';

describe('Updatelogin2Component', () => {
  let component: Updatelogin2Component;
  let fixture: ComponentFixture<Updatelogin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Updatelogin2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatelogin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
