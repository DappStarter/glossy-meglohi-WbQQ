require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name repeat night unique hunt drive equal ghost'; 
let testAccounts = [
"0x838898d7da44012a4ade8d12a667ae4be92aa884c1d8a8bd342c432d8437a96d",
"0x92036c12fc8ff3649d74aa79ca50c9af6a4b19c24f10efc675057a0cc7092d41",
"0x0179aa4265aaeecbfc687756a604c738b3af484348e4728d2f31eb02e59536ea",
"0x8fb86fccba769c7ba282726937ae1bfb6df0800aea65719391827f77c0ccca07",
"0xdd5180a008f63c6a43af6ba22d9e455e6f9c6a30728c14ea9e2b63384397552a",
"0xaece7b2d8bf25d07d752dfd8892f1c5d63e6ac565414df99df6f4877ac92eaec",
"0x3a69114d85a18f53024bc56e37fe167dfcf5ee81d5f237574fc7289c270245f4",
"0x7648edfea04b8db57520867b895dac1ecd2c349dc12c782a08573c8ae185a08c",
"0x3671aaf466ac0f9b2839e199d68bdbb2b8c4080470a9e517cd02a3246717e9d9",
"0xb2726caef2158f671f59fd95f11fe1d68cbd86d15baf40bb2f19ffd84388613c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


