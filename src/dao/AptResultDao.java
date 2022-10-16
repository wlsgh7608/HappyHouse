package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import dto.AptResult;
import dto.HouseInfo;

public class AptResultDao {
	Connection con;
	private AptResultDao() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/temp","ssafy","ssafy");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	private static AptResultDao instance;
	
	public static AptResultDao getInstane() {
		if(instance == null)instance = new AptResultDao();
		return instance;
	}
	
	public AptResult joinAptList() {
		String sql = "select hi.apartmentName,hd.floor,hd.area,hi.dong,hi.roadName,hd.dealAmount,hd.dealYear,hd.dealMonth,hd.dealDay\r\n" + 
				"from housedeal hd join houseinfo hi on hd.aptCode = hi.aptCode\r\n" + 
				"join dongcode d on hi.dongCode = d.dongCode;";
		AptResult apt = null;
		try(PreparedStatement stmt = con.prepareStatement(sql)){
            ResultSet rs = stmt.executeQuery();
            if(rs.next()) {
                return apt = new AptResult(rs.getString("apartmentName"), rs.getString("floor"), rs.getString("area"), rs.getString("dong"), rs.getString("roadName"), rs.getString("dealAmount"), rs.getInt("dealYear"), rs.getInt("dealMonth"), rs.getInt("dealDay"));
            }
        }catch(Exception e) {
            e.printStackTrace();
        }
        return apt;
	}
}
