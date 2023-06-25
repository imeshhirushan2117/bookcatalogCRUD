package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/book")
@CrossOrigin
public class BookController {

    @GetMapping("/getBook")
    public String getBook(){
        return "getBook";
    }

    @PostMapping("/saveBook")
    public String saveBook(){
        return "save Book";
    }
}
