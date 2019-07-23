package android.tairone.kinvo.adapter;

import android.tairone.kinvo.model.DataResults;

import org.junit.Test;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

public class DataAdapterTest {

    @Test
    public void testFormatCurrentInPtBR() {
        double value = 23456.78;
        DecimalFormat df = new DecimalFormat("#,##0.00");
        String newValue = df.format(value);

        assertEquals("23.456,78", newValue);
    }

    @Test
    public void testPerformFiltering() {
        List<DataResults.DataBean> dataList = new ArrayList<DataResults.DataBean>();
        DataResults.DataBean dataBean = new DataResults.DataBean();
        dataBean.setFinancialInstitutionName("MODAL DTVM");
        dataBean.setProductName("Euro");
        dataList.add(dataBean);

        DataResults.DataBean dataBean2 = new DataResults.DataBean();
        dataBean2.setFinancialInstitutionName("RICO");
        dataBean2.setProductName("ITSA4 - ITAUSA");
        dataList.add(dataBean2);

        List<DataResults.DataBean> filteredList = new ArrayList<>();

        CharSequence charSequence = "ModA";
        //CharSequence charSequence = "eURO";
        //CharSequence charSequence = "rico";
        //CharSequence charSequence = "AZ QUEST";

        String filterPattern = charSequence.toString().toLowerCase().trim();

        for(DataResults.DataBean item : dataList) {
            if(item.getFinancialInstitutionName().toLowerCase().contains(filterPattern)
                    || item.getProductName().toLowerCase().contains(filterPattern)) {
                filteredList.add(item);
            }
        }

        assertTrue(filteredList.size() != 0);

    }

}