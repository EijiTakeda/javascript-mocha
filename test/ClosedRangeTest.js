const assert = require('assert');

const ClosedRange = require('../lib/closedRange');

describe('ClosedRangeテスト', () => {
  let rangeObj;

  beforeEach(() => {
    rangeObj = new ClosedRange();
  });

  describe('#isGeneratedInstance()', () => {
    it('インスタンスが生成されていること', () => {
      //TODO: あとで型判定いれたいな
      assert(rangeObj !== null);
    });
    it('下端点が設定さえていること', () => {
        assert(rangeObj.upperEndpoint === 1);
    });
  });
});
