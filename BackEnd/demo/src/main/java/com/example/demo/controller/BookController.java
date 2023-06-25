package com.example.demo.controller;

import com.example.demo.dto.BookDTO;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/book")
@CrossOrigin
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/getBook")
    public String getBook(){
        return "getBook";
    }

    @PostMapping("/saveBook")
    public BookDTO saveBook(@RequestBody BookDTO bookDTO){
        return bookService.saveBook(bookDTO);
    }

    @PutMapping("/updateBook")
    public String updateBook(){
        return "update Book";
    }

    @DeleteMapping("/deleteBook")
    public String deleteBook(){
        return "delete Book";
    }
}
