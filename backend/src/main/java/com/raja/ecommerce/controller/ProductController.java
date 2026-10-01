package com.raja.ecommerce.controller;
import org.springframework.web.bind.annotation.RestController;
import com.raja.ecommerce.service.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import com.raja.ecommerce.dto.ProductRequest;
import com.raja.ecommerce.entity.Product;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.Optional;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

@RestController
@RequestMapping("api/products")
public class ProductController {
private final ProductService productService;
public ProductController(ProductService productService) {
	this.productService=productService;
}
@GetMapping
public List<Product> getAllProducts() {
    return productService.getAllProducts();
}
@PostMapping
public Product creeateProduct(@RequestBody ProductRequest request) {
	return productService.saveProduct(request);
}
@GetMapping("/{id}")
public Optional<Product> getProductById(@PathVariable Long id) {
    return productService.getProductById(id);
}
@PutMapping("/{id}")
public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
    return productService.updateProduct(id, product);
}
@DeleteMapping("/{id}")
public void deleteProduct(@PathVariable Long id) {
	productService.deleteProduct(id);
}
}
