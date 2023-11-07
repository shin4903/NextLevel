package com.ddoya.chatgpt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class ChatgptApplication {
	public static void main(String[] args) {
		SpringApplication.run(ChatgptApplication.class, args);
	}
}