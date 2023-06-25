package com.example.demo.controller;

import com.example.demo.dto.BookDTO;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/book")
@CrossOrigin
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/getBook")
    public List<BookDTO> getBook(){
        return bookService.getAllBooks();
    }

    @PostMapping("/saveBook")
    public BookDTO saveBook(@RequestBody BookDTO bookDTO){
        return bookService.saveBook(bookDTO);
    }

    @PutMapping("/updateBook")
    public BookDTO updateBook(@RequestBody BookDTO bookDTO){
        return bookService.updateBook(bookDTO);
    }

    @DeleteMapping("/deleteBook")
    public String deleteBook(){
        return "delete Book";
    }
}
