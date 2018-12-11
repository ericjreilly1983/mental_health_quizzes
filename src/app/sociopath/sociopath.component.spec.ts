import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SociopathComponent } from './sociopath.component';

describe('SociopathComponent', () => {
  let component: SociopathComponent;
  let fixture: ComponentFixture<SociopathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SociopathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SociopathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
