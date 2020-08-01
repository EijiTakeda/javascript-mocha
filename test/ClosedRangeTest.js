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
    it('上端点に1が設定されていること', () => {
      const rangeObj1 = new ClosedRange();
      assert(rangeObj1.upperEndpoint === 1);
    });
    it('上端点に2が設定されていること', () => {
      const rangeObj2 = new ClosedRange();
      assert(rangeObj2.upperEndpoint === 2);
    });
  });
});
