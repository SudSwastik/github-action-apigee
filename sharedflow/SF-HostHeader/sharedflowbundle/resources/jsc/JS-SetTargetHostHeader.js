 var hostHeader = context.getVariable("request.header.host");
 print(context.getVariable("target.header.host"));
 context.setVariable("target.header.host",hostHeader);
 print(context.getVariable("target.header.host"));
