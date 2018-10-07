const m = require("./node_modules/monerod-js/lib/js/monerod-js");


var NYnerod = new m.MoneroDaemon("nynode.electroneropulse.org", 20393);
var ITnerod = new m.MoneroDaemon("itnode.electroneropulse.org", 20393);
var DEnerod = new m.MoneroDaemon("denode.electroneropulse.org", 20393);
var PInerod = new m.MoneroDaemon("poolitaly.electroneropulse.org", 20393);

    var checker = 0;

var timethis = function(){
checker = 1;
if (checker == 1){
setTimeout(timethis, 5000)
}


setTimeout(function(){
	NYnerod.getBlockCount().then((result) => {
    console.log("Block count: " + result.count);
    console.log("--------------------");
    console.log("\n");
    }).catch((f) => {
    console.log("Something went wrong: " + f);
});
    ITnerod.getBlockCount().then((result) => {
    console.log("Block count: " + result.count);
    console.log("--------------------");
    console.log("\n");
    }).catch((f) => {
    console.log("Something went wrong: " + f);
});
    DEnerod.getBlockCount().then((result) => {
    console.log("Block count: " + result.count);
    console.log("--------------------");
    console.log("\n");
    }).catch((f) => {
    console.log("Something went wrong: " + f);
});
    PInerod.getBlockCount().then((result) => {
    console.log("Block count: " + result.count);
}).catch((f) => {
    console.log("Something went wrong: " + f);
});

	NYnerod.getInfo().then((result) => {
    console.log(result);
    console.log("NYNODE already_generated_coins: "+result.already_generated_coins);
    console.log("NYNODE alt_blocks_count: "+result.alt_blocks_count);
    console.log("NYNODE block_size_limit: "+result.block_size_limit);
    console.log("NYNODE block_size_median: "+result.block_size_median);
    console.log("NYNODE bootstrap_daemon_address: "+result.bootstrap_daemon_address);
    console.log("NYNODE cumulative_difficulty: "+result.cumulative_difficulty);
    console.log("NYNODE difficulty: "+result.difficulty);
    console.log("NYNODE free_space: "+result.free_space);
    console.log("NYNODE grey_peerlist_size: "+result.grey_peerlist_size);
    console.log("NYNODE height: "+result.height);
    console.log("NYNODE height_without_bootstrap: "+result.height_without_bootstrap);
    console.log("NYNODE incoming_connections_count: "+result.incoming_connections_count);
    console.log("NYNODE mainnet: "+result.mainnet);
    console.log("NYNODE offline: "+result.offline);
    console.log("NYNODE outgoing_connections_count: "+result.outgoing_connections_count);
    console.log("NYNODE rpc_connections_count: "+result.rpc_connections_count);
    console.log("NYNODE stagenet: "+result.stagenet);
    console.log("NYNODE start_time: "+result.start_time);
    console.log("NYNODE status: "+result.status);
    console.log("NYNODE target_height: "+result.target_height);
    console.log("NYNODE testnet: "+result.testnet);
    console.log("NYNODE top_block_hash: "+result.top_block_hash);
    console.log("NYNODE tx_count: "+result.tx_count);
    console.log("NYNODE tx_pool_size: "+result.tx_pool_size);
    console.log("NYNODE untrusted: "+result.untrusted);
    console.log("NYNODE was_bootstrap_ever_used: "+result.was_bootstrap_ever_used);
    console.log("NYNODE white_peerlist_size: "+result.white_peerlist_size);
    console.log("--------------------");
    console.log("\n");
}).catch((f) => {
    console.log("Something went wrong: " + f);
});
	ITnerod.getInfo().then((result) => {
    console.log(result);
    console.log("ITNODE already_generated_coins: "+result.already_generated_coins);
    console.log("ITNODE alt_blocks_count: "+result.alt_blocks_count);
    console.log("ITNODE block_size_limit: "+result.block_size_limit);
    console.log("ITNODE block_size_median: "+result.block_size_median);
    console.log("ITNODE bootstrap_daemon_address: "+result.bootstrap_daemon_address);
    console.log("ITNODE cumulative_difficulty: "+result.cumulative_difficulty);
    console.log("ITNODE difficulty: "+result.difficulty);
    console.log("ITNODE free_space: "+result.free_space);
    console.log("ITNODE grey_peerlist_size: "+result.grey_peerlist_size);
    console.log("ITNODE height: "+result.height);
    console.log("ITNODE height_without_bootstrap: "+result.height_without_bootstrap);
    console.log("ITNODE incoming_connections_count: "+result.incoming_connections_count);
    console.log("ITNODE mainnet: "+result.mainnet);
    console.log("ITNODE offline: "+result.offline);
    console.log("ITNODE outgoing_connections_count: "+result.outgoing_connections_count);
    console.log("ITNODE rpc_connections_count: "+result.rpc_connections_count);
    console.log("ITNODE stagenet: "+result.stagenet);
    console.log("ITNODE start_time: "+result.start_time);
    console.log("ITNODE status: "+result.status);
    console.log("ITNODE target_height: "+result.target_height);
    console.log("ITNODE testnet: "+result.testnet);
    console.log("ITNODE top_block_hash: "+result.top_block_hash);
    console.log("ITNODE tx_count: "+result.tx_count);
    console.log("ITNODE tx_pool_size: "+result.tx_pool_size);
    console.log("ITNODE untrusted: "+result.untrusted);
    console.log("ITNODE was_bootstrap_ever_used: "+result.was_bootstrap_ever_used);
    console.log("ITNODE white_peerlist_size: "+result.white_peerlist_size);
    console.log("--------------------");
    console.log("\n");
}).catch((f) => {
    console.log("Something went wrong: " + f);
});
	DEnerod.getInfo().then((result) => {
    console.log(result);
    console.log("DENODE already_generated_coins: "+result.already_generated_coins);
    console.log("DENODE alt_blocks_count: "+result.alt_blocks_count);
    console.log("DENODE block_size_limit: "+result.block_size_limit);
    console.log("DENODE block_size_median: "+result.block_size_median);
    console.log("DENODE bootstrap_daemon_address: "+result.bootstrap_daemon_address);
    console.log("DENODE cumulative_difficulty: "+result.cumulative_difficulty);
    console.log("DENODE difficulty: "+result.difficulty);
    console.log("DENODE free_space: "+result.free_space);
    console.log("DENODE grey_peerlist_size: "+result.grey_peerlist_size);
    console.log("DENODE height: "+result.height);
    console.log("DENODE height_without_bootstrap: "+result.height_without_bootstrap);
    console.log("DENODE incoming_connections_count: "+result.incoming_connections_count);
    console.log("DENODE mainnet: "+result.mainnet);
    console.log("DENODE offline: "+result.offline);
    console.log("DENODE outgoing_connections_count: "+result.outgoing_connections_count);
    console.log("DENODE rpc_connections_count: "+result.rpc_connections_count);
    console.log("DENODE stagenet: "+result.stagenet);
    console.log("DENODE start_time: "+result.start_time);
    console.log("DENODE status: "+result.status);
    console.log("DENODE target_height: "+result.target_height);
    console.log("DENODE testnet: "+result.testnet);
    console.log("DENODE top_block_hash: "+result.top_block_hash);
    console.log("DENODE tx_count: "+result.tx_count);
    console.log("DENODE tx_pool_size: "+result.tx_pool_size);
    console.log("DENODE untrusted: "+result.untrusted);
    console.log("DENODE was_bootstrap_ever_used: "+result.was_bootstrap_ever_used);
    console.log("DENODE white_peerlist_size: "+result.white_peerlist_size);
    console.log("--------------------");
    console.log("\n");
}).catch((f) => {
    console.log("Something went wrong: " + f);
});
	PInerod.getInfo().then((result) => {
    console.log(result);
    console.log("PINODE already_generated_coins: "+result.already_generated_coins);
    console.log("PINODE alt_blocks_count: "+result.alt_blocks_count);
    console.log("PINODE block_size_limit: "+result.block_size_limit);
    console.log("PINODE block_size_median: "+result.block_size_median);
    console.log("PINODE bootstrap_daemon_address: "+result.bootstrap_daemon_address);
    console.log("PINODE cumulative_difficulty: "+result.cumulative_difficulty);
    console.log("PINODE free_space: "+result.free_space);
    console.log("PINODE grey_peerlist_size: "+result.grey_peerlist_size);
    console.log("PINODE height: "+result.height);
    console.log("PINODE height_without_bootstrap: "+result.height_without_bootstrap);
    console.log("PINODE incoming_connections_count: "+result.incoming_connections_count);
    console.log("PINODE mainnet: "+result.mainnet);
    console.log("PINODE offline: "+result.offline);
    console.log("PINODE outgoing_connections_count: "+result.outgoing_connections_count);
    console.log("PINODE rpc_connections_count: "+result.rpc_connections_count);
    console.log("PINODE stagenet: "+result.stagenet);
    console.log("PINODE height: "+result.height);
    console.log("PINODE start_time: "+result.start_time);
    console.log("PINODE status: "+result.status);
    console.log("PINODE target_height: "+result.target_height);
    console.log("PINODE testnet: "+result.testnet);
    console.log("PINODE top_block_hash: "+result.top_block_hash);
    console.log("PINODE tx_count: "+result.tx_count);
    console.log("PINODE tx_pool_size: "+result.tx_pool_size);
    console.log("PINODE untrusted: "+result.untrusted);
    console.log("PINODE was_bootstrap_ever_used: "+result.was_bootstrap_ever_used);
    console.log("PINODE white_peerlist_size: "+result.white_peerlist_size);
    console.log("--------------------");
    console.log("\n");
}).catch((f) => {
    console.log("Something went wrong: " + f);
});

	NYnerod.getHeight().then((result) => {
    console.log("NYNODE height: ");
    console.log(result);
    console.log("--------------------");
    console.log("\n");
}).catch((f) => {
    console.log("Something went wrong: " + f);
});
	ITnerod.getHeight().then((result) => {
    console.log("ITNODE height: ");
    console.log(result);
    console.log("--------------------");
    console.log("\n");
}).catch((f) => {
    console.log("Something went wrong: " + f);
});
	DEnerod.getHeight().then((result) => {
    console.log("DENODE height: ");
    console.log(result);
    console.log("--------------------");
    console.log("\n");
}).catch((f) => {
    console.log("Something went wrong: " + f);
});
	PInerod.getHeight().then((result) => {
    console.log("PINODE height: ");
    console.log(result);
    console.log("--------------------");
    console.log("\n");
}).catch((f) => {
    console.log("Something went wrong: " + f);
});
}, 1000);
}

if (checker == 0){
setTimeout(timethis, 2500)
}



