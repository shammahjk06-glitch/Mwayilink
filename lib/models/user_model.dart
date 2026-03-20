class UserModel {
    String id;
    String name;
    String email;
    // Other user fields can be added here

    UserModel({this.id, this.name, this.email});

    // Factory method to create a UserModel from a map
    factory UserModel.fromMap(Map<String, dynamic> data) {
        return UserModel(
            id: data['id'],
            name: data['name'],
            email: data['email'],
        );
    }

    // Method to convert UserModel to a map
    Map<String, dynamic> toMap() {
        return {
            'id': id,
            'name': name,
            'email': email,
        };
    }
}