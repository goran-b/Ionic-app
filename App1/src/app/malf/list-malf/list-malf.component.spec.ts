import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListMalfComponent } from './list-malf.component';

describe('ListMalfComponent', () => {
  let component: ListMalfComponent;
  let fixture: ComponentFixture<ListMalfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMalfComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListMalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
