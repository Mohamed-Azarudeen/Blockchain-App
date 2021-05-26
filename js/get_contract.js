let contractAddress = "0xe3a007e32f4F2d56Ba23984342bcE1C4AF4cA2BA";

let admin;

const web3 = new Web3("http://127.0.0.1:7545")
const contract = new web3.eth.Contract(abi, contractAddress)
contract.methods.admin().call().then((e) => {
    admin = e;
})

const addPackage = async() => {
    console.log("Add method calling");
    console.log(adminId);
    let _packageId = document.getElementById("pid").value;
    let _from = document.getElementById("from").value;
    let _to = document.getElementById("to").value;
    let _originName = document.getElementById("origin").value;
    let _destinationName = document.getElementById("dest").value;
    let _departureTime = document.getElementById("time-add").value;
    var res;

    await contract.methods.addNewPackage(_packageId, _from, _to, _originName, _destinationName, _departureTime).send({ from: adminId, gas: 3000000 }).then(e => res = e)
    if (res)
        alert("New Package added Successfully");
    else
        alert("Couldn't Add!..");

}

const updatePackage = async() => {
    console.log("Update method calling");
    let _packageId = document.getElementById("pid").value;
    let _status;
    var res;

    var ele = document.getElementsByName('status');

    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            _status = ele[i].value;
    }
    let _time = document.getElementById("time-update").value;
    _status = _status + ' at ' + _time;

    await contract.methods.updateShipment(_packageId, _status).send({ from: adminId, gas: 3000000 }).then(e => res = e)
    if (res)
        alert("Status updated Successfully");
    else
        alert("Couldn't Update!..");

}

// const trackPackage = async() => {
//     console.log("Track method calling");
//     let _packageId = document.getElementById("pid").value;
//     var res;

//     await contract.methods.currentStatus(_packageId).call().then(e => res = e)
//     console.log(res);
//     if (res)
//         alert("See your status now!..");
//     else
//         alert("Couldn't Add!..");

// }

const getHistory = async() => {
    $(document).ready(function() {
        $("#status-history").show();
    });
    console.log("History method calling");
    let _packageId = document.getElementById("accounts").value;
    var res;
    await contract.methods.getStatusHistory(_packageId).call().then(e => res = e)
    if (res) {
        _arr = res;
        console.log(res[0], res[1], res[2], res[3]);
        var _status1 = res[0];
        var _status2 = res[1];
        var _status3 = res[2];
        var _status4 = res[3];
        if (_status2 == -1)
            _status2 = "...";
        if (_status3 == -1)
            _status3 = "...";
        if (_status4 == -1)
            _status4 = "...";
        document.getElementById("status2").innerHTML = _status2;
        document.getElementById("status3").innerHTML = _status3;
        document.getElementById("status4").innerHTML = _status4;

        var element;
        if (res[1] != "-1") {
            element = document.getElementById("shipped");
            element.classList.remove("progtrckr-todo");
            element.classList.add("progtrckr-done");
        }
        if (res[2] != "-1") {
            element = document.getElementById("ofd");
            element.classList.remove("progtrckr-todo");
            element.classList.add("progtrckr-done");
        }
        if (res[3] != "-1") {
            element = document.getElementById("delivered");
            element.classList.remove("progtrckr-todo");
            element.classList.add("progtrckr-done");
        }

    } else
        alert("Couldn't Add!..");

}

// $(document).ready(function() {
//     $("#").click(function() {
//         $("#status-history").show();
//     });
// });