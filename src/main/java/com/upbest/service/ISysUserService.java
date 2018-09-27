package com.upbest.service;

import com.upbest.model.SysUser;

public interface ISysUserService {
	public SysUser findInfo(String userName,Integer stationId);
	public void  updateSysUser(SysUser sysUser);
}
