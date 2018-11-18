const constants = {}
constants.organization = 'ColuLocalNetwork'
constants.repoName = 'poa-chain-spec'
constants.addressesSourceFile = 'contracts.json'
constants.ABIsSources = {
  KeysManager: 'KeysManager.abi.json',
  PoaNetworkConsensus: 'PoaNetworkConsensus.abi.json',
  ValidatorMetadata: 'ValidatorMetadata.abi.json',
  ProofOfPhysicalAddress: 'ProofOfPhysicalAddress.abi.json'
}
constants.userDeniedTransactionPattern = 'User denied transaction'

constants.NETWORKS = {
  '121': {
    NAME: 'FuseNetwork',
    RPC: 'https://rpc.fuse.io',
    BRANCH: 'FuseNetwork',
    TESTNET: false
  }
}

module.exports = {
  constants
}
