(()=>{var a=$("#prefix"),e=$("#components-wrapper"),r=$("> div > ul.directory-structure",e),t=$(".btn.submit"),n=null;function o(){r.each((function(){var e=$(this);$("> li > span[data-name]",e).each((function(){$(this).html(a.val()+$(this).data("name"))}))}))}$((function(){a.on({keyup:function(){/[\\/]/gi.test(a.val())?(a.addClass("error"),t.addClass("disabled").prop("disabled",!0).prop("readonly",!0)):(a.removeClass("error"),t.removeClass("disabled").prop("disabled",!1).prop("readonly",!1)),clearTimeout(n),n=setTimeout((function(){o()}),50)}}),o()}))})();