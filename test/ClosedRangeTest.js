const assert = require('assert');

const ClosedRange = require('../lib/closedRange');

describe('ClosedRangeテスト', () => {
  let rangeObj;

  beforeEach(() => {

  });

  describe('整数閉区間を示すクラス（あるいは構造体）', () => {
    it('整数閉区間を示すクラス（あるいは構造体）がnullでないこと', () => {
      //TODO: あとで型判定いれたいな
      rangeObj = new ClosedRange(1, 2);
      assert(rangeObj !== null);
    });
    it('整数閉区間を示すクラス（あるいは構造体）の型であること', () => {
      //TODO: あとで型判定いれたいな
      rangeObj = new ClosedRange(1, 2);
      assert(rangeObj instanceof (ClosedRange));
    });
  });

  describe('整数閉区間オブジェクトは下端点上端点のフィールドを持つこと', () => {
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
    it('下端点に整数値以外が設定されないこと', () => {
      rangeObj = new ClosedRange("hoge", "hoge");
      assert(rangeObj.lowerEndpoint === undefined);
    });    
  });
});
