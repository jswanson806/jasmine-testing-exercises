//check the returned result from initial values
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(getCurrentUIValues())).toEqual('665.30');
});

//split the returned string at the decimal and check the remaining length
it("should return a result with 2 decimal places", function() {
 expect(calculateMonthlyPayment(getCurrentUIValues()).split(".").length).toEqual(2);
});