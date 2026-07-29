package com.motolink.entity;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;

@Entity
@Table(name = "rental_cars")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String make;

    @Column(nullable = false)
    private String model;

    @Column(nullable = false)
    private Integer year;

    private String category; // SUV, Electric, Hatchback, Luxury
    private String fuelType;
    private String transmission;
    private Integer seats;

    @Column(name = "price_per_day", nullable = false)
    private BigDecimal pricePerDay;

    @Column(name = "refundable_deposit")
    private BigDecimal refundableDeposit;

    @Column(name = "metro_city", nullable = false)
    private String metroCity;

    private Double latitude;
    private Double longitude;

    private String imageUrl;
    
    @Builder.Default
    private Boolean isAvailable = true;
}
