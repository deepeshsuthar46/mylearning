package oops;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

import java.io.IOException;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.squareup.okhttp.*;

public class UserInput {

	public static void main(String[] args) {
		// TODO Auto-generated method stub 
	Scanner data=new Scanner(System.in);
	System.out.println("ples enter some thing on screen");
	String userE=data.nextLine();
	System.out.println(userE+"heelo");
	}

}
