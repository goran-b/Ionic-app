import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MalfPage } from './malf.page';

describe('MalfPage', () => {
  let component: MalfPage;
  let fixture: ComponentFixture<MalfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MalfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
