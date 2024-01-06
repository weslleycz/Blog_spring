package com.blog.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.blog.model.Post;
import com.blog.repository.PostRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public Post savePost(Post post) {
        return postRepository.save(post);
    }

    public List<Post> listPosts() {
        return postRepository.findAll();
    }

    public Post findPostById(UUID postId) {
        return postRepository.findById(postId).orElse(null);
    }

    public ResponseEntity<String> update(UUID postId) {
        Optional<Post> optionalPost = postRepository.findById(postId);
        if (optionalPost.isPresent()) {
            Post post = optionalPost.get();

            post.setViews(post.getViews() + 1);

            postRepository.save(post);

            return ResponseEntity.ok("update");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("post não encontrado");
        }
    }

}
