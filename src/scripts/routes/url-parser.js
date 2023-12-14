const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      name: urlsSplits[2] || null,
      regional: urlsSplits[3] || null,
      id: urlsSplits[4] || null,
      verb: urlsSplits[5] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    console.log(splitedUrl);
    return (
      (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') +
      (splitedUrl.name ? '/:name' : '') +
      (splitedUrl.regional ? '/:regional' : '') +
      (splitedUrl.id ? '/:id' : '') +
      (splitedUrl.verb ? `/${splitedUrl.verb}` : '')
    );
  },
};

export default UrlParser;
