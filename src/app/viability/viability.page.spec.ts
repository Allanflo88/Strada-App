import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViabilityPage } from './viability.page';

describe('ViabilityPage', () => {
  let component: ViabilityPage;
  let fixture: ComponentFixture<ViabilityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViabilityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
