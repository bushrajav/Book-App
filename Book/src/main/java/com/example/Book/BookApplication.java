package com.example.Book;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.time.LocalDate;

@SpringBootApplication
public class BookApplication {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(BookApplication.class, args);

        BookRepository repository = context.getBean(BookRepository.class);

        repository.save(new Book(1, "Bored of Lunch", "Bored of Lunch", "Nathan Anthony", LocalDate.of(2023, 3, 16),
                20.50, "HARDCOVER", "English", "111111BL", 20, "Ebury Press", "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51QVWt8ECCL._SX218_BO1,204,203,200_QL40_ML2_.jpg"));

        repository.save(new Book(2, "Bored of Lunch", "The Healthy Slow Cooker Book", "Nathan Anthony", LocalDate.of(2023, 3, 16),
                9.00, "HARDCOVER", "English", "1529903548", 192, "Ebury Press", "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51QVWt8ECCL._SX218_BO1,204,203,200_QL40_ML2_.jpg"));

        repository.save(new Book(3, "Lessons in Chemistry", "The No. 1 Sunday Times bestseller and BBC Between the Covers Book Club pick", "Bonnie Garmus", LocalDate.of(2023, 3, 2),
                4.99, "Paperback", "English", "1804990922", 400, "Penguin", "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51QVWt8ECCL._SX218_BO1,204,203,200_QL40_ML2_.jpg"));

        repository.save(new Book(4, "The Dinosaur that Pooped Easter! ", " ", "JDougie Poynter", LocalDate.of(2021, 12, 3),
                4.99, "Paperback", "English", "0241488818", 26, "Puffin", "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51QVWt8ECCL._SX218_BO1,204,203,200_QL40_ML2_.jpg"));

        repository.save(new Book(5, "Atomic Habits", "the life-changing million-copy #1 bestseller", "James Clear", LocalDate.of(2018, 10, 18),
                20.50, "HARDCOVER", "English", "1847941834", 320, "Random house Business", "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51QVWt8ECCL._SX218_BO1,204,203,200_QL40_ML2_.jpg"));

    }

}
