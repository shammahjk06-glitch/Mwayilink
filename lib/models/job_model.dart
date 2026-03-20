class JobModel {
  final String title;
  final String company;
  final String location;
  final String description;
  final String datePosted;

  JobModel({
    required this.title,
    required this.company,
    required this.location,
    required this.description,
    required this.datePosted,
  });

  // You can add additional methods or functionality if needed
  @override
  String toString() {
    return 'JobModel{title: $title, company: $company, location: $location, description: $description, datePosted: $datePosted}';
  }
}