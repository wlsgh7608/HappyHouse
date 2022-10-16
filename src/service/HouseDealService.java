package service;

import dao.HouseDealDao;
import dto.HouseDeal;

public class HouseDealService {
	HouseDealDao houseDeal;
	private static HouseDealService instance;
	
	public static HouseDealService getInstance() {
		if(instance == null) instance = new HouseDealService();
		return instance;
	}
	
	public HouseDeal getDeal(String aptCode) {
		return houseDeal.getDeal(aptCode);
	} 
}
