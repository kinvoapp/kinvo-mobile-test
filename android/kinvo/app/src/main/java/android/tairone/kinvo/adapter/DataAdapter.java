package android.tairone.kinvo.adapter;

import android.content.Context;
import android.graphics.Color;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.tairone.kinvo.R;
import android.tairone.kinvo.model.DataResults;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.Filter;
import android.widget.Filterable;
import android.widget.TextView;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

public class DataAdapter extends RecyclerView.Adapter<DataAdapter.DataViewHolder> implements Filterable {

    private Context context;
    private List<DataResults.DataBean> dataList;
    private List<DataResults.DataBean> dataListFull;

    public DataAdapter(Context context) {
        this.context = context;
    }

    public void setDataList(List<DataResults.DataBean> dataList) {
        this.dataList = dataList;
        this.dataListFull = new ArrayList<>(dataList);
    }

    public List<DataResults.DataBean> getDataList() {
        return this.dataList;
    }

    @NonNull
    @Override
    public DataViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int i) {
        LayoutInflater inflater = LayoutInflater.from(this.context);
        View view = inflater.inflate(R.layout.model_list, null);
        return new DataViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull DataViewHolder dataViewHolder, int i) {
        DataResults.DataBean data = dataList.get(i);

        dataViewHolder.tvFinancialInstitutionName.setText(data.getFinancialInstitutionName());
        dataViewHolder.tvProductName.setText(data.getProductName());

        double number = data.getEquity();
        DecimalFormat df = new DecimalFormat("#,##0.00");
        String newNumber = df.format(number);
        dataViewHolder.tvEquity.setText("R$" + newNumber);

        newNumber = String.valueOf(data.getProfitability()).replace(".", ",");
        dataViewHolder.tvProfitability.setText(newNumber + "%");

        int color = colorByProduct(data.getProductTypeId());
        dataViewHolder.tvFinancialInstitutionName.setTextColor(color);
        dataViewHolder.tvEquity.setTextColor(color);
        dataViewHolder.tvProfitability.setTextColor(color);
        dataViewHolder.btnColor.setBackgroundColor(color);

    }

    @Override
    public int getItemCount() {
        return dataList.size();
    }

    private int colorByProduct(int id) {
        int color;
        switch (id) {
            case 1:
                color = context.getResources().getColor(R.color.funds);
                break;
            case 2:
                color = context.getResources().getColor(R.color.pension);
                break;
            case 3:
                color = context.getResources().getColor(R.color.postFixedIncome);
                break;
            case 4:
                color = context.getResources().getColor(R.color.treasureDirect);
                break;
            case 5:
                color = context.getResources().getColor(R.color.savings);
                break;
            case 6:
                color = context.getResources().getColor(R.color.preFixedIncome);
                break;
            case 7:
                color = context.getResources().getColor(R.color.bitcoin);
                break;
            case 8:
                color = context.getResources().getColor(R.color.stock);
                break;
            case 9:
                color = context.getResources().getColor(R.color.debentures);
                break;
            case 10:
                color = context.getResources().getColor(R.color.currency);
                break;
            case 11:
                color = context.getResources().getColor(R.color.fii);
                break;
            case 12:
                color = context.getResources().getColor(R.color.bdr);
                break;
            default:
                color = Color.GRAY;
        }

        return color;
    }

    @Override
    public Filter getFilter() {
        return dataFilter;
    }

    private Filter dataFilter = new Filter() {
        @Override
        protected FilterResults performFiltering(CharSequence charSequence) {

            List<DataResults.DataBean> filteredList = new ArrayList<>();

            if(charSequence == null || charSequence.length() == 0) {
                filteredList.addAll(dataListFull);
            } else {
                String filterPattern = charSequence.toString().toLowerCase().trim();

                for(DataResults.DataBean item : dataListFull) {
                    if(item.getFinancialInstitutionName().toLowerCase().contains(filterPattern)
                            || item.getProductName().toLowerCase().contains(filterPattern)) {
                        filteredList.add(item);
                    }
                }
            }

            FilterResults results = new FilterResults();
            results.values = filteredList;

            return results;
        }

        @Override
        protected void publishResults(CharSequence charSequence, FilterResults filterResults) {
            dataList.clear();
            dataList.addAll((List) filterResults.values);
            notifyDataSetChanged();
        }
    };

    class DataViewHolder extends RecyclerView.ViewHolder {

        TextView tvFinancialInstitutionName;
        TextView tvProductName;
        TextView tvEquity;
        TextView tvProfitability;
        Button btnColor;

        DataViewHolder(@NonNull View itemView) {
            super(itemView);

            tvFinancialInstitutionName = itemView.findViewById(R.id.tvFinancialInstitutionName);
            tvProductName = itemView.findViewById(R.id.tvProductName);
            tvEquity = itemView.findViewById(R.id.tvEquity);
            tvProfitability = itemView.findViewById(R.id.tvProfitability);
            btnColor = itemView.findViewById(R.id.btnColor);
        }
    }
}
