package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import dto.HouseInfo;

public class HouseInfoDao {
	private static HouseInfoDao instance;
	Connection con;
	
	public static HouseInfoDao getInstance() {
		if(instance == null) instance = new HouseInfoDao();
		return instance;
	}

	private HouseInfoDao() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://http:localhost:3306/temp","ssafy","ssafy");
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public HouseInfo getHouse(String aptCode ) {
        String sql = "select * from houseinfo where aptCode =  ?";
        HouseInfo house = null;
        try(PreparedStatement stmt = con.prepareStatement(sql)){
            stmt.setString(1,aptCode);
            ResultSet rs = stmt.executeQuery();
            if(rs.next()) {
            	house = new HouseInfo(Integer.parseInt(aptCode), rs.getString("roadName"),rs.getString("roadNameBonbun"),
            			rs.getString("dong"), rs.getString("dongCode"), rs.getString("apartmentName"));
                return house;
            }
        }catch(Exception e) {
            e.printStackTrace();
        }
        return house;
    }
	

}
