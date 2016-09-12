/**
 * Created by Alex on 12.09.2016.
 */
$(document).ready(function(){

    $(document).on("click", '.dd', function(e){
        var dd = $(this).closest('.b-fill-form');
        dd.find(".fill-form__dropdown-list").stop().slideToggle(400);

    });
    $('.fill-form__dropdown-item').click(function(){
        var value = $(this).html();
        $(".fill-form__dropdown-list").slideUp('fast');
        $(".content-inp").html(value);
    });
});
