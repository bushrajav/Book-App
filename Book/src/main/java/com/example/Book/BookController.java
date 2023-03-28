package com.example.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class BookController {

    @Autowired
    BookRepository repository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/books")
    public Iterable<Book> getBooks() {
        return repository.findAll();
    }

    @GetMapping("/search")
    public List<Book> getSearch(@RequestParam String title) {
        return repository.findByTitle(title);
    }

}