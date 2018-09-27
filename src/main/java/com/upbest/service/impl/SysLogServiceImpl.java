package com.upbest.service.impl;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.upbest.model.SysLog;
import com.upbest.persistence.SysLogMapper;
import com.upbest.service.ISysLogService;

@Service
public class SysLogServiceImpl implements ISysLogService {

    private static final Logger logger = LoggerFactory.getLogger(SysLogServiceImpl.class);
	@Autowired
	SysLogMapper sysLogMapper;

	@Override
	public void saveLog(Integer userId,String desc,String className,String methodName) {
		SysLog syslog = new SysLog();
		syslog.setCreateTime(new Date());
		syslog.setLogDesc(desc);
		syslog.setUserId(userId);
		syslog.setClassName(className);
		syslog.setMethodName(methodName);
		sysLogMapper.insert(syslog);
	}
	
	
}
