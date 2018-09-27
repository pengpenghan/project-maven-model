package com.upbest.service;


public interface ISysLogService {
	void saveLog(Integer userId,String desc,String clazz,String method);
}
