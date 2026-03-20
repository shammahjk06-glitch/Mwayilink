import 'package:cloud_firestore/cloud_firestore.dart';

class ProductService {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  // Add a product
  Future<void> addProduct(Map<String, dynamic> productData) async {
    await _db.collection('products').add(productData);
  }

  // Get all products
  Stream<List<Map<String, dynamic>>> getProducts() {
    return _db.collection('products').snapshots().map((snapshot) => 
      snapshot.docs.map((doc) => doc.data()).toList());
  }

  // Update a product
  Future<void> updateProduct(String productId, Map<String, dynamic> updatedData) async {
    await _db.collection('products').doc(productId).update(updatedData);
  }

  // Delete a product
  Future<void> deleteProduct(String productId) async {
    await _db.collection('products').doc(productId).delete();
  }
}