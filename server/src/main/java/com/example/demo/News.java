package com.example.demo;

import lombok.*;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Entity;

@Entity
@Data
@NoArgsConstructor
public class News {
    @Id @GeneratedValue
    private Long id;
    private @NonNull String title;
    //private @NonNull String description;
    //private @NonNull Date dataP;
    //private @NonNull Date dataV;

}