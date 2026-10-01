package com.raja.ecommerce.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.raja.ecommerce.entity.Product;
public interface ProductRepository extends JpaRepository<Product,Long> {
}
