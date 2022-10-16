package service;

import java.util.List;

import dao.FavoriteLocationDao;
import dto.DongCode;
import dto.FavoriteLocation;

public class FavoriteLocationService {
	FavoriteLocationDao favoriteLocationDao;
	private static FavoriteLocationService instance;
	private FavoriteLocationService() {
		favoriteLocationDao = FavoriteLocationDao.getInstance();
	}
	
	public static FavoriteLocationService getInstance() {
		if(instance == null) instance = new FavoriteLocationService();
		return instance;
	}
	
	public List<FavoriteLocation> getFavorites(String userId){
		return favoriteLocationDao.getFavorites(userId);
	}
	
	public int check(String userId,DongCode dObject) {
		return favoriteLocationDao.check(userId, dObject);
	}
	public int delete(String userId,DongCode dObject) {
		return favoriteLocationDao.delete(userId, dObject);
	}
	public int insert(String userId,DongCode dObject) {
		return favoriteLocationDao.insert(userId, dObject);
	}
	
	

}
