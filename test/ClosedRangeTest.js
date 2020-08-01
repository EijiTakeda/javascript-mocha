const assert = require('assert');

const ClosedRange = require('../lib/closedRange');

describe('ClosedRangeテスト', () => {
  let rangeObj;

  beforeEach(() => {

  });

  describe('整数閉区間を示すクラス（あるいは構造体）', () => {
    it('整数閉区間を示すクラス（あるいは構造体）がnullでないこと', () => {
      rangeObj = new ClosedRange(1, 2);
      assert(rangeObj !== null);
    });
    it('整数閉区間を示すクラス（あるいは構造体）の型であること', () => {
      rangeObj = new ClosedRange(1, 2);
      assert(rangeObj instanceof (ClosedRange));
    });
  });

  describe('整数閉区間オブジェクトは下端点上端点のフィールドを持つこと', () => {
    it('下端点に2が設定されていること', () => {
      rangeObj = new ClosedRange(2, 3);
      assert(rangeObj.lowerEndpoint === 2);
    });
    it('上端点に1が設定されていること', () => {
      rangeObj = new ClosedRange(0, 1);
      assert(rangeObj.upperEndpoint === 1);
    });
    it('上端点に2が設定されていること', () => {
      rangeObj = new ClosedRange(0, 2);
      assert(rangeObj.upperEndpoint === 2);
    });
    
    it('下端点に文字列が設定されないこと', () => {
      rangeObj = new ClosedRange("hoge", "hoge");
      assert(rangeObj.lowerEndpoint === undefined);
    });
    it('上端点に文字列が設定されないこと', () => {
      rangeObj = new ClosedRange("hoge", "hoge");
      assert(rangeObj.upperEndpoint === undefined);
    });
    it('下端点に小数値が設定されないこと', () => {
      rangeObj = new ClosedRange(1.1, "hoge");
      assert(rangeObj.upperEndpoint === undefined);
    });
    it('上端点に小数値が設定されないこと', () => {
      rangeObj = new ClosedRange("hoge", 1.1);
      assert(rangeObj.upperEndpoint === undefined);
    });
    it('上端点より下端点が大きい閉区間を作ることはできないこと(正常系)', () => {
      rangeObj = new ClosedRange(3, 1);
      assert(rangeObj.lowerEndpoint === undefined && rangeObj.upperEndpoint === undefined);
    });
    it('上端点より下端点が大きい閉区間を作ることはできないこと(異常系)', () => {
      rangeObj = new ClosedRange("hoge", 1);
      assert(rangeObj.lowerEndpoint === undefined && rangeObj.upperEndpoint === undefined);
    });    
  });
});
