package com.example.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class MyRESTController {

    @Autowired
    BookRepository repository;
<<<<<<< HEAD

=======
>>>>>>> f25adbcc22e3f3c39c40b7c2617ea325442d94d9
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/books")
    public Iterable<Book> getBooks() {
        return repository.findAll();
    }

}