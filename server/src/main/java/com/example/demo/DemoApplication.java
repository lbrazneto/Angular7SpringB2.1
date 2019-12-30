package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}


	 @Bean
    ApplicationRunner init(NewsRepository repository) {
        return args -> {
            Stream.of("Aviso 1","Aviso 2","Aviso 3","Aviso 4","Aviso 5",
                      " Aviso 6").forEach(title -> {
                News news = new News();
                news.setName(title);
                repository.save(news);
            });
            repository.findAll().forEach(System.out::println);
        };
    }
}
