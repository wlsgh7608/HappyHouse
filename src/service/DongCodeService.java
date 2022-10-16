package service;

import java.util.List;

import dao.DongCodeDao;
import dto.DongCode;

public class DongCodeService {
	DongCodeDao dongcodeDao;
	private static  DongCodeService instance;
	private DongCodeService() {
		dongcodeDao = DongCodeDao.getInstance();
	}
	
	public static DongCodeService getInstance() {
		if(instance == null) 
			instance = new DongCodeService();
		return instance;
	}
	
	
	
	public List<DongCode> listDongCode(String regCode){
		regCode = regCode.replace("*", "%");
		return dongcodeDao.listDongCode(regCode);
		
	}
	
	public DongCode getByRegCode(String regCode) {
		return dongcodeDao.getByRegCode(regCode);
	}
	
}
