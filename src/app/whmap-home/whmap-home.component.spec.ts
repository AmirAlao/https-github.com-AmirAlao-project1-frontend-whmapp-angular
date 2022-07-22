import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhmapHomeComponent } from './whmap-home.component';

describe('WhmapHomeComponent', () => {
  let component: WhmapHomeComponent;
  let fixture: ComponentFixture<WhmapHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhmapHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhmapHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
