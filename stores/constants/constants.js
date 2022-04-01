import BigNumber from 'bignumber.js';

// URLS
export const GAS_PRICE_API = 'https://gasprice.poa.network/';
export const ZAPPER_GAS_PRICE_API = 'https://api.zapper.fi/v1/gas-price?api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241'
export const ETHERSCAN_URL = 'https://etherscan.io/';


// DEFINE CONTRACT ADDRESSES

export const outdatedPools = ["minmaxXIMM3", "minmaxXIMB3", "minmaxXIME3"];

// GENERAL
export const ERROR = 'ERROR';
export const STORE_UPDATED = 'STORE_UPDATED';
export const TX_SUBMITTED = 'TX_SUBMITTED';

export const CONNECTION_CONNECTED = 'CONNECTION_CONNECTED';
export const CONNECTION_DISCONNECTED = 'CONNECTION_DISCONNECTED';
export const CONNECT_WALLET = 'CONNECT_WALLET';

export const CONFIGURE = 'CONFIGURE';
export const CONFIGURE_RETURNED = 'CONFIGURE_RETURNED';

export const ACCOUNT_CONFIGURED = 'ACCOUNT_CONFIGURED';
export const ACCOUNT_CHANGED = 'ACCOUNT_CHANGED';

export const GET_GAS_PRICES = 'GET_GAS_PRICES';
export const GAS_PRICES_RETURNED = 'GAS_PRICES_RETURNED';


// PROJECTS
export const GET_PROJECTS = 'GET_PROJECTS';
export const PROJECTS_RETURNED = 'PROJECTS_RETURNED'

export const GET_PROJECT = 'GET_PROJECT'
export const PROJECT_RETURNED = 'PROJECT_RETURNED'




// GAUGES
export const CONFIGURE_GAUGES = 'CONFIGURE_GAUGES'
export const GAUGES_CONFIGURED = 'GAUGES_CONFIGURED'

export const GET_TOKEN_BALANCES = 'GET_TOKEN_BALANCES'
export const TOKEN_BALANCES_RETURNED = 'TOKEN_BALANCES_RETURNED'

export const APPROVE_LOCK = 'APPROVE_LOCK'
export const APPROVE_LOCK_RETURNED = 'APPROVE_LOCK_RETURNED'

export const LOCK = 'LOCK'
export const LOCK_RETURNED = 'LOCK_RETURNED'

export const WITHDRAW = 'WITHDRAW'
export const WITHDRAW_RETURNED = 'WITHDRAW_RETURNED'

export const VOTE = 'VOTE'
export const VOTE_RETURNED = 'VOTE_RETURNED'

export const APPLY_BOOST = 'APPLY_BOOST'
export const APPLY_BOOST_RETURNED = 'APPLY_BOOST_RETURNED'

export const INCREASE_LOCK_AMOUNT = 'INCREASE_LOCK_AMOUNT'
export const INCREASE_LOCK_AMOUNT_RETURNED = 'INCREASE_LOCK_AMOUNT_RETURNED'

export const INCREASE_LOCK_DURATION = 'INCREASE_LOCK_DURATION'
export const INCREASE_LOCK_DURATION_RETURNED = 'INCREASE_LOCK_DURATION_RETURNED'

export const MAX_UINT256 = new BigNumber(2).pow(256).minus(1).toFixed(0);
