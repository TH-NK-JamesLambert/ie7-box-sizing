// Generated by CoffeeScript 1.3.3

$(document).ready(function() {
  return $('*').each(function() {
    var borderLeft, borderRight, paddingLeft, paddingRight, result, width, _this;
    if (_this.css('box-sizing') === "border-box") {
      _this = $(this);
      paddingLeft = parseInt(_this.css('padding-left'), 10);
      paddingRight = parseInt(_this.css('padding-right'), 10);
      borderLeft = parseInt(_this.css('border-left'), 10);
      borderRight = parseInt(_this.css('border-right'), 10);
      width = parseInt(_this.css('width'), 10);
      paddingLeft = isNaN(paddingLeft) ? 0 : paddingLeft;
      paddingRight = isNaN(paddingRight) ? 0 : paddingRight;
      borderLeft = isNaN(borderLeft) ? 0 : borderLeft;
      borderRight = isNaN(borderRight) ? 0 : borderRight;
      width = isNaN(width) ? 0 : width;
      result = width - paddingLeft - paddingRight - borderLeft - borderRight - 1;
      return _this.css({
        'box-sizing': 'content-box',
        'width': result,
        'padding-left': paddingLeft,
        'padding-right': paddingRight
      });
    }
  });
});
