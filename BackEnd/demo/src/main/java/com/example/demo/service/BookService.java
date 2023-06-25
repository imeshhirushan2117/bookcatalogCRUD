package com.example.demo.service;

import com.example.demo.dto.BookDTO;
import com.example.demo.entity.Book;
import com.example.demo.repo.BookRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class BookService {
    @Autowired
    private BookRepo bookRepo;

    @Autowired
    private ModelMapper modelMapper;


    public BookDTO saveBook(BookDTO bookDTO){
        bookRepo.save(modelMapper.map(bookDTO, Book.class));
        return bookDTO;
    }
}
