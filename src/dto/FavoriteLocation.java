package dto;

public class FavoriteLocation {
	private String member_id;
	private String dongcode_id;
	public FavoriteLocation(String member_id, String dongcode_id) {
		super();
		this.member_id = member_id;
		this.dongcode_id = dongcode_id;
	}
	
	
	
	public String getMember_id() {
		return member_id;
	}
	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}
	public String getDongcode_id() {
		return dongcode_id;
	}
	public void setDongcode_id(String dongcode_id) {
		this.dongcode_id = dongcode_id;
	}
	
	
	


}