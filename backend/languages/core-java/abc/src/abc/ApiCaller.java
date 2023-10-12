package abc;

import java.io.IOException;
import java.net.http.HttpResponse;

import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

public class ApiCaller {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Unirest.setTimeouts(0, 0);
		try {
			
			@SuppressWarnings("unchecked")
			HttpResponse<String> response = (HttpResponse<String>) Unirest.get("https://fakestoreapi.com/products")
			  .asString();
		} catch (UnirestException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
