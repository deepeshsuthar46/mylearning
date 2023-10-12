package apiClling;

import java.io.IOException;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

public class Apicaller {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		OkHttpClient client = new OkHttpClient();
				MediaType mediaType = MediaType.parse("text/plain");
				RequestBody body = RequestBody.create(mediaType, "");
				Request request = new Request.Builder()
				  .url("https://fakestoreapi.com/products")
				  .method("GET", body)
				  .build();
				try {
					Response response = client.newCall(request).execute();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
	}

}
