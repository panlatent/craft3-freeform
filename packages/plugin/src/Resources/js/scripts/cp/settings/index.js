$((function(){$("input[name='purge-toggle']").parents(".lightswitch").on({change:function(){$("input",this).val()||$("select#purge-value").val(0)}}),$("select#spam-protection-behaviour").on({change:function(){var e=$("#custom-spam-error-message");"display_errors"===$(this).val()?e.show("fast"):e.hide("fast")}});var e=$('select[name="settings[scriptInsertLocation]"]'),t=$("#script-insert-warning").text();e.on({change:function(){var e=$(this).val(),n=$(this).parents(".field:first");if("manual"===e){var a=document.createElement("div");a.classList.add("warning","with-icon"),a.innerText=t,console.log(n,a),n.append(a)}else n.find(".warning.with-icon").remove()}}),e.trigger("change");var n=$("#notifications-migrator");n&&$("#migrate",n).on({click:function(e){if(!confirm("Are you sure you want to migrate database notifications to file based ones?"))return e.preventDefault(),e.stopPropagation(),!1;var t,a,i,r=$("#remove-files",n).is(":checked");return $.ajax({url:Craft.getCpUrl("freeform/migrate/notifications/db-to-file"),type:"post",dataType:"json",contentType:"application/json",data:JSON.stringify((t={removeDbNotifications:r},a=Craft.csrfTokenName,i=Craft.csrfTokenValue,a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t)),success:function(e){e.success&&n.html($('<div class="pane">\n                  <p>\n                    <span class="checkmark-icon"></span>\n                    Migrated successfully\n                  </p> \n                </div>\n                '))}}),e.preventDefault(),e.stopPropagation(),!1}})}));