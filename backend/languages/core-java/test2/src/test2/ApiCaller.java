package test2;

import java.awt.PageAttributes.MediaType;

import com.squareup.okhttp.OkHttpClient;

public class ApiCaller {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		OkHttpClient client = new OkHttpClient().newBuilder()
				  .build();
				MediaType mediaType = MediaType.parse("text/plain");
				RequestBody body = RequestBody.create(mediaType, "");
				Request request = new Request.Builder()
				  .url("https://fakestoreapi.com/products")
				  .method("GET", body)
				  .build();
				Response response = client.newCall(request).execute();
	}

}
