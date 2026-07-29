package com.motolink.repository;

import com.motolink.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
    List<Car> findByMetroCity(String metroCity);
    List<Car> findByCategory(String category);
}
