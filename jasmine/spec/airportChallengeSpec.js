describe('airport', function(){
  var airport;
  describe('can land planes', function(){
    it('should have array for planes', function(){
      airport = new Airport();
      expect(airport.planes).toBe([]);
    });
  });
});
