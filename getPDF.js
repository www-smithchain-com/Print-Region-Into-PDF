 function getPDF(p_item) {
     console.log(p_item);
     var print_btn = p_item.triggeringElement.id;
     //alert(print_btn); // to get button id
     const arr = [$(p_item.affectedElements)];
     $.each(arr, function(i, item) {
         var p_item1 = item[0].id;
         console.log(p_item1);
    console.log(print_btn);
         $('#'+ print_btn).click(function() {
		  console.log(print_btn);
             var options = {};
             var pdf = new jsPDF();
			  console.log('test');
             pdf.addHTML($('#' + p_item1), 10, 10, options, function() {
                 pdf.save('Content.pdf');
             });
         });

     });

 }
