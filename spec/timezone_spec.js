var timezone = require("../nodejs-timezone/lib/timezone");

describe("timezone.convert()", function() {

  it("valid params", function() {

    timezone.convert(
      'never', 'UTC', 'America/New_York',
      function(errors, result) {
        var expected = {
          'date': 'Must be a valid date'
        }
        expect(errors).toEqual(expected);
        expect(result).toEqual(null);
      }
    );

    timezone.convert(
      '2001-01-01T00:00', 'foo', 'America/New_York',
      function(errors, result) {
        var expected = {
          'from_tz': 'Must be a valid olson timezone name'
        }
        expect(errors).toEqual(expected);
        expect(result).toEqual(null);
      });

    timezone.convert(
      '2001-01-01T00:00', 'UTC', 'bar',
      function(errors, result) {
        var expected = {
          'to_tz': 'Must be a valid olson timezone name'
        }
        expect(errors).toEqual(expected);
        expect(result).toEqual(null);
      });
  });

  it("expected result", function() {
    timezone.convert(
      '2001-01-01T00:00', 'America/New_York', 'UTC',
      function(errors, result) {
        expect(errors).toEqual(false);
        expect(result).toEqual('2001-01-01T05:00:00+00:00');
      });

    timezone.convert(
      '2001-01-01T00:00', 'US/Alaska', 'America/Regina',
      function(errors, result) {
        expect(errors).toEqual(false);
        expect(result).toEqual('2001-01-01T03:00:00-06:00');
      });
  });

  it("timezone list", function() {
    expect(timezone.list).toContain('Canada/Eastern');
    expect(timezone.list).toContain('Pacific/Pago_Pago');
  });


});
