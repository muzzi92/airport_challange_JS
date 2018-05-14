describe('airport', function(){
  var airport;
  describe('can land planes', function(){
    it('should have array for planes', function(){
      airport = new Airport();
      expect(airport.planes).toEqual([]);
    });

    it('should have plane in array after landing', function () {
      airport = new Airport();
      var plane = 'plane';
      airport.land(plane);
      expect(airport.planes).toEqual([plane]);
    });

    it('should remove the plane from the array after takeoff', function () {
      airport = new Airport();
      var plane = 'plane';
      airport.takeOff(plane);
      expect(airport.planes).toEqual([]);
    })

  });
});
