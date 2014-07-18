/*
 * jQuery UI Datepicker 1.11.0
 *
 * The format can be combinations of the following:
 * d  - day of month (no leading zero)
 * dd - day of month (two digit)
 * o  - day of year (no leading zeros)
 * oo - day of year (three digit)
 * D  - day name short
 * DD - day name long
 * m  - month of year (no leading zero)
 * mm - month of year (two digit)
 * M  - month name short
 * MM - month name long
 * y  - year (two digit)
 * yy - year (four digit)
 * @ - Unix timestamp (ms since 01/01/1970)
 * ! - Windows ticks (100ns since 01/01/0001)
 * "..." - literal text
 * '' - single quote
 */

/*
 * Globalize 1.0.0-alpha-4
 * uses Unicode CLDR format (http://cldr.unicode.org/translation/date-time)
 *
 * d    - day of month (no leading zero)
 * dd   - day of month (two digit)
 * EEE  - day name short
 * EEEE - day name long
 * M    - month of year (no leading zero)
 * MM   - month of year (two digit)
 * MMM  - month name short
 * MMMM - month name long
 * yy   - year (two digit)
 * yyyy - year (four digit)
 */

$.fn.datepicker.cldr = {
  /*
   * e.g. 7/4/2000 (July 4, 2000)
   * in CLDR format: 'M/d/yyyy'
   * in jQuery format: 'm/d/yy'
   *
   * @param  date format pattern in CLDR syntax
   * @return date format pattern in jQuery syntax
   */
  getDateFormat: function (cldrDateFormat) {
    return cldrDateFormat.replace(/[EMy]+/g, function (match) {
      var jquerySyntax = {
        'EEE' : 'D',
        'EEEE': 'DD',
        'M'   : 'm',
        'MM'  : 'mm',
        'MMM' : 'M',
        'MMMM': 'MM',
        'yy'  : 'y',
        'yyyy': 'yy',
      };
      return jquerySyntax[match] ? jquerySyntax[match] : match;
    });
  }
};