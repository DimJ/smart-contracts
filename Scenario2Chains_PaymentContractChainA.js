/*
* 	The abi for Scenario2Chains_AuthorizationContractChainB.
*/
var Scenario2Chains_PaymentContractChainA_ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "hash",
				"type": "bytes32"
			},
			{
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "createServer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "s_key",
				"type": "string"
			},
			{
				"name": "resource_owner",
				"type": "address"
			}
		],
		"name": "validationAndPayment",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "result",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "totalPrice",
				"type": "uint256"
			}
		],
		"name": "CreateServerEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "result",
				"type": "bool"
			}
		],
		"name": "DepositEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "result",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "fullResult",
				"type": "string"
			}
		],
		"name": "ValidationAndPaymentEvent",
		"type": "event"
	}
];

module.exports = Scenario2Chains_PaymentContractChainA_ABI