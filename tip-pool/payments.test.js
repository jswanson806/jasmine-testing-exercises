describe("payments test (with setup and teardown)", function() {

    document.querySelector("#billAmt").value = 4;
    document.querySelector("#tipAmt").value = 2;

    it('should update allPayments with payment info', function () {

       submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
    });

    it('should return object with billAmt, tipAmt, & tipPercent', function () {
  
       submitPaymentInfo();
        expect(allPayments['payment1']).toEqual({"billAmt": '4', "tipAmt": '2', "tipPercent": 50});
    });
    
    afterEach(function() {
      // teardown logic
      billAmtInput.value = null;
      tipAmtInput.value = null;
      billAmt = 0;
      tipAmt = 0;
      paymentTbody.innerHTML = null;
      summaryTds[0].innerHTML = null;
      summaryTds[1].innerHTML = null;
      summaryTds[2].innerHTML =  null;
      serverNameInput.value = null;
      serverTbody.innerHTML = null;
      document.querySelector('#summaryTable tbody tr').innerHTML = null;
      document.querySelector('#serverTable tr').removeChild;
      document.querySelectorAll('#paymentTable tr th').innerHTML = null;
      allServers = {};
    });
  });