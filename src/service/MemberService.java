package service;

import dao.MemberDao;
import dto.Member;

public class MemberService {
	private static MemberService instance;
	MemberDao memberDao;
	private MemberService() {
		memberDao = MemberDao.getInstance();
	}

	public static MemberService getInstance() {
		if(instance ==null) {
			instance = new MemberService();
		}
		return instance;
	}
	
	
	public Member login(String id, String pw) {
		return memberDao.login(id,pw);
	}
	
	public int memberInsert(Member m) {
		return memberDao.memberInsert(m);
	}
	
	public int update(String id, Member m) {
		return memberDao.update(id,m);
	}
	
	public int delete(String id) {
		return memberDao.delete(id);
	}
	
	public int idCheck(String id) {
		return memberDao.idCheck(id);
	}
	

}
