import {it, describe, expect, inject, async}  from '@angular/core/testing';
import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {selectElements, dispatchKeyEvent} from '../../test/helpers';
import {By} from '@angular/platform-browser';
import {NglDatepicker} from './datepicker';

// Microsoft Edge hack
function removeNonPrintable(str: string) {
  return str.replace(/[^\x20-\x7E]+/g, '');
}

function getDayElements(element: HTMLElement): HTMLElement[] {
  return selectElements(element, '.slds-day');
}

function getDayHeaders(element: HTMLElement) {
  return selectElements(element, 'th').map(e => e.textContent.trim()).map(removeNonPrintable);
}

function getYearOptions(element: HTMLElement) {
  return selectElements(element, 'option');
}

function buildArray(start: number, end: number) {
  const arr: string[] = [];
  while (start <= end) {
    arr.push(start++ + '');
  }
  return arr;
}

function chooseYear(element: HTMLElement, year: number) {
  const select = <HTMLSelectElement>element.querySelector('select');
  select.value = '' + year;

  const evt = document.createEvent('HTMLEvents');
  evt.initEvent('change', false, true);
  select.dispatchEvent(evt);
}

function clickButton(element: HTMLElement, isNext = false) {
  const buttons = selectElements(element, 'button');
  buttons[+isNext].click();
}

function dispatchKey(fixture: ComponentFixture<any>, key: string) {
  dispatchKeyEvent(fixture, By.directive(NglDatepicker), `keydown.${key}`);
  fixture.detectChanges();
}

function getTableRows(element: HTMLElement) {
  return selectElements(element, 'tbody > tr');
}

function expectCalendar(element: HTMLElement, expectedDates: any[], expectedMonth: string, expectedYear: string) {
  const dates = getTableRows(element).map((trElement: HTMLElement, row: number) => {
    return selectElements(trElement, 'td').map((td: HTMLElement, column: number) => {
      let text = td.textContent.trim();
      if (td.classList.contains('slds-is-selected')) {
        text = '*' + text;
      }
      if (td.classList.contains('slds-is-today')) {
        text += '+';
      }
      if (td.classList.contains('slds-disabled-text')) {
        text += '-';
      }
      return text;
    });
  });
  expect(dates).toEqual(expectedDates);

  const month = element.querySelector('h2.slds-align-middle').textContent.trim();
  expect(expectedMonth).toEqual(removeNonPrintable(month));

  const year = (<HTMLSelectElement>element.querySelector('select.slds-select')).value;
  expect(expectedYear).toEqual(year);
}

function expectYearOptions(element: HTMLElement, expectedYears: any[]) {
  expect(getYearOptions(element).map((e: HTMLOptionElement) => e.value)).toEqual(expectedYears);
}

