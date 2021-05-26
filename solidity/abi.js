const abi = [{
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "_packageId",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_from",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_to",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_originName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_destinationName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_departureTime",
                "type": "string"
            }
        ],
        "name": "addNewPackage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "admin",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "count",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_packageId",
            "type": "address"
        }],
        "name": "currentStatus",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_packageId",
            "type": "address"
        }],
        "name": "getPackageDetails",
        "outputs": [{
                "internalType": "address",
                "name": "packageId",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "from",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "to",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "originName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "destinationName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "departureTime",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_packageId",
            "type": "address"
        }],
        "name": "getStatusHistory",
        "outputs": [{
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "packages",
        "outputs": [{
                "internalType": "address",
                "name": "packageId",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "from",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "to",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "originName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "destinationName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "departureTime",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "status",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "_packageId",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_status",
                "type": "string"
            }
        ],
        "name": "updateShipment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];