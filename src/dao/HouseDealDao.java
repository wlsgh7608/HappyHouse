package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import dto.HouseDeal;

public class HouseDealDao {
	Connection con;
	HouseDeal houseDeal;
	
	private static HouseDealDao instance;
	
	public static HouseDealDao getInstance() {
		if (instance == null) instance = new HouseDealDao();
		return instance;
	}
	
	private HouseDealDao() {
		try {
			Class.forName("com.jdbc.cj.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/temp","ssafy","ssafy");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public HouseDeal getDeal(String aptCode ) {
        String sql = "select * from housedeal where aptCode =  ?";
        HouseDeal deal = null;
        try(PreparedStatement stmt = con.prepareStatement(sql)){
            stmt.setString(1,aptCode);
            ResultSet rs = stmt.executeQuery();
            if(rs.next()) {
            	deal = new HouseDeal(rs.getInt("dealYear"), rs.getInt("dealMonth"), rs.getString("area"), aptCode);
                return deal;
            }else {
            	System.out.println("there is no such deal");
            }
        }catch(Exception e) {
            e.printStackTrace();
        }
        return deal;
    }
}
