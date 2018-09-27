package com.upbest.service;

import java.util.List;

import com.upbest.model.SysInfo;

public interface ISysInfoService {
	SysInfo queryInfo(Integer id);
	void updateSysInfo(SysInfo sysinfo);
	List<SysInfo>  findAllInfo();
	SysInfo findInfoByFactoryCode(String factoryCode);
}
