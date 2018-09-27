package com.upbest.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.upbest.model.SysInfo;
import com.upbest.persistence.SysInfoMapper;
import com.upbest.service.ISysInfoService;

@Service
public class SysInfoServiceImpl implements ISysInfoService {

    @Autowired
    SysInfoMapper sysInfoMapper;
    
	@Override
	public SysInfo queryInfo(Integer id) {
		if(null == id) id =1;
		return sysInfoMapper.selectByPrimaryKey(id);
	}
	
	@Override
	public SysInfo findInfoByFactoryCode(String factoryCode) {
		return sysInfoMapper.findInfoByFactoryCode(factoryCode);
	}
	
	@Override
	public void updateSysInfo(SysInfo sysinfo) {
		sysInfoMapper.updateByPrimaryKeySelective(sysinfo);
	}
	
	@Override
	public List<SysInfo> findAllInfo() {
		return sysInfoMapper.findAllInfo();
	}

}
