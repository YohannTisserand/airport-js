'use strict';

describe('Weather', () => {
  let weather;
  beforeEach(() => {
    weather = new Weather();
  });
  it('gives stormy conditions', () => {
    spyOn(Math,'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });
  it('gives not stormy conditions', () => {
    spyOn(Math,'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });
});