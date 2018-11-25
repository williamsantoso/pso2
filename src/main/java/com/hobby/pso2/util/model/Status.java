package com.hobby.pso2.util.model;

public class Status {
	private Number sAtk;
	private Number rAtk;
	private Number tAtk;
	private Number dex;
	private Number sDef;
	private Number rDef;
	private Number tDef;
	private Number hp;
	private Number pp;
	private Number blowResist;
	private Number shotResist;
	private Number mindResist;
	private Number iceResist;
	private Number fireResist;
	private Number lightningResist;
	private Number windResist;
	private Number lightResist;
	private Number darkResist;
	
	public Status() {
		this.sAtk = 0;
		this.rAtk = 0;
		this.tAtk = 0;
		this.dex = 0;
		this.sDef = 0;
		this.rDef = 0;
		this.tDef = 0;
		this.hp = 0;
		this.pp = 0;
		this.blowResist = 0;
		this.shotResist = 0;
		this.mindResist = 0;
		this.iceResist = 0;
		this.fireResist = 0;
		this.lightningResist = 0;
		this.windResist = 0;
		this.lightResist = 0;
		this.darkResist = 0;
	}
	
	public Number getsAtk() {
		return sAtk;
	}
	
	public void setsAtk(Number sAtk) {
		this.sAtk = sAtk;
	}
	
	public Number getrAtk() {
		return rAtk;
	}
	
	public void setrAtk(Number rAtk) {
		this.rAtk = rAtk;
	}
	
	public Number gettAtk() {
		return tAtk;
	}
	
	public void settAtk(Number tAtk) {
		this.tAtk = tAtk;
	}
	
	public Number getDex() {
		return dex;
	}
	
	public void setDex(Number dex) {
		this.dex = dex;
	}
	
	public Number getsDef() {
		return sDef;
	}
	
	public void setsDef(Number sDef) {
		this.sDef = sDef;
	}
	
	public Number getrDef() {
		return rDef;
	}
	
	public void setrDef(Number rDef) {
		this.rDef = rDef;
	}
	
	public Number gettDef() {
		return tDef;
	}
	
	public void settDef(Number tDef) {
		this.tDef = tDef;
	}
	
	public Number getHp() {
		return hp;
	}
	
	public void setHp(Number hp) {
		this.hp = hp;
	}
	
	public Number getPp() {
		return pp;
	}
	
	public void setPp(Number pp) {
		this.pp = pp;
	}
	
	public Number getBlowResist() {
		return blowResist;
	}
	
	public void setBlowResist(Number blowResist) {
		this.blowResist = blowResist;
	}
	
	public Number getShotResist() {
		return shotResist;
	}
	
	public void setShotResist(Number shotResist) {
		this.shotResist = shotResist;
	}
	
	public Number getMindResist() {
		return mindResist;
	}
	
	public void setMindResist(Number mindResist) {
		this.mindResist = mindResist;
	}
	
	public Number getIceResist() {
		return iceResist;
	}
	
	public void setIceResist(Number iceResist) {
		this.iceResist = iceResist;
	}
	
	public Number getFireResist() {
		return fireResist;
	}
	
	public void setFireResist(Number fireResist) {
		this.fireResist = fireResist;
	}
	
	public Number getLightningResist() {
		return lightningResist;
	}
	
	public void setLightningResist(Number lightningResist) {
		this.lightningResist = lightningResist;
	}
	
	public Number getWindResist() {
		return windResist;
	}
	
	public void setWindResist(Number windResist) {
		this.windResist = windResist;
	}
	
	public Number getLightResist() {
		return lightResist;
	}
	
	public void setLightResist(Number lightResist) {
		this.lightResist = lightResist;
	}
	
	public Number getDarkResist() {
		return darkResist;
	}
	
	public void setDarkResist(Number darkResist) {
		this.darkResist = darkResist;
	}

	@Override
	public String toString() {
		return "Status [sAtk=" + sAtk + ", rAtk=" + rAtk + ", tAtk=" + tAtk + ", dex=" + dex + ", sDef=" + sDef
				+ ", rDef=" + rDef + ", tDef=" + tDef + ", hp=" + hp + ", pp=" + pp + ", blowResist=" + blowResist
				+ ", shotResist=" + shotResist + ", mindResist=" + mindResist + ", iceResist=" + iceResist
				+ ", fireResist=" + fireResist + ", lightningResist=" + lightningResist + ", windResist=" + windResist
				+ ", lightResist=" + lightResist + ", darkResist=" + darkResist + "]";
	}
}
