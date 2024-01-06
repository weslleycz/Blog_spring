package com.blog.model;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "post", schema = "public")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String notionId;

    private String date;

    private String title;

    private int views;

    @Lob
    @Column(name = "cover", columnDefinition = "TEXT")
    private String cover;
}