describe('`Datepicker` Component', () => {

  it('should render correctly', testAsync((fixture: ComponentFixture<TestComponent>) => {
    const currentDate = new Date(2005, 10, 9); // 9 November 2005
    jasmine.clock().mockDate(currentDate);

    fixture.detectChanges();
    expectCalendar(fixture.nativeElement, [
      ['29-', '30-', '31-', '01', '02', '03', '04'],
      ['05', '06', '07', '08', '09', '10', '11'],
      ['12', '13', '14', '15', '16', '17', '18'],
      ['19', '20', '21', '22', '23', '24', '25'],
      ['26', '27', '28', '29', '*30+', '01-', '02-'],
    ], 'September', '2010');
    expect(getDayHeaders(fixture.nativeElement)).toEqual([ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]);
    expectYearOptions(fixture.nativeElement, buildArray(1905, 2015));

    jasmine.clock().uninstall();
  }));

  it('should change view when input date is changing', testAsync((fixture: ComponentFixture<TestComponent>) => {
    fixture.detectChanges();

    fixture.componentInstance.date = new Date(2013, 7, 11); // 11 August 2013
    fixture.detectChanges();
    expectCalendar(fixture.nativeElement, [
      [ '28-', '29-', '30-', '31-', '01', '02', '03' ],
      [ '04', '05', '06', '07', '08', '09', '10' ],
      [ '*11+', '12', '13', '14', '15', '16', '17' ],
      [ '18', '19', '20', '21', '22', '23', '24' ],
      [ '25', '26', '27', '28', '29', '30', '31' ],
    ], 'August', '2013');

    fixture.componentInstance.date = new Date(2014, 9, 23); // 23 October 2014
    fixture.detectChanges();
    expectCalendar(fixture.nativeElement, [
      [ '28-', '29-', '30-', '01', '02', '03', '04' ],
      [ '05', '06', '07', '08', '09', '10', '11' ],
      [ '12', '13', '14', '15', '16', '17', '18' ],
      [ '19', '20', '21', '22', '*23+', '24', '25' ],
      [ '26', '27', '28', '29', '30', '31', '01-' ],
    ], 'October', '2014');
  }));

  it('does not change current view when model is cleared', testAsync((fixture: ComponentFixture<TestComponent>) => {
    fixture.detectChanges();

    fixture.componentInstance.date = null;
    fixture.detectChanges();
    expectCalendar(fixture.nativeElement, [
      ['29-', '30-', '31-', '01', '02', '03', '04'],
      ['05', '06', '07', '08', '09', '10', '11'],
      ['12', '13', '14', '15', '16', '17', '18'],
      ['19', '20', '21', '22', '23', '24', '25'],
      ['26', '27', '28', '29', '30+', '01-', '02-'],
    ], 'September', '2010');
  }));

  it('should show current date if none is set', testAsync((fixture: ComponentFixture<TestComponent>) => {
    const currentDate = new Date(2013, 7, 11); // 11 August 2013
    jasmine.clock().mockDate(currentDate);

    fixture.componentInstance.date = null;
    fixture.detectChanges();

    expectCalendar(fixture.nativeElement, [
      ['28-', '29-', '30-', '31-', '01', '02', '03'],
      ['04', '05', '06', '07', '08', '09', '10'],
      ['11+', '12', '13', '14', '15', '16', '17'],
      ['18', '19', '20', '21', '22', '23', '24'],
      ['25', '26', '27', '28', '29', '30', '31'],
    ], 'August', '2013');

    jasmine.clock().uninstall();
  }));

  it('updates the model when a day is clicked', testAsync((fixture: ComponentFixture<TestComponent>) => {
    fixture.detectChanges();
    const days = getDayElements(fixture.nativeElement);
    days[25].click();
    expect(fixture.componentInstance.dateChange).toHaveBeenCalledWith(new Date(2010, 8, 23));
  }));

  it('do nothing when a disabled day is clicked', testAsync((fixture: ComponentFixture<TestComponent>) => {
    fixture.detectChanges();
    const days = getDayElements(fixture.nativeElement);
    days[1].click();
    expect(fixture.componentInstance.dateChange).not.toHaveBeenCalled();
  }));

  it('moves to previous month correctly when button is clicked', testAsync((fixture: ComponentFixture<TestComponent>) => {
    fixture.detectChanges();
    clickButton(fixture.nativeElement, false);
    fixture.detectChanges();
    expectCalendar(fixture.nativeElement, [
      ['01', '02', '03', '04', '05', '06', '07'],
      ['08', '09', '10', '11', '12', '13', '14'],
      ['15', '16', '17', '18', '19', '20', '21'],
      ['22', '23', '24', '25', '26', '27', '28'],
      ['29', '30+', '31', '01-', '02-', '03-', '04-'],
    ], 'August', '2010');
    expect(fixture.componentInstance.dateChange).not.toHaveBeenCalled();
  }));

  it('moves to next month correctly when button is clicked', testAsync((fixture: ComponentFixture<TestComponent>) => {
    fixture.detectChanges();
    clickButton(fixture.nativeElement, true);
    fixture.detectChanges();
    expectCalendar(fixture.nativeElement, [
      ['26-', '27-', '28-', '29-', '*30-', '01', '02'],
      ['03', '04', '05', '06', '07', '08', '09'],
      ['10', '11', '12', '13', '14', '15', '16'],
      ['17', '18', '19', '20', '21', '22', '23'],
      ['24', '25', '26', '27', '28', '29', '30+'],
      ['31', '01-', '02-', '03-', '04-', '05-', '06-'],
    ], 'October', '2010');
    expect(fixture.componentInstance.dateChange).not.toHaveBeenCalled();
  }));

  it('should not "jump" months and keep current day in limits', testAsync((fixture: ComponentFixture<TestComponent>) => {
    fixture.componentInstance.date = new Date(2016, 0, 30);
    fixture.detectChanges();
    clickButton(fixture.nativeElement, true);
    fixture.detectChanges();
    expectCalendar(fixture.nativeElement, [
      [ '31-', '01', '02', '03', '04', '05', '06' ],
      [ '07', '08', '09', '10', '11', '12', '13' ],
      [ '14', '15', '16', '17', '18', '19', '20' ],
      [ '21', '22', '23', '24', '25', '26', '27' ],
      [ '28', '29+', '01-', '02-', '03-', '04-', '05-' ],
    ], 'February', '2016');
  }));

  it('moves to selected year from dropdown', testAsync((fixture: ComponentFixture<TestComponent>) => {
    fixture.detectChanges();

    chooseYear(fixture.nativeElement, 2014);
    setTimeout(() => {
      fixture.detectChanges();
      expectCalendar(fixture.nativeElement, [
        [ '31-', '01', '02', '03', '04', '05', '06' ],
        [ '07', '08', '09', '10', '11', '12', '13' ],
        [ '14', '15', '16', '17', '18', '19', '20' ],
        [ '21', '22', '23', '24', '25', '26', '27' ],
        [ '28', '29', '30+', '01-', '02-', '03-', '04-' ],
      ], 'September', '2014');
    });
  }));

  it('should change year range based on selection', testAsync((fixture: ComponentFixture<TestComponent>) => {
    const currentDate = new Date(1983, 10, 7); // 7 November 1983
    jasmine.clock().mockDate(currentDate);

    fixture.detectChanges();
    expectYearOptions(fixture.nativeElement, buildArray(1883, 2010));

    jasmine.clock().uninstall();
  }));

  describe('keyboard navigation', () => {

    it('will be able to activate appropriate day', testAsync((fixture: ComponentFixture<TestComponent>) => {
      fixture.detectChanges();

      dispatchKey(fixture, 'ArrowDown');
      expectCalendar(fixture.nativeElement, [
        ['26-', '27-', '28-', '29-', '*30-', '01', '02'],
        ['03', '04', '05', '06', '07+', '08', '09'],
        ['10', '11', '12', '13', '14', '15', '16'],
        ['17', '18', '19', '20', '21', '22', '23'],
        ['24', '25', '26', '27', '28', '29', '30'],
        ['31', '01-', '02-', '03-', '04-', '05-', '06-'],
      ], 'October', '2010');

      dispatchKey(fixture, 'ArrowLeft');
      dispatchKey(fixture, 'ArrowLeft');
      expectCalendar(fixture.nativeElement, [
        ['26-', '27-', '28-', '29-', '*30-', '01', '02'],
        ['03', '04', '05+', '06', '07', '08', '09'],
        ['10', '11', '12', '13', '14', '15', '16'],
        ['17', '18', '19', '20', '21', '22', '23'],
        ['24', '25', '26', '27', '28', '29', '30'],
        ['31', '01-', '02-', '03-', '04-', '05-', '06-'],
      ], 'October', '2010');

      dispatchKey(fixture, 'ArrowUp');
      expectCalendar(fixture.nativeElement, [
        ['29-', '30-', '31-', '01', '02', '03', '04'],
        ['05', '06', '07', '08', '09', '10', '11'],
        ['12', '13', '14', '15', '16', '17', '18'],
        ['19', '20', '21', '22', '23', '24', '25'],
        ['26', '27', '28+', '29', '*30', '01-', '02-'],
      ], 'September', '2010');

      dispatchKey(fixture, 'ArrowRight');
      expectCalendar(fixture.nativeElement, [
        ['29-', '30-', '31-', '01', '02', '03', '04'],
        ['05', '06', '07', '08', '09', '10', '11'],
        ['12', '13', '14', '15', '16', '17', '18'],
        ['19', '20', '21', '22', '23', '24', '25'],
        ['26', '27', '28', '29+', '*30', '01-', '02-'],
      ], 'September', '2010');
    }));

    it('will be able to activate appropriate edge day', testAsync((fixture: ComponentFixture<TestComponent>) => {
      fixture.detectChanges();

      dispatchKey(fixture, 'Home');
      expectCalendar(fixture.nativeElement, [
        ['29-', '30-', '31-', '01+', '02', '03', '04'],
        ['05', '06', '07', '08', '09', '10', '11'],
        ['12', '13', '14', '15', '16', '17', '18'],
        ['19', '20', '21', '22', '23', '24', '25'],
        ['26', '27', '28', '29', '*30', '01-', '02-'],
      ], 'September', '2010');

      dispatchKey(fixture, 'End');
      expectCalendar(fixture.nativeElement, [
        ['29-', '30-', '31-', '01', '02', '03', '04'],
        ['05', '06', '07', '08', '09', '10', '11'],
        ['12', '13', '14', '15', '16', '17', '18'],
        ['19', '20', '21', '22', '23', '24', '25'],
        ['26', '27', '28', '29', '*30+', '01-', '02-'],
      ], 'September', '2010');
    }));

    it('will be able to select active day', testAsync((fixture: ComponentFixture<TestComponent>) => {
      fixture.detectChanges();

      dispatchKey(fixture, 'ArrowDown');
      dispatchKey(fixture, 'ArrowLeft');
      dispatchKey(fixture, 'ArrowLeft');
      expect(fixture.componentInstance.dateChange).not.toHaveBeenCalled();
      dispatchKey(fixture, 'Enter');
      expect(fixture.componentInstance.dateChange).toHaveBeenCalledWith(new Date(2010, 9, 5));
    }));
  });

  it('should render `Today` based on input', testAsync((fixture: ComponentFixture<TestComponent>) => {
    const currentDate = new Date(2014, 9, 23); // 23 October 2014
    jasmine.clock().mockDate(currentDate);

    fixture.componentInstance.showToday = true;
    fixture.detectChanges();
    let rows = getTableRows(fixture.nativeElement);
    expect(rows.length).toBe(6);

    const todayEl = <HTMLAnchorElement>rows[5].querySelector('a');
    expect(fixture.componentInstance.dateChange).not.toHaveBeenCalled();
    todayEl.click();
    expect(fixture.componentInstance.dateChange).toHaveBeenCalledWith(currentDate);

    fixture.componentInstance.showToday = false;
    fixture.detectChanges();
    expect(getTableRows(fixture.nativeElement).length).toBe(5);

    jasmine.clock().uninstall();
  }, `<ngl-datepicker [date]="date" (dateChange)="dateChange($event)" [showToday]="showToday"></ngl-datepicker>`));
});


// Shortcut function for less boilerplate on each `it`
function testAsync(fn: (value: ComponentFixture<TestComponent>) => void, html: string = null) {
  return async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    if (html) {
      tcb = tcb.overrideTemplate(TestComponent, html);
    }
    return tcb.createAsync(TestComponent).then(fn);
  }));
}

@Component({
  directives: [NglDatepicker],
  template: `<ngl-datepicker [date]="date" (dateChange)="dateChange($event)" showToday="false"></ngl-datepicker>`,
})
export class TestComponent {
  date = new Date(2010, 8, 30); // 30 September 2010
  dateChange = jasmine.createSpy('dateChange');
}
