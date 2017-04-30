$(document).ready(function() {
	$.ajax({
		url : "https://api.blockchain.info/stats?cors=true",
		dataType : "json",
		type : "GET",
		timeout: "5000",
		async : true,

		success : function(data) {
			$('#bitcoin_difficulte').append(data.difficulty);
			$('#bitcoin_nbr').append(data.n_blocks_total);
			$('#bitcoin_prix').append(data.market_price_usd);
			$('#bitcoin_minutes').append(data.minutes_between_blocks);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_difficulte').append(err+" N/A");
			$('#bitcoin_nbr').append(err+" N/A");
			$('#bitcoin_prix').append(err+" N/A");
			$('#bitcoin_minutes').append(err+" N/A");
		}
	});
});
