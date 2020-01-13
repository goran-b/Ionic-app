import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LastMalfComponent } from './last-malf.component';

describe('LastMalfComponent', () => {
  let component: LastMalfComponent;
  let fixture: ComponentFixture<LastMalfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastMalfComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LastMalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
