var index_block_containers = document.querySelectorAll(".index--block--container.flex--row--reverse .index--block--content");
if(index_block_containers) {
    index_block_containers.forEach(function(ele){  
        // flex--order1
        ele.classList.add("flex--order1");
    });
}

$(function(){
    $(".btn-plus").on('click', function(){
        var numbers = $(this).siblings('.cart-numbers');
        numbers.val(parseInt(numbers.val()) + 1);
    });
    $(".btn-minus").on('click', function(){
        var numbers = $(this).siblings('.cart-numbers');
        if(numbers.val() > 0 )
            numbers.val(parseInt(numbers.val()) - 1);
    });
    $(".btn-delete-cart").on('click', function(){
        if(confirm('確定要刪除商品嗎?')) {
            // console.log($(this).parents('.cart--item--price').find('.item--cost'));
            var minus_price = parseInt($(this).siblings('.cart--item--price').find('.item--cost').html());
            var items_price = parseInt($(".carts--cost").html().replace(/\,/, ''));
            var total_price = parseInt($(".total--cost").html().replace(/\,/, ''));
            items_price -= minus_price;
            total_price -= minus_price;
            var formatTool = new Intl.NumberFormat({ style: 'currency', currency: 'TWD' });
            $(".carts--cost").html(formatTool.format(items_price));
            $(".total--cost").html(formatTool.format(total_price));
            $(this).parents('.cart--item').remove();
        }
    });

    $('.nav--btn--js').on('click', function(){
        $('.nav--list').toggle();
    });

    // $("button").toggle(
    //     function(){
    //     $("body").css("background-color","green");
    //     },
    //     function(){
    //         $("body").css("background-color","red");
    //     },
    //     function(){
    //         $("body").css("background-color","yellow");
    //     }
    // );
});