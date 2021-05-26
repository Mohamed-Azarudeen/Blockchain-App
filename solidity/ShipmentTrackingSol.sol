// SPDX-License-Identifier: UNLINCENSED

pragma solidity >=0.7.0 < 0.9.0;

contract ShipmentTracking {
    
    address public admin;
    
    mapping(uint => Package) public packages;
    
    mapping(uint => Status) statusMap;
    
    struct Package {
        address packageId;
        string from;
        string to;    
        string originName;
        string destinationName;
        string departureTime;
        string status;
    }
    
    uint public count = 0;
    
    uint StatusCount = 0;
    
    struct Status {
        address packageId;
        string status1;
        string status2;
        string status3;
        string status4;
    }
    
    constructor(){
		admin = msg.sender;
	}
    
    modifier isAdmin() {
		require(msg.sender == admin, "Caller is not an Admin");
		_;	
	}
    
    modifier isAddedPackage() {
	   // address _packageId = msg.sender;
	    bool flag = false;
	    for(uint i=0; i<count; i++) {
	        if(packages[i].packageId == msg.sender){
	            flag = true;
	            _;
	        }
	    }
	    if(!flag)
	        revert("Only added packages can be track");
	}
    
    /* Admin can add new package */
    function addNewPackage(
        address _packageId,
        string memory _from,
        string memory _to,
        string memory _originName,
        string memory _destinationName,
        string memory _departureTime
        ) 
    public isAdmin {
        string memory _status1 = "Shipping Soon";
	    packages[count] = Package(_packageId, _from, _to, _originName, _destinationName, _departureTime, _status1);
	    count++;
	    
	    statusMap[StatusCount] = Status(_packageId, _status1, "-1", "-1", "-1");
	    StatusCount++;
	}
	
    /* Admin can update the status of given PackageId */
	function updateShipment (
	    address _packageId, string memory _status
	    ) public isAdmin {
	        
        for(uint i=0; i<count; i++) {
            if(packages[i].packageId == _packageId){
                packages[i].status = _status;
            }
        }
        
        for(uint j=0; j<StatusCount; j++) {
            if(statusMap[j].packageId == _packageId) {
                string memory _empty = "-1";
                
                if(keccak256(bytes(statusMap[j].status2)) == keccak256(bytes(_empty)))
                    statusMap[j].status2 = _status;
                else if(keccak256(bytes(statusMap[j].status3)) == keccak256(bytes(_empty)))
                    statusMap[j].status3 = _status;
                else
                    statusMap[j].status4 = _status;
            }
        }
	}
    
    /* Users can track thier packages by using packageId*/
    function currentStatus (address _packageId) public view returns(string memory)
    {
        string memory result = "Not Found";
        for(uint i=0; i<count; i++) {
	            if(packages[i].packageId == _packageId){
	                result = packages[i].status;
	            }
	        }
        return result;
    }
    
    function getStatusHistory(address _packageId) public view returns (string memory, string memory,string memory,string memory) {
        for(uint i=0; i<StatusCount; i++) {
            if(statusMap[i].packageId == _packageId) {
                return (statusMap[i].status1, statusMap[i].status2, statusMap[i].status3, statusMap[i].status4 );
            }
        }
        return ("Not Found", "Not Found", "Not Found", "Not Found");
    }
    
    
    function getPackageDetails(address _packageId) public view returns (
        address packageId,
        string memory from,
        string memory to ,
        string memory originName,
        string memory destinationName,
        string memory departureTime
        )
    {
        for(uint i=0; i<count; i++) {
	            if(packages[i].packageId == _packageId){
	                return (packages[i].packageId, packages[i].from, packages[i].to,packages[i].originName,packages[i].destinationName, packages[i].departureTime);
	            }
	        }
    }
    
}