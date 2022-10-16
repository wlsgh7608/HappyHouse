package service;

import dao.HouseInfoDao;
import dto.HouseInfo;

public class HouseInfoService {
	private static HouseInfoService instance;
	HouseInfoDao houseInfoDao;
	
	public static HouseInfoService getInstance() {
		if(instance == null) instance = new HouseInfoService();
		return instance;
	}
	
	public HouseInfo getHouse(String aptCode) {
		return houseInfoDao.getHouse(aptCode);
	}
}
