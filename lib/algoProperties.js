var util = require('./util.js');
var multiHashing = require('multi-hashing');

var diff1 = global.diff1 = 0x00000000ff000000000000000000000000000000000000000000000000000000;

var algos = module.exports = global.algos = {
    'yescrypt': {
        multiplier: 65536,
        diff: parseInt('0x0007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
        hash: function(){
            return function(){
                return multiHashing.yescrypt.apply(this, arguments);
            }
        }
    },
    'yescrypt_bitzeny': {
        multiplier: 65536,
        diff: parseInt('0x0007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
        hash: function(){
            return function(){
                return multiHashing.yescrypt_bitzeny.apply(this, arguments);
            }
        }
    },
    'yescryptR8': {
        multiplier: 65536,
        diff: parseInt('0x0007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
        hash: function(){
            return function(){
                return multiHashing.yespower_0_5_R8.apply(this, arguments);
            }
        }
    },
    'yescryptR8G': {
        multiplier: 65536,
        diff: parseInt('0x0007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
        hash: function(){
            return function(){
                return multiHashing.yespower_0_5_R8G.apply(this, arguments);
            }
        }
    },
    'yescryptR16': {
        multiplier: 65536,
        diff: parseInt('0x0007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
        hash: function(){
            return function(){
                return multiHashing.yespower_0_5_R16.apply(this, arguments);
            }
        }
    },
    'yescryptR24': {
        multiplier: 65536,
        diff: parseInt('0x0007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
        hash: function(){
            return function(){
                return multiHashing.yespower_0_5_R24.apply(this, arguments);
            }
        }
    },
    'yescryptR32': {
        multiplier: 65536,
        diff: parseInt('0x0007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
        hash: function(){
            return function(){
                return multiHashing.yespower_0_5_R32.apply(this, arguments);
            }
        }
    },
    'kawpow': {
        multiplier: 1,
        diff: parseInt('0x00000000ff000000000000000000000000000000000000000000000000000000'),
        hash: function(){
            return function(){
                return;
            }
        }
    },
	x22i: {
        hash: function(){
            return function(){
                return multiHashing.x22i.apply(this, arguments);
            }
        }
    },
	x25x: {
        hash: function(){
            return function(){
                return multiHashing.x25x.apply(this, arguments);
            }
        }
    }
};

for (var algo in algos){
    if (!algos[algo].multiplier)
        algos[algo].multiplier = 1;
}
