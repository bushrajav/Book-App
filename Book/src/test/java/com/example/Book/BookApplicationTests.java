package com.example.Book;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.mockito.Mockito.when;
import static org.springframework.test.util.AssertionErrors.assertEquals;

@SpringBootTest
class BookApplicationTests {
    @Autowired
    private BookController bookController;
    @MockBean
    private BookRepository bookRepository;

    @Test
    void contextLoads() {
    }

    @Test
    public void getSearchByBookTitleTest() {
        String title = "Bored";
        when(bookRepository.findByTitle(title)).thenReturn(Stream.of(new Book(1, "Bored of Lunch", "Bored of Lunch", "Nathan Anthony", LocalDate.of(2023, 3, 16),
                        20.50, "HARDCOVER", "English", "111111BL", 20, "Ebury Press", "https://m.media-amazon.com/images/I/51xYn6gMx2L._SX345_BO1,204,203,200_.jpg"))
                .collect(Collectors.toList()));
        assertEquals("", 1, bookController.getSearch(title).size());
    }

    @Test
    public void getSearchByBookTitleTest1() {
        List<Book> bookList = new ArrayList<>();
        String title = "1234";
        when(bookRepository.findByTitle(title)).thenReturn(bookList) ;
        assertEquals("", 0, bookController.getSearch(title).size());
    }

}
