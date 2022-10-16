package dto;

public class AptResult {
    private String apartmentName;
    private String floor;
    private String area;
    private String dong;
    private String roadName;
    private String dealAmount;
    private int dealYear,dealMonth,dealDay;
    
    
    public AptResult(String apartmentName, String floor, String area, String dong, String roadName, String dealAmount,
            int dealYear, int dealMonth, int dealDay) {
        super();
        this.apartmentName = apartmentName;
        this.floor = floor;
        this.area = area;
        this.dong = dong;
        this.roadName = roadName;
        this.dealAmount = dealAmount;
        this.dealYear = dealYear;
        this.dealMonth = dealMonth;
        this.dealDay = dealDay;
    }
    
    
    
    public String getApartmentName() {
        return apartmentName;
    }
    public void setApartmentName(String apartmentName) {
        this.apartmentName = apartmentName;
    }
    public String getFloor() {
        return floor;
    }
    public void setFloor(String floor) {
        this.floor = floor;
    }
    public String getArea() {
        return area;
    }
    public void setArea(String area) {
        this.area = area;
    }
    public String getDong() {
        return dong;
    }
    public void setDong(String dong) {
        this.dong = dong;
    }
    public String getRoadName() {
        return roadName;
    }
    public void setRoadName(String roadName) {
        this.roadName = roadName;
    }
    public String getDealAmount() {
        return dealAmount;
    }
    public void setDealAmount(String dealAmount) {
        this.dealAmount = dealAmount;
    }
    public int getDealYear() {
        return dealYear;
    }
    public void setDealYear(int dealYear) {
        this.dealYear = dealYear;
    }
    public int getDealMonth() {
        return dealMonth;
    }
    public void setDealMonth(int dealMonth) {
        this.dealMonth = dealMonth;
    }
    public int getDealDay() {
        return dealDay;
    }
    public void setDealDay(int dealDay) {
        this.dealDay = dealDay;
    }
    
    @Override
    public String toString() {
        return "AptResult [apartmentName=" + apartmentName + ", floor=" + floor + ", area=" + area + ", dong=" + dong
                + ", road=" + roadName + ", dealAmount=" + dealAmount + ", dealYear=" + dealYear + ", dealMonth="
                + dealMonth + ", dealDay=" + dealDay + "]";
    }
    

}