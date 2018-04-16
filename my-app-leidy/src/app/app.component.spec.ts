import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GraficoTestComponent } from './grafico-test/grafico-test.component';

import { NvD3Module } from 'ng2-nvd3';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GraficoTestComponent
      ],
      imports: [NvD3Module],
    }).compileComponents();
  }));
  it('should create the Grafico de Prueba', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Grafico de Prueba'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Grafico de Prueba');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Grafico de Prueba!');
  }));
});
