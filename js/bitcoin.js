$(document).ready(function() {
	$.ajax({
		url : "https://api.blockchain.info/stats?cors=true",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout: "5000",
		async : true,

		success : function(data) {
			$('#bitcoin_network_hash').append(data.minutes_between_blocks);
			$('#bitcoin_usd_price').append(data.market_price_usd);
			$('#bitcoin_blocks').append(data.minutes_between_blocks);
			$('#bitcoin_block_number').append(data.n_blocks_total);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_network_hash').append(err+" N/A");
			$('#bitcoin_usd_price').append(err+" N/A");
			$('#bitcoin_blocks').append(err+" N/A");
			$('#bitcoin_block_number').append(err+" N/A");
		}
	});
});

