describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    submitServerInfo();
  });

  it('should add a new server to allServers on submitServerInfo()', function () {

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');

  });

  it('should update table with new server and tip amount', function () {

     expect(document.querySelector('#serverTable tr td').innerHTML).toEqual('Alice');
     expect(document.querySelector('#serverTable tr td').nextSibling.innerHTML).toEqual('$2.00');
     
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

