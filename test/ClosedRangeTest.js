const assert = require('assert');

const ClosedRange = require('../lib/closedRange');

describe('ClosedRangeテスト', () => {
  let rangeObj; 

  beforeEach(() => {
    
  });

  describe('#isGeneratedInstance()', () => {
    it('インスタンスが生成されていること', () => {
      //TODO: あとで型判定いれたいな
      rangeObj = new ClosedRange(1, 2);
      assert(rangeObj !== null);
    });
    it('ClosedRange型のインスタンスであること', () => {
      //TODO: あとで型判定いれたいな
      rangeObj = new ClosedRange(1, 2);
      assert(rangeObj === hogehoge);
    });
    it('上端点に1が設定されていること', () => {
      rangeObj = new ClosedRange(0, 1);
      assert(rangeObj.upperEndpoint === 1);
    });
    it('上端点に2が設定されていること', () => {
      rangeObj = new ClosedRange(0, 2);
      assert(rangeObj.upperEndpoint === 2);
    });
    it('下端点に2が設定されていること', () => {
      rangeObj = new ClosedRange(2, 0);
      assert(rangeObj.lowerEndpoint === 2);
    });
  });
});
