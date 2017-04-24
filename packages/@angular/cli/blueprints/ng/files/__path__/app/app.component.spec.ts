import { TestBed, async } from '@angular/core/testing';<% if (routing) { %>
import { RouterTestingModule } from '@angular/router/testing';<% } %><% if (animation) { %>
import { NoopAnimationsModule } from '@angular/platform-browser/animations';<% } %>

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({<% if (routing && animation) { %>
      imports: [
        RouterTestingModule,
        NoopAnimationsModule
      ],<% } %><% if (routing && !animation) { %>
      imports: [
        RouterTestingModule
      ],<% } %><% if (animation && !routing) { %>
      imports: [
        NoopAnimationsModule
      ],<% } %>
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title '<%= prefix %>'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('<%= prefix %>');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to <%= prefix %>!!');
  }));
});
