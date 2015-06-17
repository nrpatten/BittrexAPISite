$(document).ready(function() {
	var refreshTable = $("#bittrex").DataTable( {
		"ajax": {
			"url": "http://162.243.239.186:8000/?url=https://bittrex.com/api/v1.1/public/getmarketsummaries",
			"dataSrc": "result"
		},
		"columns": [
			{ "data": "MarketName", "render": function (data,type,row) { return '<img src="img/'+ (data).replace('BTC-', '').toLowerCase() +'.png" height="18" width="18"></img> ' + (data) +''; } },
			{ "data": "Last", "render": function (data,type,row) { return (data).toFixed(8); } },
                        { "data": "High", "render": function (data,type,row) { return '<span style="font-size:12px;color:green;" class="glyphicon glyphicon-arrow-up"></span> ' + (data).toFixed(8) +''; }  },
                        { "data": "Low", "render": function (data,type,row) { return '<span style="font-size:12px;color:red;" class="glyphicon glyphicon-arrow-down"></span> ' + (data).toFixed(8) +''; }  },
			{ "data": "BaseVolume", "render": function (data,type,row) { return '<span style="font-size:12px;color:orange;" class="glyphicon glyphicon-bitcoin"></span> ' + (data) +''; }  },
			{ "data": "Volume" }
		],
                "dom": 'T<"clear">lfrtip',
                "tableTools": {
                    "sSwfPath": "swf/copy_csv_xls_pdf.swf",
                    "aButtons": [
                        "copy",
                        "print",
                        {
                            "sExtends":    "collection",
                            "sButtonText": "Save",
                            "aButtons":    [ "csv", "xls", "pdf" ]
                        }
                    ]
                }
	} );
       setInterval (function test() {
         refreshTable.ajax.reload( null, false );
       }, 300000);
} );
