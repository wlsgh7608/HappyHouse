package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import dto.DongCode;


public class DongCodeDao {
	Connection con;
	private static DongCodeDao instance;
	
	private DongCodeDao() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/temp", "ssafy", "ssafy");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static DongCodeDao getInstance() {
		if (instance == null) 
			instance = new DongCodeDao();
		return instance;
	}
	
	
	public List<DongCode> listDongCode(String regCode){
		String sql = "select * from dongcode where dongCode like ?";
		List<DongCode> list = new ArrayList<>();
		try(PreparedStatement stmt = con.prepareStatement(sql)){
			stmt.setString(1, regCode);
			ResultSet  rs = stmt.executeQuery(); 
			while(rs.next()) {
				list.add(new DongCode(rs.getString("dongCode"), rs.getString("sidoName"), rs.getString("gugunName"), rs.getString("dongName")));
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		return list;
		
	}
	
	public DongCode getByRegCode(String regCode) {
		String sql = "select * from dongcode where dongcode = ?";
		try(PreparedStatement stmt = con.prepareStatement(sql)){
			stmt.setString(1, regCode);
			ResultSet rs = stmt.executeQuery();
			if(rs.next()) {
				return new DongCode(rs.getString("dongCode"),rs.getString("sidoName"),rs.getString("gugunName"),rs.getString("dongName"));
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		return null;
		
	}
	
	
	

}
