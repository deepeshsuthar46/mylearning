<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
im about page
<h1>testing jsp</h1>
<%! int abc=10;%> <!--declaration tag  --> 
<%  class D{
	String p="hello";
	public String print1(){
		return "printing something";
	}
	
}
D ab=new D();
String val=ab.p;
String val1=ab.print1();
%><!-- scriplet tag -->
<%=  val1  %>
<br>
<!-- express tag---to print on creen -->
<%=  val  %>
</body>
</html>