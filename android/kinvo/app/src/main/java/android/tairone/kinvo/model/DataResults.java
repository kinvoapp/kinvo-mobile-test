package android.tairone.kinvo.model;

import java.util.List;

public class DataResults {

    /**
     * success : true
     * data : [{"portfolioProductId":2120976,"productTypeId":1,"productName":"AZ QUEST LEGAN LOW VOL FUNDO DE INVESTIMENTO MULTIMERCADO","financialInstitutionName":"RICO","equity":2157.35,"profitability":3.47},{"portfolioProductId":26234,"productName":"Tesouro Selic 2023 (LFT)","productTypeId":4,"financialInstitutionName":"MODAL DTVM","equity":101.92,"profitability":5.15},{"portfolioProductId":1897515,"productName":"Tesouro Prefixado 2021 (LTN)","productTypeId":4,"financialInstitutionName":"MODAL DTVM","equity":1121.88,"profitability":12.7},{"portfolioProductId":1867193,"productName":"Poupança MODAL DTVM","productTypeId":5,"financialInstitutionName":"MODAL DTVM","equity":516.97,"profitability":3.39},{"portfolioProductId":90150,"productName":"CDB Pré MODAL DTVM (15.3% a.a)","productTypeId":6,"financialInstitutionName":"MODAL DTVM","equity":618.68,"profitability":23.74},{"portfolioProductId":2276869,"productName":"ITSA4 - ITAUSA","productTypeId":8,"financialInstitutionName":"MODAL DTVM","equity":14597,"profitability":1579.48},{"portfolioProductId":2273391,"productName":"AALR11 - CENTRO DE IMAGEM DIAGNOSTICOS S.A. (116% do CDI)","productTypeId":9,"financialInstitutionName":"RICO","equity":1001.15,"profitability":3.69},{"portfolioProductId":552471,"productName":"Euro","productTypeId":10,"financialInstitutionName":"MODAL DTVM","equity":1007.88,"profitability":0.79}]
     * error : null
     */

    private boolean success;
    private Object error;
    private List<DataBean> data;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Object getError() {
        return error;
    }

    public void setError(Object error) {
        this.error = error;
    }

    public List<DataBean> getData() {
        return data;
    }

    public void setData(List<DataBean> data) {
        this.data = data;
    }

    public static class DataBean {
        /**
         * portfolioProductId : 2120976
         * productTypeId : 1
         * productName : AZ QUEST LEGAN LOW VOL FUNDO DE INVESTIMENTO MULTIMERCADO
         * financialInstitutionName : RICO
         * equity : 2157.35
         * profitability : 3.47
         */

        private int portfolioProductId;
        private int productTypeId;
        private String productName;
        private String financialInstitutionName;
        private double equity;
        private double profitability;

        public int getPortfolioProductId() {
            return portfolioProductId;
        }

        public void setPortfolioProductId(int portfolioProductId) {
            this.portfolioProductId = portfolioProductId;
        }

        public int getProductTypeId() {
            return productTypeId;
        }

        public void setProductTypeId(int productTypeId) {
            this.productTypeId = productTypeId;
        }

        public String getProductName() {
            return productName;
        }

        public void setProductName(String productName) {
            this.productName = productName;
        }

        public String getFinancialInstitutionName() {
            return financialInstitutionName;
        }

        public void setFinancialInstitutionName(String financialInstitutionName) {
            this.financialInstitutionName = financialInstitutionName;
        }

        public double getEquity() {
            return equity;
        }

        public void setEquity(double equity) {
            this.equity = equity;
        }

        public double getProfitability() {
            return profitability;
        }

        public void setProfitability(double profitability) {
            this.profitability = profitability;
        }
    }
}
