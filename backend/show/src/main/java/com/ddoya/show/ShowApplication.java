package com.ddoya.show;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class ShowApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShowApplication.class, args);
	}

}
