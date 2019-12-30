package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
class CoolNewsController {
    private NewsRepository repository;

    public CoolNewsController(NewsRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/cool-news")
    public Collection<News> coolNews() {
        return repository.findAll().stream()
                .filter(this::isCool)
                .collect(Collectors.toList());
    }

    private boolean isCool(News news) {
        return  !news.getName().equals("Aviso 1") &&
                !news.getName().equals("Aviso 2") &&
                !news.getName().equals("Aviso 5") &&
                !news.getName().equals("Aviso 6");
    }
}