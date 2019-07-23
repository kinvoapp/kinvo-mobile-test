package android.tairone.kinvo.model;

import retrofit2.Call;
import retrofit2.http.GET;

public interface ApiInterface {

    @GET("/getProducts")
    Call<DataResults> getData();

}
