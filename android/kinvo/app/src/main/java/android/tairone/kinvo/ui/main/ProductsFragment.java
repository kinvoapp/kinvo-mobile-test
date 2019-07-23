package android.tairone.kinvo.ui.main;

import android.arch.lifecycle.ViewModelProviders;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.Snackbar;
import android.support.v4.app.Fragment;
import android.support.v7.widget.DividerItemDecoration;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.tairone.kinvo.R;
import android.tairone.kinvo.model.DataResults;
import android.tairone.kinvo.model.ApiInterface;
import android.tairone.kinvo.adapter.DataAdapter;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.inputmethod.EditorInfo;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.Toast;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ProductsFragment extends Fragment {

    private static final String ARG_SECTION_NUMBER = "section_number";

    public static ProductsFragment newInstance(int index) {
        ProductsFragment fragment = new ProductsFragment();
        Bundle bundle = new Bundle();
        bundle.putInt(ARG_SECTION_NUMBER, index);
        fragment.setArguments(bundle);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        PageViewModel pageViewModel = ViewModelProviders.of(this).get(PageViewModel.class);
        int index = 1;
        if (getArguments() != null) {
            index = getArguments().getInt(ARG_SECTION_NUMBER);
        }
        pageViewModel.setIndex(index);
    }

    @Override
    public View onCreateView(
            @NonNull LayoutInflater inflater, ViewGroup container,
            Bundle savedInstanceState) {
        View root = inflater.inflate(R.layout.fragment_products, container, false);

        Log.i("Dias", "getActivity: " + getActivity());

        final RecyclerView recyclerView = root.findViewById(R.id.recyclerView);
        recyclerView.setHasFixedSize(true);

        GridLayoutManager gridLayoutManager = new GridLayoutManager(getContext(), 1);

        recyclerView.setLayoutManager(gridLayoutManager);
        recyclerView.addItemDecoration(new DividerItemDecoration(recyclerView.getContext(), DividerItemDecoration.VERTICAL));

        final DataAdapter dataAdapter = new DataAdapter(getContext());

        apiRequest(recyclerView, dataAdapter);

        final EditText etSearch = root.findViewById(R.id.etSearch);
        etSearch.setImeOptions(EditorInfo.IME_ACTION_DONE);
        etSearch.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {
            }

            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                if(dataAdapter.getDataList() != null) {
                    Log.i("Dias", "Entrou ?");
                    dataAdapter.getFilter().filter(charSequence);
                }
            }

            @Override
            public void afterTextChanged(Editable editable) {
            }
        });

        final ImageButton ibAdd = root.findViewById(R.id.ibAdd);
        ibAdd.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(getContext(), "Action not implemented", Toast.LENGTH_SHORT).show();
            }
        });

        return root;
    }

    private void apiRequest(final RecyclerView recyclerView, final DataAdapter dataAdapter) {
        String BASE_URL = "https://e9a02505-3276-4fee-aede-c7023dfb9034.mock.pstmn.io";
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        ApiInterface apiInterface = retrofit.create(ApiInterface.class);

        Call<DataResults> call = apiInterface.getData();

        call.enqueue(new Callback<DataResults>() {
            @Override
            public void onResponse(Call<DataResults> call, Response<DataResults> response) {

                if(response.body().isSuccess()) {
                    List<DataResults.DataBean> dataBeans = response.body().getData();

                    dataAdapter.setDataList(dataBeans);
                    recyclerView.setAdapter(dataAdapter);
                } else {
                    Snackbar.make(getView(), "Data  doesn't exist. Error message: " + response.body().getError()
                            , Snackbar.LENGTH_LONG).setAction("Action", null).show();
                }

            }

            @Override
            public void onFailure(Call<DataResults> call, Throwable t) {
                Snackbar.make(getView(), "Falied to retrieve API data", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
    }

}