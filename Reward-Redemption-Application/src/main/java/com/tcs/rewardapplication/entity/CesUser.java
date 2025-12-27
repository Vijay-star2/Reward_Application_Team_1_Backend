package com.tcs.rewardapplication.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.context.annotation.Role;

@Entity
@Table(name = "ces_user")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CesUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", nullable = false, unique = true, length = 50)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false, length = 20)
    private Role role;

    @Column(name = "active", nullable = false)
    private Boolean active = true;
}

