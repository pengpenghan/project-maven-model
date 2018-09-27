package com.upbest.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.upbest.model.SysUser;
import com.upbest.persistence.SysUserMapper;
import com.upbest.service.ISysUserService;

@Service
public class SysUserServiceImpl implements ISysUserService {
   
	@Autowired
    SysUserMapper sysUserMapper;

	@Override
	public SysUser findInfo(String userName,Integer stationId) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userName", userName);
		map.put("stationId", stationId);
		return  sysUserMapper.findUserByUserName(map);
	}

	@Override
	public void updateSysUser(SysUser sysUser) {
		sysUserMapper.updateByPrimaryKeySelective(sysUser);
	}
    
}
