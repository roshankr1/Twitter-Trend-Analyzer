window.Dashboard=window.Dashboard||{},Dashboard.RightSidebar={setupVerticalScrolls:function(){function t(t){var e=t.offset(),a=$(window).scrollTop(),i=t.nextAll().filter(function(){var t=$(this).css("position");return!("absolute"===t||"fixed"===t)}),o=Dashboard.Helpers.calcElementsHeightSum(i);t.css({height:window.innerHeight-(e.top-a)-o+"px"})}var e=$(".vertical-scroll-container"),a=$(".right-sidebar");e.each(function(){var e=$(this),i=a.add(e.closest(".tab-pane")).add(e.closest(".right-sidebar-extra-content"));Dashboard.Helpers.setAttributeChangeObserver(i,function(){t(e)}),$(window).on("resize ready",function(){t(e),e.perfectScrollbar("update")}),e.perfectScrollbar({suppressScrollX:!0})})},setupExtraContent:function(){function t(t,i){var o=t.position().top,r=a.offset().top-e.scrollTop();i.css({top:o+"px",height:window.innerHeight-o-r+"px"})}var e=$(window),a=$(".right-sidebar");$("[data-target-extra-content]").each(function(){var i=$(this),o=$("#"+i.data("targetExtraContent")),r=a.add(o.closest(".tab-pane"));Dashboard.Helpers.setAttributeChangeObserver(r,function(){t(i,o)}),e.on("resize ready",function(){t(i,o)})}),$(".extra-content-close").on("click",function(){$(this).closest(".right-sidebar-extra-content").removeClass("active")}),$(".extra-content-open").on("click",function(){var t=$(this).closest("[data-target-extra-content]").data("targetExtraContent");t&&$("#"+t).addClass("active")})}};
