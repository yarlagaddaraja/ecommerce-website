package com.raja.ecommerce.service;
import org.springframework.stereotype.Service;
import com.raja.ecommerce.entity.Product;
import java.util.List;
import java.util.Optional;
import com.raja.ecommerce.dto.ProductRequest;
import com.raja.ecommerce.entity.Category;
import com.raja.ecommerce.repository.CategoryRepository;
import com.raja.ecommerce.repository.ProductRepository;
@Service
public class ProductService {
	private final ProductRepository productRepository;
	private final CategoryRepository categoryRepository;
	  public ProductService(ProductRepository productRepository,CategoryRepository categoryRepository) {
	        this.productRepository = productRepository;
	        this.categoryRepository=categoryRepository;
	    }
	  public Product saveProduct(ProductRequest request) {
		  Product product = new Product();

		    product.setName(request.getName());
		    product.setDescription(request.getDescription());
		    product.setPrice(request.getPrice());
		    product.setImgUrl(request.getImageUrl());
		    product.setStock(request.getStock());

		    Category category = categoryRepository
		            .findById(request.getCategoryId())
		            .orElseThrow(() -> new RuntimeException("Category not found"));

		    product.setCategory(category);
		  return productRepository.save(product);
		  }
	  public List<Product>getAllProducts(){
		  return productRepository.findAll();
		  }
	  public Optional<Product>getProductById(Long id){
		  return productRepository.findById(id);
	  }
	  public Product updateProduct(Long id, Product updatedProduct) {
		  Optional<Product> existingProduct =productRepository.findById(id);
		  if(existingProduct.isPresent()) {
			  Product product=existingProduct.get();
			  product.setName(updatedProduct.getName());
			  product.setDescription(updatedProduct.getDescription());
			  product.setPrice(updatedProduct.getPrice());
			  product.setImgUrl(updatedProduct.getImgUrl());
			  product.setStock(updatedProduct.getStock());
			  return productRepository.save(product);
		  }
		  else {
			  throw new RuntimeException("product not found");
		  }
	  }
	  public void deleteProduct(Long id) {
		  productRepository.deleteById(id);
	  }
}
