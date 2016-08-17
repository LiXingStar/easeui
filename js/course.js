/**
 * Created by lixing on 2016/8/12.
 */
$(function(){
    $('.item').draggable({
        proxy:"clone",
        revert:true
    });
    $(".drop").droppable({
        accept:".item",
        onDragEnter:function(e,source){
            $(this).addClass("move");
        },
        onDragLeave: function(e,source){
            $(this).removeClass("move");
            $(this).addClass("over");
        },
        onDrop: function(e,source){
            $(this).html($(source).html());
        }
    })
})