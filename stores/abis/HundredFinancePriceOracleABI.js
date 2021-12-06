
export const PRICE_ORACLE_ABI = [{"inputs":[{"internalType":"address","name":"ethUsdChainlinkAggregatorAddress_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"cTokenAddress","type":"address"},{"indexed":false,"internalType":"address","name":"chainlinkAggregatorAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"chainlinkPriceBase","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"underlyingTokenDecimals","type":"uint256"}],"name":"TokenConfigUpdated","type":"event"},{"constant":true,"inputs":[],"name":"ethUsdChainlinkAggregatorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"contract CTokenInterface","name":"cToken","type":"address"}],"name":"getUnderlyingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isPriceOracle","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setEthUsdChainlinkAggregatorAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"cTokenAddress","type":"address[]"},{"internalType":"address[]","name":"chainlinkAggregatorAddress","type":"address[]"},{"internalType":"uint256[]","name":"chainlinkPriceBase","type":"uint256[]"},{"internalType":"uint256[]","name":"underlyingTokenDecimals","type":"uint256[]"}],"name":"setTokenConfigs","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenConfig","outputs":[{"internalType":"address","name":"chainlinkAggregatorAddress","type":"address"},{"internalType":"uint256","name":"chainlinkPriceBase","type":"uint256"},{"internalType":"uint256","name":"underlyingTokenDecimals","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
