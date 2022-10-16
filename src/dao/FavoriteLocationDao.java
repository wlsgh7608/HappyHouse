package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import dto.DongCode;
import dto.FavoriteLocation;

public class FavoriteLocationDao {
	Connection con;
	private static FavoriteLocationDao instance;

	private FavoriteLocationDao() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/temp","ssafy","ssafy");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	public static FavoriteLocationDao getInstance() {
		if (instance == null)
			instance = new FavoriteLocationDao();
		return instance;
	}
	
	public List<FavoriteLocation> getFavorites(String member_id){
		String sql = "select * from favoriteLocation where member_id = ?";
		List<FavoriteLocation> list = new ArrayList<>();
		try(PreparedStatement stmt = con.prepareStatement(sql)){
			stmt.setString(1, member_id);
			ResultSet rs =  stmt.executeQuery();
			while(rs.next()) {
				list.add(new FavoriteLocation(member_id, rs.getString("dongcode_id")));
			}
			
		}catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	
	public int check(String member_id,DongCode dObject) {
		String sql  = "select * from favoriteLocation where member_id = ? and dongcode_id = ?";
		try(PreparedStatement stmt = con.prepareStatement(sql)){
			stmt.setString(1, member_id);
			stmt.setString(2, dObject.getDongCode());
			ResultSet rs =  stmt.executeQuery();
			if(rs.next()) {
				return 1;
			}
			
		}catch (Exception e) {
			e.printStackTrace();
		}
		return 0;
	}
	public int delete(String member_id,DongCode dObject) {
		String sql  = "delete from favoriteLocation where member_id = ? and dongcode_id = ?";
		try(PreparedStatement stmt = con.prepareStatement(sql)){
			stmt.setString(1, member_id);
			stmt.setString(2, dObject.getDongCode());
			return stmt.executeUpdate();
			
		}catch (Exception e) {
			e.printStackTrace();
		}
		return 0;
	}
	public int insert(String member_id,DongCode dObject) {
		String sql  = "insert into favoriteLocation(member_id,dongcode_id) values(?,?)";
		try(PreparedStatement stmt = con.prepareStatement(sql)){
			stmt.setString(1, member_id);
			stmt.setString(2, dObject.getDongCode());
			return stmt.executeUpdate();
		}catch (Exception e) {
			e.printStackTrace();
		}
		return 0;
	}
	
	
	
	

}
