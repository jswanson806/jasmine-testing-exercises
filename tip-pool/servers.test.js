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
    
    
     expect(serverTbody.innerHTML).not.toEqual('');
     expect(document.getElementById('key')).toBeDefined();
     
    });

  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
    serverTbody.innerHTML = '';
    allServers = {};
  });
});

