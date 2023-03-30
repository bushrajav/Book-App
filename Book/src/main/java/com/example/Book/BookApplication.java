package com.example.Book;

import com.example.Book.models.ERole;
import com.example.Book.models.Role;
import com.example.Book.repository.RoleRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class BookApplication {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(BookApplication.class, args);

        BookRepository repository = context.getBean(BookRepository.class);
        RoleRepository roleRepo = context.getBean(RoleRepository.class);


        repository.save(new Book(1, "Bored of Lunch", "Bored of Lunch", "Nathan Anthony", LocalDate.of(2023, 3, 16),
                20.50, "HARDCOVER", "English", "111111BL", 20, "Ebury Press", "https://m.media-amazon.com/images/I/51xYn6gMx2L._SX345_BO1,204,203,200_.jpg"));

        repository.save(new Book(2, "Bored of Lunch", "The Healthy Slow Cooker Book", "Nathan Anthony", LocalDate.of(2023, 3, 16),
                9.00, "HARDCOVER", "English", "1529903548", 192, "Ebury Press", "https://images-eu.ssl-images-amazon.com/images/I/81fYGEA2oOL._AC_UL600_SR600,400_.jpg"));

        repository.save(new Book(3, "Lessons in Chemistry", "The No. 1 Sunday Times bestseller and BBC Between the Covers Book Club pick", "Bonnie Garmus", LocalDate.of(2023, 3, 2),
                4.99, "Paperback", "English", "1804990922", 400, "Penguin", "https://m.media-amazon.com/images/I/41TI5SQSUVL._SX309_BO1,204,203,200_.jpg"));

        repository.save(new Book(4, "The Dinosaur that Pooped Easter! ", " ", "JDougie Poynter", LocalDate.of(2021, 12, 3),
                4.99, "Paperback", "English", "0241488818", 26, "Puffin", "https://m.media-amazon.com/images/I/61NAcdvnooL._SY498_BO1,204,203,200_.jpg"));

        repository.save(new Book(5, "Atomic Habits", "the life-changing million-copy #1 bestseller", "James Clear", LocalDate.of(2018, 10, 18),
                20.50, "HARDCOVER", "English", "1847941834", 320, "Random house Business", "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"));

        repository.save(new Book(6, "Bored of Lunch", "Bored of Lunch", "Nathan Anthony", LocalDate.of(2023, 3, 16),
                20.50, "HARDCOVER", "English", "111111BL", 20, "Ebury Press", "https://m.media-amazon.com/images/I/51xYn6gMx2L._SX345_BO1,204,203,200_.jpg"));

        repository.save(new Book(7, "Bored of Lunch", "The Healthy Slow Cooker Book", "Nathan Anthony", LocalDate.of(2023, 3, 16),
                9.00, "HARDCOVER", "English", "1529903548", 192, "Ebury Press", "https://images-eu.ssl-images-amazon.com/images/I/81fYGEA2oOL._AC_UL600_SR600,400_.jpg"));

        repository.save(new Book(8, "Lessons in Chemistry", "The No. 1 Sunday Times bestseller and BBC Between the Covers Book Club pick", "Bonnie Garmus", LocalDate.of(2023, 3, 2),
                4.99, "Paperback", "English", "1804990922", 400, "Penguin", "https://m.media-amazon.com/images/I/41TI5SQSUVL._SX309_BO1,204,203,200_.jpg"));

        repository.save(new Book(9, "The Dinosaur that Pooped Easter! ", " ", "JDougie Poynter", LocalDate.of(2021, 12, 3),
                4.99, "Paperback", "English", "0241488818", 26, "Puffin", "https://m.media-amazon.com/images/I/61NAcdvnooL._SY498_BO1,204,203,200_.jpg"));

        repository.save(new Book(10, "Atomic Habits", "the life-changing million-copy #1 bestseller", "James Clear", LocalDate.of(2018, 10, 18),
                20.50, "HARDCOVER", "English", "1847941834", 320, "Random house Business", "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"));

        List<Role> roles = new ArrayList<>();

        Role roleUser = new Role(ERole.ROLE_USER);
        roleUser.setId(1);

        Role roleModerator = new Role(ERole.ROLE_MODERATOR);
        roleModerator.setId(2);

        Role roleAdmin = new Role(ERole.ROLE_ADMIN);
        roleAdmin.setId(3);

        roles.add(roleUser);
        roles.add(roleModerator);
        roles.add(roleAdmin);

        roleRepo.saveAll(roles);


    }

}
