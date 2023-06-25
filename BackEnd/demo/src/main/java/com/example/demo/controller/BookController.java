package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "api/v1/book")
@CrossOrigin
public class BookController {
    @GetMapping("/getBook")
    public String getBook(){
        return "getBook";
    }
}
