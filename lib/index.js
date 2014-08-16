var utils = require('utils');

/**
 * Html2Article Options Object.
 * @type {Object}
 */
var defaultOptions = {
  appendMode: false,
  depth: 6,
  limitCount: 180,
  headEmptyLines: 2,
  endLimitCharCount: 20
}

function Html2Article(options) {
  this.options = utils.extend(defaultOptions, options);
}

Html2Article.prototype.getArticle = function(html) {
  html = this.expandHtml(html);
};

Html2Article.prototype.expandHtml = function(html) {
  var lineCount = 0;
  for (var i = html.length - 1; i >= 0; i--) {
    if (html[i] == '\n') {
      lineCount++;
    }
    if (lineCount >= 10) {
      break;
    }
  };

  if (lineCount < 10) {
    html = html.replace('>', '>\n');
  }

  return html;
};

Html2Article.prototype.cleanBody = function(html) {
  var body = html.match(/<body.*?<\/body>/img)
};

module.exports = Html2Article;