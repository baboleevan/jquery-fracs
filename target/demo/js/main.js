(function(b){b(function(){a();b.each(["possible","visible","viewport","width","height","left","right","top","bottom"],function(d,e){b.each(["min","max"],function(f,g){console.log(g,e);b("body > section").fracs(g,e).each(function(){console.log(b(this).find(".label .idx").text())})})});b("#outline").fracs("outline",{crop:true,styles:[{selector:"body > section",strokeWidth:"auto",strokeStyle:"auto",fillStyle:"auto"},{selector:"body > h1",strokeWidth:undefined,strokeStyle:undefined,fillStyle:"rgb(200,200,200)"}]});var c=b("#outline").data("outline");b("#outlineHeader").text("Document "+c.docRect.width+"x"+c.docRect.height)});var a=function(){$body=b("body");$panelFracs=b(".panel .fracs");for(var d=1;d<10;d++){(function(){var h=b("<section title='scroll to this element' />").appendTo($body).width(d*300).height(Math.round(Math.random()*600)+100);var f=b("<div class='label'><span class='idx'>#"+d+"</span></div>").appendTo(h);var g=b("<ul />").appendTo(f);g.append(b("<li><span class='info possible' /> of max possible visibility</li>"));g.append(b("<li><span class='info visible' /> visible</li>"));g.append(b("<li><span class='info viewport' /> of viewport</li>"));var j=b("<li>visible rect <span class='info dims' /><ul /></li>").appendTo(g).find("ul");j.append(b("<li>document space <span class='info rect' /></li>"));j.append(b("<li>element space <span class='info rectElementSpace' /></li>"));j.append(b("<li>viewport space <span class='info rectViewportSpace' /></li>"));var i=b("<li class='section' title='scroll to this element' />").appendTo($panelFracs);i.append(b("<span class='idx'>"+d+"</span>"));i.append(b("<span class='info possible' /><span class='info visible' /><span class='info viewport' />"));h.add(i).click(function(){h.fracs("scrollTo",50,50,500)});h.data("panel",i)})()}b("body > section").fracs(function(h){var g=b(this);var i=g.data("panel");var f=g.find(".label");g.add(i.find(".idx")).css("background-color","rgba(100,200,100,"+h.possible+")");i.find(".visible").text(b.fracs.round(h.visible,4));i.find(".viewport").text(b.fracs.round(h.viewport,4));i.find(".possible").text(b.fracs.round(h.possible,4));i.find(".info").stop(true).css("background-color","rgb(250,250,150)").animate({"background-color":"#fff"},1000);f.find(".visible").text(b.fracs.round(h.visible*100,1)+"%");f.find(".viewport").text(b.fracs.round(h.viewport*100,1)+"%");f.find(".possible").text(b.fracs.round(h.possible*100,1)+"%");if(h.rects===undefined){f.find(".rects").text("undefined")}else{f.find(".dims").text("w/h: "+h.rects.document.width+"x"+h.rects.document.height);f.find(".rect").text("l/t: "+h.rects.document.left+","+h.rects.document.top);f.find(".rectElementSpace").text("l/t: "+h.rects.element.left+","+h.rects.element.top);f.find(".rectViewportSpace").text("l/t: "+h.rects.viewport.left+","+h.rects.viewport.top);f.stop(true).animate({left:h.rects.element.left+"px",top:h.rects.element.top+"px"},100)}});b("body > section").fracs("check");b("body > section").eq(5).fracs("unbind").find(".label").empty().append("<span class='idx'>#6</span> (unbound)");b("body > section").eq(7).fracs(function(f){if(f.possible==1){console.log("#8 max possible visibility")}});var c=b("body > section");var e=c.eq(3).add(c.eq(4)).add(c.eq(5)).add(c.eq(6)).add(c.eq(7));e.fracs("max","possible",function(f){b(".panel .groups .possible").text(f!==undefined?b(f.element).find(".idx").text():"undefined").stop(true).css("background-color","rgb(250,250,150)").animate({"background-color":"#fff"},1000)});e.fracs("max","visible",function(f){b(".panel .groups .visible").text(f!==undefined?b(f.element).find(".idx").text():"undefined").stop(true).css("background-color","rgb(250,250,150)").animate({"background-color":"#fff"},1000)});e.fracs("max","viewport",function(f){b(".panel .groups .viewport").text(f!==undefined?b(f.element).find(".idx").text():"undefined").stop(true).css("background-color","rgb(250,250,150)").animate({"background-color":"#fff"},1000)})}})(jQuery);