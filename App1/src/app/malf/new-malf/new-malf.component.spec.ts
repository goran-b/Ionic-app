import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewMalfComponent } from './new-malf.component';

describe('NewMalfComponent', () => {
  let component: NewMalfComponent;
  let fixture: ComponentFixture<NewMalfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMalfComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewMalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
