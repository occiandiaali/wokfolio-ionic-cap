import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WokasGridComponent } from './wokas-grid.component';

describe('WokasGridComponent', () => {
  let component: WokasGridComponent;
  let fixture: ComponentFixture<WokasGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WokasGridComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WokasGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
