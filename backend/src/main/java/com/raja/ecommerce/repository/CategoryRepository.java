package com.raja.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.raja.ecommerce.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}