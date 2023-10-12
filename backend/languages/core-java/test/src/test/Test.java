package test;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Test {

	public static void main(String[] args) throws IOException, InterruptedException {
		// TODO Auto-generated method stub
		String url="https://fakestoreapi.com/products";
var request= HttpRequest.newBuilder().GET().uri(URI.create(url)).build();
	var client= HttpClient.newBuilder().build();
	
		var response=client.send(request,HttpResponse.BodyHandlers.ofString());
		System.out.println(response.body());

	}

}
