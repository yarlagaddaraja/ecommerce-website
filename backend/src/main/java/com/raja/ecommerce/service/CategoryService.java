package com.raja.ecommerce.service;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.raja.ecommerce.entity.Category;
import com.raja.ecommerce.repository.CategoryRepository;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    // Create Category
    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }

    // Get All Categories
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    // Get Category by ID
    public Optional<Category> getCategoryById(Long id) {
        return categoryRepository.findById(id);
    }

    // Update Category
    public Category updateCategory(Long id, Category updatedCategory) {

        Optional<Category> existingCategory = categoryRepository.findById(id);

        if (existingCategory.isPresent()) {

            Category category = existingCategory.get();

            category.setName(updatedCategory.getName());

            return categoryRepository.save(category);

        } else {

            throw new RuntimeException("Category not found");

        }
    }

    // Delete Category
    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }
}
