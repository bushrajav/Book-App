package com.example.Book;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BookRepository extends CrudRepository<Book, Integer> {
    @Query(value = "SELECT * FROM BOOK WHERE TITLE ILIKE %?%", nativeQuery = true)
    public List<Book> findByTitle(String title);
}
