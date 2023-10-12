package apiCalling;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class FlipkartApi {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		
		String abc="abc";
		var abc2=1.0;
		var myuri="https://fakestoreapi.com/products";
		var request= HttpRequest.newBuilder().GET().uri(URI.create(myuri)).build();
			System.out.println(request);
			var client=HttpClient.newBuilder().build();
			System.out.println(client);
			try {
				var response=client.send(request,HttpResponse.BodyHandlers.ofString());
			System.out.println(response.body());
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
	}

}
