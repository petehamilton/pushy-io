(function(){dust.register("dashboard",body_0);function body_0(chk,ctx){return chk.write("<div id=\"dashboard\"><div class=\"span8\"><h1>Notifications</h1><div id=\"notifications\">").section(ctx.get("notifications"),ctx,{"block":body_1},null).write("</div></div><div class=\"span4\"><h1>Twitter Feed</h1><div id=\"twitter-widget\"></div></div></div><script>console.log(\"Hello from coffee - you need some\");\n$('#twitter-widget').twitterSearch({term: \"").reference(ctx.get("term"),ctx,"h",["uc"]).write("\", title: \"").reference(ctx.get("term"),ctx,"h").write("\"})</script>");}function body_1(chk,ctx){return chk.write("<div class=\"notification\"><div class=\"alert ").section(ctx.get("classes"),ctx,{"block":body_2},null).write("\"><div class=\"body\">").reference(ctx.get("text"),ctx,"h").write("</div><div class=\"title\">").reference(ctx.get("author"),ctx,"h").write(" // ").reference(ctx.get("title"),ctx,"h").write("</div></div></div>");}function body_2(chk,ctx){return chk.reference(ctx.getPath(true,[]),ctx,"h").write(" ");}return body_0;})();(function(){dust.register("image",body_0);function body_0(chk,ctx){return chk.write("<div id=\"image-container\"><img src=\"").reference(ctx.get("url"),ctx,"h").write("\"/></div>");}return body_0;})();(function(){dust.register("text",body_0);function body_0(chk,ctx){return chk.write("<Something>cool</Something>");}return body_0;})();(function(){dust.register("web",body_0);function body_0(chk,ctx){return chk.write("<div id=\"website-iframe\"><iframe frameborder=\"0\" width=\"100%\" height=\"800px\" src=\"").reference(ctx.get("url"),ctx,"h").write("\"></iframe></div>");}return body_0;})();