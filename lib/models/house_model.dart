class HouseModel {
  final String id;
  final String address;
  final double price;
  final int bedrooms;
  final int bathrooms;

  HouseModel({
    required this.id,
    required this.address,
    required this.price,
    required this.bedrooms,
    required this.bathrooms,
  });

  factory HouseModel.fromJson(Map<String, dynamic> json) {
    return HouseModel(
      id: json['id'],
      address: json['address'],
      price: json['price'].toDouble(),
      bedrooms: json['bedrooms'],
      bathrooms: json['bathrooms'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'address': address,
      'price': price,
      'bedrooms': bedrooms,
      'bathrooms': bathrooms,
    };
  }
}