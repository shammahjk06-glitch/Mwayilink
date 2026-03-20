mwayilink/
├── android/
├── ios/
├── web/
├── assets/
│   ├── images/
│   └── icons/
├── lib/
│   ├── main.dart
│   ├── firebase_options.dart
│   ├── constants/
│   │   ├── app_colors.dart
│   │   ├── app_strings.dart
│   │   └── app_theme.dart
│   ├── models/
│   │   ├── user_model.dart
│   │   ├── job_model.dart
│   │   ├── house_model.dart
│   │   ├── product_model.dart
│   │   ├── other_item_model.dart
│   │   ├── subscription_model.dart
│   │   ├── payment_model.dart
│   │   └── message_model.dart
│   ├── services/
│   │   ├── auth_service.dart
│   │   ├── firestore_service.dart
│   │   └── storage_service.dart
│   ├── providers/
│   │   ├── auth_provider.dart
│   │   ├── listing_provider.dart
│   │   └── subscription_provider.dart
│   ├── widgets/
│   │   ├── listing_card.dart
│   │   ├── custom_button.dart
│   │   ├── custom_text_field.dart
│   │   ├── contact_lock_widget.dart
│   │   └── category_card.dart
│   └── screens/
│       ├── splash_screen.dart
│       ├── auth/login_screen.dart
│       ├── auth/register_screen.dart
│       ├── home/home_screen.dart
│       ├── jobs/(3 files)
│       ├── houses/(3 files)
│       ├── products/(3 files)
│       ├── other_items/(3 files)
│       ├── subscription/subscription_screen.dart
│       ├── payment/payment_proof_screen.dart
│       ├── boost/boost_listing_screen.dart
│       ├── verify/verify_account_screen.dart
│       ├── chat/chat_list_screen.dart
│       ├── chat/chat_screen.dart
│       ├── profile/profile_screen.dart
│       ├── saved/saved_listings_screen.dart
│       ├── notifications/notifications_screen.dart
│       ├── reports/reports_screen.dart
│       └── settings/settings_screen.dart
└── pubspec.yamlname: mwayilink
description: Malawi's marketplace for jobs, houses, farm products & more.
publish_to: 'none'
version: 1.0.0+1

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter

  # Firebase
  firebase_core: ^2.24.2
  firebase_auth: ^4.15.3
  cloud_firestore: ^4.13.6
  firebase_storage: ^11.5.6
  firebase_messaging: ^14.7.10

  # State Management
  provider: ^6.1.1

  # UI
  cupertino_icons: ^1.0.6
  cached_network_image: ^3.3.1
  flutter_spinkit: ^5.2.0

  # Image
  image_picker: ^1.0.7

  # Utilities
  shared_preferences: ^2.2.2
  intl: ^0.18.1
  url_launcher: ^6.2.2
  timeago: ^3.6.1
  uuid: ^4.2.2

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0

flutter:
  uses-material-design: true
  assets:
    - assets/images/
    - assets/icons/// ============================================================
// Run: flutterfire configure --project=YOUR_PROJECT_ID
// to auto-generate this file with your real credentials
// ============================================================

import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) return web;
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      default:
        throw UnsupportedError('Unsupported platform');
    }
  }

  // TODO: Replace with your actual Firebase project config
  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'YOUR_WEB_API_KEY',
    appId: 'YOUR_WEB_APP_ID',
    messagingSenderId: 'YOUR_SENDER_ID',
    projectId: 'mwayilink',
    authDomain: 'mwayilink.firebaseapp.com',
    storageBucket: 'mwayilink.appspot.com',
    measurementId: 'YOUR_MEASUREMENT_ID',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'YOUR_ANDROID_API_KEY',
    appId: 'YOUR_ANDROID_APP_ID',
    messagingSenderId: 'YOUR_SENDER_ID',
    projectId: 'mwayilink',
    storageBucket: 'mwayilink.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'YOUR_IOS_API_KEY',
    appId: 'YOUR_IOS_APP_ID',
    messagingSenderId: 'YOUR_SENDER_ID',
    projectId: 'mwayilink',
    storageBucket: 'mwayilink.appspot.com',
    iosBundleId: 'com.mwayilink.app',
  );
}import 'package:flutter/material.dart';

class AppColors {
  static const Color primary = Color(0xFF4CAF50);
  static const Color accent = Color(0xFFFFA726);
  static const Color background = Color(0xFFF5F5F5);
  static const Color white = Colors.white;
  static const Color black = Colors.black;
  static const Color grey = Color(0xFF9E9E9E);
  static const Color lightGrey = Color(0xFFE0E0E0);
  static const Color darkGrey = Color(0xFF616161);
  static const Color error = Color(0xFFE53935);
  static const Color success = Color(0xFF43A047);
  static const Color warning = Color(0xFFFB8C00);
  static const Color primaryLight = Color(0xFFC8E6C9);
  static const Color accentLight = Color(0xFFFFE0B2);
  static const Color cardBackground = Colors.white;
}class AppStrings {
  static const String appName = 'Mwayilink';
  static const String tagline = "Malawi's Marketplace";

  // Payment Numbers
  static const String paymentNumber1 = '0984658754';
  static const String paymentNumber2 = '0887847089';

  // Fees
  static const String postFee = 'K2,000';
  static const String boostFee = 'K5,000';
  static const String verifyFee = 'K15,000';
  static const String dailySubFee = 'K1,000';
  static const String weeklySubFee = 'K7,000';
  static const String monthlySubFee = 'K15,000';

  // Malawi Districts
  static const List<String> districts = [
    'All Districts',
    'Blantyre', 'Lilongwe', 'Mzuzu', 'Zomba',
    'Kasungu', 'Mangochi', 'Salima', 'Dedza',
    'Ntcheu', 'Balaka', 'Machinga', 'Chiradzulu',
    'Mulanje', 'Thyolo', 'Mwanza', 'Neno',
    'Phalombe', 'Chikwawa', 'Nsanje', 'Karonga',
    'Chitipa', 'Rumphi', 'Nkhata Bay', 'Mzimba',
    'Nkhotakota', 'Ntchisi', 'Dowa', 'Mchinji',
  ];

  static String paymentInstructions(String amount) =>
      'Send $amount to either:\n'
      '• $paymentNumber1 (Airtel Money)\n'
      '• $paymentNumber2 (TNM Mpamba)\n\n'
      'Upload proof screenshot below.\n'
      'Admin will approve within 24 hours.';
}import 'package:flutter/material.dart';
import 'app_colors.dart';

class AppTheme {
  static TextStyle get headingLarge => const TextStyle(
        fontSize: 24, fontWeight: FontWeight.bold, color: AppColors.black);

  static TextStyle get headingMedium => const TextStyle(
        fontSize: 20, fontWeight: FontWeight.bold, color: AppColors.black);

  static TextStyle get headingSmall => const TextStyle(
        fontSize: 16, fontWeight: FontWeight.bold, color: AppColors.black);

  static TextStyle get bodyText =>
      const TextStyle(fontSize: 14, color: AppColors.darkGrey);

  static TextStyle get caption =>
      const TextStyle(fontSize: 12, color: AppColors.grey);

  static TextStyle get priceText => const TextStyle(
        fontSize: 16, fontWeight: FontWeight.bold, color: AppColors.primary);

  static BoxDecoration get cardDecoration => BoxDecoration(
        color: AppColors.cardBackground,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [
          BoxShadow(
              color: Colors.black.withOpacity(0.08),
              blurRadius: 8,
              offset: const Offset(0, 2)),
        ],
      );
}import 'package:cloud_firestore/cloud_firestore.dart';

class UserModel {
  final String id;
  final String name;
  final String email;
  final String phone;
  final String? profileImageUrl;
  final bool isVerified;
  final bool isAdmin;
  final String? district;
  final DateTime createdAt;
  final List<String> savedListings;
  final bool subscriptionActive;
  final DateTime? subscriptionExpiry;

  UserModel({
    required this.id,
    required this.name,
    required this.email,
    required this.phone,
    this.profileImageUrl,
    this.isVerified = false,
    this.isAdmin = false,
    this.district,
    required this.createdAt,
    this.savedListings = const [],
    this.subscriptionActive = false,
    this.subscriptionExpiry,
  });

  bool get hasActiveSubscription {
    if (!subscriptionActive) return false;
    if (subscriptionExpiry == null) return false;
    return DateTime.now().isBefore(subscriptionExpiry!);
  }

  Map<String, dynamic> toJson() => {
        'id': id, 'name': name, 'email': email, 'phone': phone,
        'profileImageUrl': profileImageUrl, 'isVerified': isVerified,
        'isAdmin': isAdmin, 'district': district,
        'createdAt': Timestamp.fromDate(createdAt),
        'savedListings': savedListings,
        'subscriptionActive': subscriptionActive,
        'subscriptionExpiry': subscriptionExpiry != null
            ? Timestamp.fromDate(subscriptionExpiry!)
            : null,
      };

  factory UserModel.fromJson(Map<String, dynamic> json) => UserModel(
        id: json['id'] ?? '',
        name: json['name'] ?? '',
        email: json['email'] ?? '',
        phone: json['phone'] ?? '',
        profileImageUrl: json['profileImageUrl'],
        isVerified: json['isVerified'] ?? false,
        isAdmin: json['isAdmin'] ?? false,
        district: json['district'],
        createdAt:
            (json['createdAt'] as Timestamp?)?.toDate() ?? DateTime.now(),
        savedListings: List<String>.from(json['savedListings'] ?? []),
        subscriptionActive: json['subscriptionActive'] ?? false,
        subscriptionExpiry:
            (json['subscriptionExpiry'] as Timestamp?)?.toDate(),
      );

  UserModel copyWith({
    String? name, String? phone, String? profileImageUrl,
    bool? isVerified, bool? subscriptionActive,
    DateTime? subscriptionExpiry, List<String>? savedListings,
  }) {
    return UserModel(
      id: id, name: name ?? this.name, email: email,
      phone: phone ?? this.phone,
      profileImageUrl: profileImageUrl ?? this.profileImageUrl,
      isVerified: isVerified ?? this.isVerified, isAdmin: isAdmin,
      district: district, createdAt: createdAt,
      savedListings: savedListings ?? this.savedListings,
      subscriptionActive: subscriptionActive ?? this.subscriptionActive,
      subscriptionExpiry: subscriptionExpiry ?? this.subscriptionExpiry,
    );
  }
}import 'package:cloud_firestore/cloud_firestore.dart';

class JobModel {
  final String id, title, company, description, requirements;
  final String salary, district, jobType, category;
  final String contactName, contactPhone, contactEmail;
  final String postedById, postedByName;
  final DateTime postedAt;
  final bool isBoosted, isActive, isApproved;
  final List<String> imageUrls;

  JobModel({
    required this.id, required this.title, required this.company,
    required this.description, required this.requirements,
    required this.salary, required this.district, required this.jobType,
    required this.category, required this.contactName,
    required this.contactPhone, required this.contactEmail,
    required this.postedById, required this.postedByName,
    required this.postedAt, this.isBoosted = false,
    this.isActive = true, this.isApproved = false,
    this.imageUrls = const [],
  });

  Map<String, dynamic> toJson() => {
        'id': id, 'title': title, 'company': company,
        'description': description, 'requirements': requirements,
        'salary': salary, 'district': district, 'jobType': jobType,
        'category': category, 'contactName': contactName,
        'contactPhone': contactPhone, 'contactEmail': contactEmail,
        'postedById': postedById, 'postedByName': postedByName,
        'postedAt': Timestamp.fromDate(postedAt), 'isBoosted': isBoosted,
        'isActive': isActive, 'isApproved': isApproved, 'imageUrls': imageUrls,
      };

  factory JobModel.fromJson(Map<String, dynamic> json) => JobModel(
        id: json['id'] ?? '', title: json['title'] ?? '',
        company: json['company'] ?? '', description: json['description'] ?? '',
        requirements: json['requirements'] ?? '', salary: json['salary'] ?? '',
        district: json['district'] ?? '', jobType: json['jobType'] ?? 'Full-time',
        category: json['category'] ?? '',
        contactName: json['contactName'] ?? '',
        contactPhone: json['contactPhone'] ?? '',
        contactEmail: json['contactEmail'] ?? '',
        postedById: json['postedById'] ?? '',
        postedByName: json['postedByName'] ?? '',
        postedAt:
            (json['postedAt'] as Timestamp?)?.toDate() ?? DateTime.now(),
        isBoosted: json['isBoosted'] ?? false,
        isActive: json['isActive'] ?? true,
        isApproved: json['isApproved'] ?? false,
        imageUrls: List<String>.from(json['imageUrls'] ?? []),
      );
}import 'package:cloud_firestore/cloud_firestore.dart';

class HouseModel {
  final String id, title, description, price, priceType, houseType;
  final int bedrooms, bathrooms;
  final String district, address;
  final String contactName, contactPhone, contactEmail;
  final String postedById, postedByName;
  final DateTime postedAt;
  final bool isBoosted, isActive, isApproved;
  final List<String> imageUrls, amenities;

  HouseModel({
    required this.id, required this.title, required this.description,
    required this.price, required this.priceType, required this.houseType,
    required this.bedrooms, required this.bathrooms,
    required this.district, required this.address,
    required this.contactName, required this.contactPhone,
    required this.contactEmail, required this.postedById,
    required this.postedByName, required this.postedAt,
    this.isBoosted = false, this.isActive = true, this.isApproved = false,
    this.imageUrls = const [], this.amenities = const [],
  });

  Map<String, dynamic> toJson() => {
        'id': id, 'title': title, 'description': description,
        'price': price, 'priceType': priceType, 'houseType': houseType,
        'bedrooms': bedrooms, 'bathrooms': bathrooms,
        'district': district, 'address': address,
        'contactName': contactName, 'contactPhone': contactPhone,
        'contactEmail': contactEmail, 'postedById': postedById,
        'postedByName': postedByName,
        'postedAt': Timestamp.fromDate(postedAt),
        'isBoosted': isBoosted, 'isActive': isActive,
        'isApproved': isApproved, 'imageUrls': imageUrls,
        'amenities': amenities,
      };

  factory HouseModel.fromJson(Map<String, dynamic> json) => HouseModel(
        id: json['id'] ?? '', title: json['title'] ?? '',
        description: json['description'] ?? '', price: json['price'] ?? '',
        priceType: json['priceType'] ?? 'For Rent',
        houseType: json['houseType'] ?? 'House',
        bedrooms: json['bedrooms'] ?? 1, bathrooms: json['bathrooms'] ?? 1,
        district: json['district'] ?? '', address: json['address'] ?? '',
        contactName: json['contactName'] ?? '',
        contactPhone: json['contactPhone'] ?? '',
        contactEmail: json['contactEmail'] ?? '',
        postedById: json['postedById'] ?? '',
        postedByName: json['postedByName'] ?? '',
        postedAt:
            (json['postedAt'] as Timestamp?)?.toDate() ?? DateTime.now(),
        isBoosted: json['isBoosted'] ?? false,
        isActive: json['isActive'] ?? true,
        isApproved: json['isApproved'] ?? false,
        imageUrls: List<String>.from(json['imageUrls'] ?? []),
        amenities: List<String>.from(json['amenities'] ?? []),
      );
}import 'package:cloud_firestore/cloud_firestore.dart';

class ProductModel {
  final String id, title, description, price, unit, category, district;
  final String contactName, contactPhone, contactEmail;
  final String postedById, postedByName;
  final DateTime postedAt;
  final bool isBoosted, isActive, isApproved;
  final List<String> imageUrls;
  final int quantity;

  ProductModel({
    required this.id, required this.title, required this.description,
    required this.price, required this.unit, required this.category,
    required this.district, required this.contactName,
    required this.contactPhone, required this.contactEmail,
    required this.postedById, required this.postedByName,
    required this.postedAt, this.isBoosted = false,
    this.isActive = true, this.isApproved = false,
    this.imageUrls = const [], this.quantity = 1,
  });

  Map<String, dynamic> toJson() => {
        'id': id, 'title': title, 'description': description,
        'price': price, 'unit': unit, 'category': category,
        'district': district, 'contactName': contactName,
        'contactPhone': contactPhone, 'contactEmail': contactEmail,
        'postedById': postedById, 'postedByName': postedByName,
        'postedAt': Timestamp.fromDate(postedAt), 'isBoosted': isBoosted,
        'isActive': isActive, 'isApproved': isApproved,
        'imageUrls': imageUrls, 'quantity': quantity,
      };

  factory ProductModel.fromJson(Map<String, dynamic> json) => ProductModel(
        id: json['id'] ?? '', title: json['title'] ?? '',
        description: json['description'] ?? '', price: json['price'] ?? '',
        unit: json['unit'] ?? 'kg', category: json['category'] ?? '',
        district: json['district'] ?? '',
        contactName: json['contactName'] ?? '',
        contactPhone: json['contactPhone'] ?? '',
        contactEmail: json['contactEmail'] ?? '',
        postedById: json['postedById'] ?? '',
        postedByName: json['postedByName'] ?? '',
        postedAt:
            (json['postedAt'] as Timestamp?)?.toDate() ?? DateTime.now(),
        isBoosted: json['isBoosted'] ?? false,
        isActive: json['isActive'] ?? true,
        isApproved: json['isApproved'] ?? false,
        imageUrls: List<String>.from(json['imageUrls'] ?? []),
        quantity: json['quantity'] ?? 1,
      );
}import 'package:cloud_firestore/cloud_firestore.dart';

class OtherItemModel {
  final String id, title, description, price, category, condition, district;
  final String contactName, contactPhone, contactEmail;
  final String postedById, postedByName;
  final DateTime postedAt;
  final bool isBoosted, isActive, isApproved;
  final List<String> imageUrls;

  OtherItemModel({
    required this.id, required this.title, required this.description,
    required this.price, required this.category, required this.condition,
    required this.district, required this.contactName,
    required this.contactPhone, required this.contactEmail,
    required this.postedById, required this.postedByName,
    required this.postedAt, this.isBoosted = false,
    this.isActive = true, this.isApproved = false,
    this.imageUrls = const [],
  });

  Map<String, dynamic> toJson() => {
        'id': id, 'title': title, 'description': description,
        'price': price, 'category': category, 'condition': condition,
        'district': district, 'contactName': contactName,
        'contactPhone': contactPhone, 'contactEmail': contactEmail,
        'postedById': postedById, 'postedByName': postedByName,
        'postedAt': Timestamp.fromDate(postedAt), 'isBoosted': isBoosted,
        'isActive': isActive, 'isApproved': isApproved, 'imageUrls': imageUrls,
      };

  factory OtherItemModel.fromJson(Map<String, dynamic> json) => OtherItemModel(
        id: json['id'] ?? '', title: json['title'] ?? '',
        description: json['description'] ?? '', price: json['price'] ?? '',
        category: json['category'] ?? '', condition: json['condition'] ?? 'Used',
        district: json['district'] ?? '',
        contactName: json['contactName'] ?? '',
        contactPhone: json['contactPhone'] ?? '',
        contactEmail: json['contactEmail'] ?? '',
        postedById: json['postedById'] ?? '',
        postedByName: json['postedByName'] ?? '',
        postedAt:
            (json['postedAt'] as Timestamp?)?.toDate() ?? DateTime.now(),
        isBoosted: json['isBoosted'] ?? false,
        isActive: json['isActive'] ?? true,
        isApproved: json['isApproved'] ?? false,
        imageUrls: List<String>.from(json['imageUrls'] ?? []),
      );
}import 'package:cloud_firestore/cloud_firestore.dart';

class SubscriptionModel {
  final String id, userId, plan, amount, status;
  final String paymentProofUrl, paymentNumber;
  final DateTime createdAt;
  final DateTime? approvedAt, expiresAt;
  final String? adminNote;

  SubscriptionModel({
    required this.id, required this.userId, required this.plan,
    required this.amount, required this.status,
    required this.paymentProofUrl, required this.paymentNumber,
    required this.createdAt, this.approvedAt, this.expiresAt,
    this.adminNote,
  });

  Map<String, dynamic> toJson() => {
        'id': id, 'userId': userId, 'plan': plan, 'amount': amount,
        'status': status, 'paymentProofUrl': paymentProofUrl,
        'paymentNumber': paymentNumber,
        'createdAt': Timestamp.fromDate(createdAt),
        'approvedAt': approvedAt != null ? Timestamp.fromDate(approvedAt!) : null,
        'expiresAt': expiresAt != null ? Timestamp.fromDate(expiresAt!) : null,
        'adminNote': adminNote,
      };

  factory SubscriptionModel.fromJson(Map<String, dynamic> json) =>
      SubscriptionModel(
        id: json['id'] ?? '', userId: json['userId'] ?? '',
        plan: json['plan'] ?? 'monthly', amount: json['amount'] ?? '',
        status: json['status'] ?? 'pending',
        paymentProofUrl: json['paymentProofUrl'] ?? '',
        paymentNumber: json['paymentNumber'] ?? '',
        createdAt:
            (json['createdAt'] as Timestamp?)?.toDate() ?? DateTime.now(),
        approvedAt: (json['approvedAt'] as Timestamp?)?.toDate(),
        expiresAt: (json['expiresAt'] as Timestamp?)?.toDate(),
        adminNote: json['adminNote'],
      );
}import 'package:cloud_firestore/cloud_firestore.dart';

class PaymentModel {
  final String id, userId, paymentType, amount, status;
  final String paymentProofUrl, paymentNumber;
  final String? listingId, listingCategory, adminNote;
  final DateTime createdAt;
  final DateTime? approvedAt;

  PaymentModel({
    required this.id, required this.userId, required this.paymentType,
    required this.amount, required this.status,
    required this.paymentProofUrl, required this.paymentNumber,
    this.listingId, this.listingCategory, this.adminNote,
    required this.createdAt, this.approvedAt,
  });

  Map<String, dynamic> toJson() => {
        'id': id, 'userId': userId, 'paymentType': paymentType,
        'amount': amount, 'status': status,
        'paymentProofUrl': paymentProofUrl, 'paymentNumber': paymentNumber,
        'listingId': listingId, 'listingCategory': listingCategory,
        'createdAt': Timestamp.fromDate(createdAt),
        'approvedAt': approvedAt != null ? Timestamp.fromDate(approvedAt!) : null,
        'adminNote': adminNote,
      };

  factory PaymentModel.fromJson(Map<String, dynamic> json) => PaymentModel(
        id: json['id'] ?? '', userId: json['userId'] ?? '',
        paymentType: json['paymentType'] ?? '', amount: json['amount'] ?? '',
        status: json['status'] ?? 'pending',
        paymentProofUrl: json['paymentProofUrl'] ?? '',
        paymentNumber: json['paymentNumber'] ?? '',
        listingId: json['listingId'], listingCategory: json['listingCategory'],
        adminNote: json['adminNote'],
        createdAt:
            (json['createdAt'] as Timestamp?)?.toDate() ?? DateTime.now(),
        approvedAt: (json['approvedAt'] as Timestamp?)?.toDate(),
      );
}import 'package:cloud_firestore/cloud_firestore.dart';

class MessageModel {
  final String id, chatId, senderId, senderName, content;
  final DateTime sentAt;
  final bool isRead;
  final String? imageUrl;

  MessageModel({
    required this.id, required this.chatId, required this.senderId,
    required this.senderName, required this.content, required this.sentAt,
    this.isRead = false, this.imageUrl,
  });

  Map<String, dynamic> toJson() => {
        'id': id, 'chatId': chatId, 'senderId': senderId,
        'senderName': senderName, 'content': content,
        'sentAt': Timestamp.fromDate(sentAt),
        'isRead': isRead, 'imageUrl': imageUrl,
      };

  factory MessageModel.fromJson(Map<String, dynamic> json) => MessageModel(
        id: json['id'] ?? '', chatId: json['chatId'] ?? '',
        senderId: json['senderId'] ?? '', senderName: json['senderName'] ?? '',
        content: json['content'] ?? '',
        sentAt: (json['sentAt'] as Timestamp?)?.toDate() ?? DateTime.now(),
        isRead: json['isRead'] ?? false, imageUrl: json['imageUrl'],
      );
}

class ChatModel {
  final String id, lastMessage;
  final List<String> participants;
  final Map<String, String> participantNames;
  final DateTime lastMessageAt;
  final String? relatedListingId, relatedListingTitle;

  ChatModel({
    required this.id, required this.participants,
    required this.participantNames, required this.lastMessage,
    required this.lastMessageAt, this.relatedListingId,
    this.relatedListingTitle,
  });

  Map<String, dynamic> toJson() => {
        'id': id, 'participants': participants,
        'participantNames': participantNames, 'lastMessage': lastMessage,
        'lastMessageAt': Timestamp.fromDate(lastMessageAt),
        'relatedListingId': relatedListingId,
        'relatedListingTitle': relatedListingTitle,
      };

  factory ChatModel.fromJson(Map<String, dynamic> json) => ChatModel(
        id: json['id'] ?? '',
        participants: List<String>.from(json['participants'] ?? []),
        participantNames:
            Map<String, String>.from(json['participantNames'] ?? {}),
        lastMessage: json['lastMessage'] ?? '',
        lastMessageAt:
            (json['lastMessageAt'] as Timestamp?)?.toDate() ?? DateTime.now(),
        relatedListingId: json['relatedListingId'],
        relatedListingTitle: json['relatedListingTitle'],
      );
}import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import '../models/user_model.dart';

class AuthService {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  User? get currentUser => _auth.currentUser;
  Stream<User?> get authStateChanges => _auth.authStateChanges();

  Future<UserModel?> registerWithEmail({
    required String email,
    required String password,
    required String name,
    required String phone,
  }) async {
    final credential = await _auth.createUserWithEmailAndPassword(
      email: email, password: password);
    await credential.user!.updateDisplayName(name);

    final user = UserModel(
      id: credential.user!.uid,
      name: name, email: email, phone: phone,
      createdAt: DateTime.now(),
    );
    await _db.collection('users').doc(user.id).set(user.toJson());
    return user;
  }

  Future<UserModel?> loginWithEmail({
    required String email, required String password}) async {
    final credential = await _auth.signInWithEmailAndPassword(
      email: email, password: password);
    return getUserData(credential.user!.uid);
  }

  Future<UserModel?> getUserData(String uid) async {
    final doc = await _db.collection('users').doc(uid).get();
    if (doc.exists) return UserModel.fromJson(doc.data()!);
    return null;
  }

  Future<void> logout() async => await _auth.signOut();

  Future<void> resetPassword(String email) async =>
      await _auth.sendPasswordResetEmail(email: email);

  Future<void> updateUserProfile(String uid, Map<String, dynamic> data) async =>
      await _db.collection('users').doc(uid).update(data);
}import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:uuid/uuid.dart';
import '../models/job_model.dart';
import '../models/house_model.dart';
import '../models/product_model.dart';
import '../models/other_item_model.dart';
import '../models/subscription_model.dart';
import '../models/payment_model.dart';
import '../models/message_model.dart';

class FirestoreService {
  final FirebaseFirestore _db = FirebaseFirestore.instance;
  final _uuid = const Uuid();

  // ── HELPER: Sort boosted first ──────────────────────────────
  List<T> _sortBoosted<T>(List<T> items, bool Function(T) isBoosted,
      DateTime Function(T) getDate) {
    items.sort((a, b) {
      if (isBoosted(a) && !isBoosted(b)) return -1;
      if (!isBoosted(a) && isBoosted(b)) return 1;
      return getDate(b).compareTo(getDate(a));
    });
    return items;
  }

  // ── JOBS ────────────────────────────────────────────────────
  Stream<List<JobModel>> getJobs({String? district}) {
    Query q = _db.collection('jobs')
        .where('isActive', isEqualTo: true)
        .where('isApproved', isEqualTo: true);
    if (district != null && district != 'All Districts') {
      q = q.where('district', isEqualTo: district);
    }
    return q.snapshots().map((s) {
      final jobs =
          s.docs.map((d) => JobModel.fromJson(d.data() as Map<String, dynamic>)).toList();
      return _sortBoosted(jobs, (j) => j.isBoosted, (j) => j.postedAt);
    });
  }

  Future<JobModel?> getJob(String id) async {
    final d = await _db.collection('jobs').doc(id).get();
    return d.exists ? JobModel.fromJson(d.data()!) : null;
  }

  // ADMIN APPROVAL: After payment verified, admin sets isApproved=true on the job doc
  Future<String> postJob(JobModel job) async {
    final id = _uuid.v4();
    await _db.collection('jobs').doc(id).set(
        JobModel(
          id: id, title: job.title, company: job.company,
          description: job.description, requirements: job.requirements,
          salary: job.salary, district: job.district, jobType: job.jobType,
          category: job.category, contactName: job.contactName,
          contactPhone: job.contactPhone, contactEmail: job.contactEmail,
          postedById: job.postedById, postedByName: job.postedByName,
          postedAt: DateTime.now(), isApproved: false,
        ).toJson());
    return id;
  }

  Future<void> updateListing(String collection, String id, Map<String, dynamic> data) async =>
      await _db.collection(collection).doc(id).update(data);

  // ── HOUSES ──────────────────────────────────────────────────
  Stream<List<HouseModel>> getHouses({String? district, String? type}) {
    Query q = _db.collection('houses')
        .where('isActive', isEqualTo: true)
        .where('isApproved', isEqualTo: true);
    if (district != null && district != 'All Districts') {
      q = q.where('district', isEqualTo: district);
    }
    if (type != null && type != 'All') q = q.where('priceType', isEqualTo: type);
    return q.snapshots().map((s) {
      final houses =
          s.docs.map((d) => HouseModel.fromJson(d.data() as Map<String, dynamic>)).toList();
      return _sortBoosted(houses, (h) => h.isBoosted, (h) => h.postedAt);
    });
  }

  Future<HouseModel?> getHouse(String id) async {
    final d = await _db.collection('houses').doc(id).get();
    return d.exists ? HouseModel.fromJson(d.data()!) : null;
  }

  Future<String> postHouse(HouseModel house) async {
    final id = _uuid.v4();
    await _db.collection('houses').doc(id).set(HouseModel(
      id: id, title: house.title, description: house.description,
      price: house.price, priceType: house.priceType,
      houseType: house.houseType, bedrooms: house.bedrooms,
      bathrooms: house.bathrooms, district: house.district,
      address: house.address, contactName: house.contactName,
      contactPhone: house.contactPhone, contactEmail: house.contactEmail,
      postedById: house.postedById, postedByName: house.postedByName,
      postedAt: DateTime.now(), imageUrls: house.imageUrls,
      amenities: house.amenities, isApproved: false,
    ).toJson());
    return id;
  }

  // ── PRODUCTS ────────────────────────────────────────────────
  Stream<List<ProductModel>> getProducts({String? district, String? category}) {
    Query q = _db.collection('products')
        .where('isActive', isEqualTo: true)
        .where('isApproved', isEqualTo: true);
    if (district != null && district != 'All Districts') {
      q = q.where('district', isEqualTo: district);
    }
    if (category != null && category != 'All') {
      q = q.where('category', isEqualTo: category);
    }
    return q.snapshots().map((s) {
      final products =
          s.docs.map((d) => ProductModel.fromJson(d.data() as Map<String, dynamic>)).toList();
      return _sortBoosted(products, (p) => p.isBoosted, (p) => p.postedAt);
    });
  }

  Future<ProductModel?> getProduct(String id) async {
    final d = await _db.collection('products').doc(id).get();
    return d.exists ? ProductModel.fromJson(d.data()!) : null;
  }

  Future<String> postProduct(ProductModel product) async {
    final id = _uuid.v4();
    await _db.collection('products').doc(id).set(ProductModel(
      id: id, title: product.title, description: product.description,
      price: product.price, unit: product.unit, category: product.category,
      district: product.district, contactName: product.contactName,
      contactPhone: product.contactPhone, contactEmail: product.contactEmail,
      postedById: product.postedById, postedByName: product.postedByName,
      postedAt: DateTime.now(), imageUrls: product.imageUrls,
      quantity: product.quantity, isApproved: false,
    ).toJson());
    return id;
  }

  // ── OTHER ITEMS ─────────────────────────────────────────────
  Stream<List<OtherItemModel>> getOtherItems({String? district, String? category}) {
    Query q = _db.collection('other_items')
        .where('isActive', isEqualTo: true)
        .where('isApproved', isEqualTo: true);
    if (district != null && district != 'All Districts') {
      q = q.where('district', isEqualTo: district);
    }
    if (category != null && category != 'All') {
      q = q.where('category', isEqualTo: category);
    }
    return q.snapshots().map((s) {
      final items =
          s.docs.map((d) => OtherItemModel.fromJson(d.data() as Map<String, dynamic>)).toList();
      return _sortBoosted(items, (i) => i.isBoosted, (i) => i.postedAt);
    });
  }

  Future<OtherItemModel?> getOtherItem(String id) async {
    final d = await _db.collection('other_items').doc(id).get();
    return d.exists ? OtherItemModel.fromJson(d.data()!) : null;
  }

  Future<String> postOtherItem(OtherItemModel item) async {
    final id = _uuid.v4();
    await _db.collection('other_items').doc(id).set(OtherItemModel(
      id: id, title: item.title, description: item.description,
      price: item.price, category: item.category, condition: item.condition,
      district: item.district, contactName: item.contactName,
      contactPhone: item.contactPhone, contactEmail: item.contactEmail,
      postedById: item.postedById, postedByName: item.postedByName,
      postedAt: DateTime.now(), imageUrls: item.imageUrls, isApproved: false,
    ).toJson());
    return id;
  }

  // ── SUBSCRIPTIONS ───────────────────────────────────────────
  // ADMIN APPROVAL POINT: Admin reads 'subscriptions' collection,
  // sets status='active' and expiresAt, then also updates
  // users/{userId} → subscriptionActive=true, subscriptionExpiry=timestamp
  Future<String> createSubscription(SubscriptionModel sub) async {
    final id = _uuid.v4();
    await _db.collection('subscriptions').doc(id).set(SubscriptionModel(
      id: id, userId: sub.userId, plan: sub.plan, amount: sub.amount,
      status: 'pending', paymentProofUrl: sub.paymentProofUrl,
      paymentNumber: sub.paymentNumber, createdAt: DateTime.now(),
    ).toJson());
    return id;
  }

  Future<SubscriptionModel?> getUserActiveSubscription(String userId) async {
    final snap = await _db.collection('subscriptions')
        .where('userId', isEqualTo: userId)
        .where('status', isEqualTo: 'active')
        .orderBy('createdAt', descending: true)
        .limit(1)
        .get();
    if (snap.docs.isNotEmpty) {
      return SubscriptionModel.fromJson(snap.docs.first.data());
    }
    return null;
  }

  // ── PAYMENTS ────────────────────────────────────────────────
  // ADMIN APPROVAL POINT: Admin reads 'payments' collection,
  // sets status='approved', then activates the relevant feature
  Future<String> createPayment(PaymentModel payment) async {
    final id = _uuid.v4();
    await _db.collection('payments').doc(id).set(PaymentModel(
      id: id, userId: payment.userId, paymentType: payment.paymentType,
      amount: payment.amount, status: 'pending',
      paymentProofUrl: payment.paymentProofUrl,
      paymentNumber: payment.paymentNumber, listingId: payment.listingId,
      listingCategory: payment.listingCategory, createdAt: DateTime.now(),
    ).toJson());
    return id;
  }

  Stream<List<PaymentModel>> getUserPayments(String userId) => _db
      .collection('payments')
      .where('userId', isEqualTo: userId)
      .orderBy('createdAt', descending: true)
      .snapshots()
      .map((s) => s.docs.map((d) => PaymentModel.fromJson(d.data())).toList());

  // ── CHATS / MESSAGES ────────────────────────────────────────
  Stream<List<ChatModel>> getUserChats(String userId) => _db
      .collection('chats')
      .where('participants', arrayContains: userId)
      .orderBy('lastMessageAt', descending: true)
      .snapshots()
      .map((s) => s.docs.map((d) => ChatModel.fromJson(d.data())).toList());

  Stream<List<MessageModel>> getChatMessages(String chatId) => _db
      .collection('messages')
      .where('chatId', isEqualTo: chatId)
      .orderBy('sentAt')
      .snapshots()
      .map((s) => s.docs.map((d) => MessageModel.fromJson(d.data())).toList());

  Future<String> sendMessage({
    required String senderId, required String senderName,
    required String recipientId, required String recipientName,
    required String content, String? relatedListingId,
    String? relatedListingTitle,
  }) async {
    final parts = [senderId, recipientId]..sort();
    final chatId = parts.join('_');
    final chatDoc = await _db.collection('chats').doc(chatId).get();

    if (!chatDoc.exists) {
      await _db.collection('chats').doc(chatId).set({
        'id': chatId,
        'participants': [senderId, recipientId],
        'participantNames': {senderId: senderName, recipientId: recipientName},
        'lastMessage': content,
        'lastMessageAt': Timestamp.fromDate(DateTime.now()),
        'relatedListingId': relatedListingId,
        'relatedListingTitle': relatedListingTitle,
      });
    } else {
      await _db.collection('chats').doc(chatId).update({
        'lastMessage': content,
        'lastMessageAt': Timestamp.fromDate(DateTime.now()),
      });
    }
    final msgId = _uuid.v4();
    await _db.collection('messages').doc(msgId).set(MessageModel(
      id: msgId, chatId: chatId, senderId: senderId,
      senderName: senderName, content: content, sentAt: DateTime.now(),
    ).toJson());
    return chatId;
  }

  // ── SAVED LISTINGS ──────────────────────────────────────────
  Future<void> toggleSavedListing(String userId, String listingId) async {
    final ref = _db.collection('users').doc(userId);
    final doc = await ref.get();
    final saved = List<String>.from(doc.data()?['savedListings'] ?? []);
    if (saved.contains(listingId)) {
      saved.remove(listingId);
    } else {
      saved.add(listingId);
    }
    await ref.update({'savedListings': saved});
  }

  // ── NOTIFICATIONS ───────────────────────────────────────────
  Stream<List<Map<String, dynamic>>> getUserNotifications(String userId) =>
      _db.collection('notifications')
          .where('userId', isEqualTo: userId)
          .orderBy('createdAt', descending: true)
          .snapshots()
          .map((s) => s.docs.map((d) => d.data()).toList());

  Future<void> createNotification({
    required String userId, required String title,
    required String body, String? type,
  }) async {
    final id = _uuid.v4();
    await _db.collection('notifications').doc(id).set({
      'id': id, 'userId': userId, 'title': title,
      'body': body, 'type': type, 'isRead': false,
      'createdAt': Timestamp.fromDate(DateTime.now()),
    });
  }

  Future<void> markNotificationRead(String notifId) async =>
      await _db.collection('notifications').doc(notifId).update({'isRead': true});

  // ── REPORTS ─────────────────────────────────────────────────
  Future<void> submitReport({
    required String userId, required String category,
    required String description, String? listingId,
  }) async {
    final id = _uuid.v4();
    await _db.collection('reports').doc(id).set({
      'id': id, 'userId': userId, 'category': category,
      'description': description, 'listingId': listingId,
      'status': 'open', 'createdAt': Timestamp.fromDate(DateTime.now()),
    });
  }

  // ── BOOST LISTING ───────────────────────────────────────────
  // ADMIN APPROVAL POINT: After boost payment approved by admin,
  // call this to set isBoosted=true on the specific listing
  Future<void> boostListing(String collection, String listingId) async =>
      await _db.collection(collection).doc(listingId).update({'isBoosted': true});
}import 'dart:io';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:image_picker/image_picker.dart';

class StorageService {
  final FirebaseStorage _storage = FirebaseStorage.instance;
  final ImagePicker _picker = ImagePicker();

  Future<File?> pickImage({bool fromCamera = false}) async {
    final f = await _picker.pickImage(
      source: fromCamera ? ImageSource.camera : ImageSource.gallery,
      maxWidth: 1024, maxHeight: 1024, imageQuality: 80);
    return f != null ? File(f.path) : null;
  }

  Future<List<File>> pickMultipleImages() async {
    final files = await _picker.pickMultiImage(
        maxWidth: 1024, maxHeight: 1024, imageQuality: 80);
    return files.map((f) => File(f.path)).toList();
  }

  Future<String> uploadFile(File file, String path) async {
    final ref = _storage.ref().child(path);
    final task = await ref.putFile(file);
    return await task.ref.getDownloadURL();
  }

  Future<String> uploadPaymentProof(File file, String userId) =>
      uploadFile(file, 'payment_proofs/$userId/${DateTime.now().millisecondsSinceEpoch}.jpg');

  Future<List<String>> uploadListingImages(
      List<File> files, String category, String id) async {
    final urls = <String>[];
    for (int i = 0; i < files.length; i++) {
      final url = await uploadFile(file, 'listings/$category/$id/img_$i.jpg');
      urls.add(url);
    }
    return urls;
  }

  Future<String> uploadProfileImage(File file, String userId) =>
      uploadFile(file, 'profiles/$userId/profile.jpg');
}import 'package:flutter/foundation.dart';
import 'package:firebase_auth/firebase_auth.dart';
import '../services/auth_service.dart';
import '../models/user_model.dart';

class AuthProvider extends ChangeNotifier {
  final AuthService _service = AuthService();

  UserModel? _user;
  bool _isLoading = false;
  String? _error;
  bool _isGuest = false;

  UserModel? get user => _user;
  bool get isLoading => _isLoading;
  String? get error => _error;
  bool get isLoggedIn => _user != null;
  bool get isGuest => _isGuest;
  bool get hasActiveSubscription => _user?.hasActiveSubscription ?? false;
  bool get isAdmin => _user?.isAdmin ?? false;
  bool get isVerified => _user?.isVerified ?? false;

  AuthProvider() {
    FirebaseAuth.instance.authStateChanges().listen((u) async {
      if (u != null) {
        _user = await _service.getUserData(u.uid);
        _isGuest = false;
      } else {
        _user = null;
      }
      notifyListeners();
    });
  }

  void continueAsGuest() {
    _isGuest = true;
    _user = null;
    notifyListeners();
  }

  Future<bool> register({
    required String email, required String password,
    required String name, required String phone,
  }) async {
    _setLoading(true);
    try {
      _user = await _service.registerWithEmail(
          email: email, password: password, name: name, phone: phone);
      _isGuest = false;
      _setLoading(false);
      return true;
    } catch (e) {
      _setError(_formatError(e.toString()));
      _setLoading(false);
      return false;
    }
  }

  Future<bool> login({required String email, required String password}) async {
    _setLoading(true);
    try {
      _user = await _service.loginWithEmail(email: email, password: password);
      _isGuest = false;
      _setLoading(false);
      return true;
    } catch (e) {
      _setError(_formatError(e.toString()));
      _setLoading(false);
      return false;
    }
  }

  Future<void> logout() async {
    await _service.logout();
    _user = null;
    _isGuest = false;
    notifyListeners();
  }

  Future<void> refreshUser() async {
    if (_user != null) {
      _user = await _service.getUserData(_user!.id);
      notifyListeners();
    }
  }

  String _formatError(String e) {
    if (e.contains('user-not-found')) return 'No account found with this email';
    if (e.contains('wrong-password')) return 'Incorrect password';
    if (e.contains('email-already-in-use')) return 'Email already registered';
    if (e.contains('weak-password')) return 'Password is too weak';
    return 'An error occurred. Please try again.';
  }

  void _setLoading(bool v) { _isLoading = v; notifyListeners(); }
  void _setError(String? v) { _error = v; notifyListeners(); }
  void clearError() { _error = null; notifyListeners(); }
}import 'package:flutter/foundation.dart';
import '../services/firestore_service.dart';

class ListingProvider extends ChangeNotifier {
  final FirestoreService service = FirestoreService();
  String _selectedDistrict = 'All Districts';

  String get selectedDistrict => _selectedDistrict;

  void setDistrict(String d) {
    _selectedDistrict = d;
    notifyListeners();
  }
}import 'package:flutter/foundation.dart';
import '../services/firestore_service.dart';
import '../models/subscription_model.dart';

class SubscriptionProvider extends ChangeNotifier {
  final FirestoreService _service = FirestoreService();
  SubscriptionModel? _activeSub;
  bool _isLoading = false;

  SubscriptionModel? get activeSub => _activeSub;
  bool get isLoading => _isLoading;

  Future<void> loadSubscription(String userId) async {
    _isLoading = true;
    notifyListeners();
    _activeSub = await _service.getUserActiveSubscription(userId);
    _isLoading = false;
    notifyListeners();
  }
}import 'package:flutter/material.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:timeago/timeago.dart' as timeago;
import '../constants/app_colors.dart';
import '../constants/app_theme.dart';

class ListingCard extends StatelessWidget {
  final String id, title, subtitle, price, district;
  final String? imageUrl;
  final bool isBoosted, isSaved;
  final DateTime postedAt;
  final VoidCallback onTap;
  final VoidCallback? onSave;
  final IconData categoryIcon;

  const ListingCard({
    super.key, required this.id, required this.title,
    required this.subtitle, required this.price, required this.district,
    this.imageUrl, this.isBoosted = false, this.isSaved = false,
    required this.postedAt, required this.onTap,
    this.onSave, required this.categoryIcon,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        margin: const EdgeInsets.only(bottom: 12),
        decoration: AppTheme.cardDecoration,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            if (isBoosted)
              Container(
                width: double.infinity,
                padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 12),
                decoration: const BoxDecoration(
                  color: AppColors.accent,
                  borderRadius:
                      BorderRadius.vertical(top: Radius.circular(12)),
                ),
                child: const Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(Icons.rocket_launch, color: Colors.white, size: 13),
                    SizedBox(width: 4),
                    Text('BOOSTED',
                        style: TextStyle(
                            color: Colors.white,
                            fontSize: 11,
                            fontWeight: FontWeight.bold,
                            letterSpacing: 1.2)),
                  ],
                ),
              ),
            Padding(
              padding: const EdgeInsets.all(12),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Thumbnail
                  ClipRRect(
                    borderRadius: BorderRadius.circular(8),
                    child: SizedBox(
                      width: 88,
                      height: 88,
                      child: imageUrl != null
                          ? CachedNetworkImage(
                              imageUrl: imageUrl!,
                              fit: BoxFit.cover,
                              placeholder: (_, __) => _placeholder(),
                              errorWidget: (_, __, ___) => _placeholder(),
                            )
                          : _placeholder(),
                    ),
                  ),
                  const SizedBox(width: 12),
                  // Content
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(children: [
                          Expanded(
                            child: Text(title,
                                style: AppTheme.headingSmall
                                    .copyWith(fontSize: 15),
                                maxLines: 2,
                                overflow: TextOverflow.ellipsis),
                          ),
                          if (onSave != null)
                            GestureDetector(
                              onTap: onSave,
                              child: Icon(
                                isSaved
                                    ? Icons.bookmark
                                    : Icons.bookmark_border,
                                color: isSaved
                                    ? AppColors.primary
                                    : AppColors.grey,
                                size: 22,
                              ),
                            ),
                        ]),
                        const SizedBox(height: 4),
                        Text(subtitle,
                            style: AppTheme.bodyText,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis),
                        const SizedBox(height: 8),
                        Container(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 8, vertical: 3),
                          decoration: BoxDecoration(
                              color: AppColors.primaryLight,
                              borderRadius: BorderRadius.circular(4)),
                          child: Text(price,
                              style: const TextStyle(
                                  color: AppColors.primary,
                                  fontWeight: FontWeight.bold,
                                  fontSize: 13)),
                        ),
                        const SizedBox(height: 6),
                        Row(children: [
                          const Icon(Icons.location_on,
                              size: 13, color: AppColors.grey),
                          const SizedBox(width: 2),
                          Text(district, style: AppTheme.caption),
                          const Spacer(),
                          Text(timeago.format(postedAt),
                              style: AppTheme.caption),
                        ]),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _placeholder() => Container(
        color: AppColors.lightGrey,
        child: Icon(categoryIcon, color: AppColors.grey, size: 30));
}import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import '../constants/app_colors.dart';

class CustomButton extends StatelessWidget {
  final String text;
  final VoidCallback? onPressed;
  final bool isLoading, isOutlined;
  final Color? color;
  final IconData? icon;
  final double? width;

  const CustomButton({
    super.key, required this.text, this.onPressed,
    this.isLoading = false, this.isOutlined = false,
    this.color, this.icon, this.width,
  });

  @override
  Widget build(BuildContext context) {
    final c = color ?? AppColors.primary;
    Widget child = isLoading
        ? SpinKitThreeBounce(
            color: isOutlined ? c : Colors.white, size: 20)
        : Row(
            mainAxisAlignment: MainAxisAlignment.center,
            mainAxisSize: MainAxisSize.min,
            children: [
              if (icon != null) ...[
                Icon(icon,
                    size: 18,
                    color: isOutlined ? c : Colors.white),
                const SizedBox(width: 8),
              ],
              Text(text,
                  style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w600,
                      color: isOutlined ? c : Colors.white)),
            ],
          );

    final style = isOutlined
        ? OutlinedButton.styleFrom(
            side: BorderSide(color: c),
            padding: const EdgeInsets.symmetric(vertical: 14, horizontal: 24),
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(8)))
        : ElevatedButton.styleFrom(
            backgroundColor: c,
            foregroundColor: Colors.white,
            padding: const EdgeInsets.symmetric(vertical: 14, horizontal: 24),
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(8)));

    return SizedBox(
      width: width ?? double.infinity,
      child: isOutlined
          ? OutlinedButton(
              onPressed: isLoading ? null : onPressed,
              style: style, child: child)
          : ElevatedButton(
              onPressed: isLoading ? null : onPressed,
              style: style, child: child),
    );
  }
}import 'package:flutter/material.dart';
import '../constants/app_colors.dart';

class CustomTextField extends StatelessWidget {
  final String label;
  final String? hint;
  final TextEditingController? controller;
  final String? Function(String?)? validator;
  final TextInputType? keyboardType;
  final bool obscureText, readOnly;
  final IconData? prefixIcon;
  final Widget? suffix;
  final int maxLines;
  final VoidCallback? onTap;
  final void Function(String)? onChanged;

  const CustomTextField({
    super.key, required this.label, this.hint,
    this.controller, this.validator, this.keyboardType,
    this.obscureText = false, this.readOnly = false,
    this.prefixIcon, this.suffix, this.maxLines = 1,
    this.onTap, this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label,
            style: const TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.w500,
                color: Colors.black87)),
        const SizedBox(height: 6),
        TextFormField(
          controller: controller,
          validator: validator,
          keyboardType: keyboardType,
          obscureText: obscureText,
          maxLines: maxLines,
          readOnly: readOnly,
          onTap: onTap,
          onChanged: onChanged,
          decoration: InputDecoration(
            hintText: hint,
            prefixIcon: prefixIcon != null
                ? Icon(prefixIcon, color: AppColors.grey)
                : null,
            suffixIcon: suffix,
            border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide:
                    const BorderSide(color: AppColors.lightGrey)),
            enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide:
                    const BorderSide(color: AppColors.lightGrey)),
            focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide:
                    const BorderSide(color: AppColors.primary, width: 2)),
            errorBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide:
                    const BorderSide(color: AppColors.error)),
            filled: true,
            fillColor: Colors.white,
            contentPadding:
                const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          ),
        ),
      ],
    );
  }
}

class CustomDropdown extends StatelessWidget {
  final String label;
  final String? value;
  final List<String> items;
  final void Function(String?) onChanged;
  final String? Function(String?)? validator;

  const CustomDropdown({
    super.key, required this.label, required this.value,
    required this.items, required this.onChanged, this.validator,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label,
            style: const TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.w500,
                color: Colors.black87)),
        const SizedBox(height: 6),
        DropdownButtonFormField<String>(
          value: value,
          validator: validator,
          decoration: InputDecoration(
            border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8)),
            contentPadding:
                const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
            filled: true,
            fillColor: Colors.white,
          ),
          items: items
              .map((i) =>
                  DropdownMenuItem(value: i, child: Text(i)))
              .toList(),
          onChanged: onChanged,
        ),
      ],
    );
  }
}import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../constants/app_colors.dart';
import 'custom_button.dart';

class ContactLockWidget extends StatelessWidget {
  final bool isSubscribed, isLoggedIn;
  final String contactName, contactPhone, contactEmail;
  final VoidCallback onSubscribeTap;

  const ContactLockWidget({
    super.key, required this.isSubscribed, required this.isLoggedIn,
    required this.contactName, required this.contactPhone,
    required this.contactEmail, required this.onSubscribeTap,
  });

  @override
  Widget build(BuildContext context) =>
      isSubscribed ? _unlocked() : _locked();

  Widget _unlocked() => Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: AppColors.primaryLight,
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: AppColors.primary),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Row(children: [
              Icon(Icons.contact_phone, color: AppColors.primary),
              SizedBox(width: 8),
              Text('Contact Information',
                  style: TextStyle(
                      fontWeight: FontWeight.bold,
                      color: AppColors.primary,
                      fontSize: 16)),
            ]),
            const SizedBox(height: 12),
            _row(Icons.person, contactName),
            const SizedBox(height: 8),
            GestureDetector(
              onTap: () => launchUrl(Uri.parse('tel:$contactPhone')),
              child: _row(Icons.phone, contactPhone,
                  color: AppColors.primary),
            ),
            if (contactEmail.isNotEmpty) ...[
              const SizedBox(height: 8),
              GestureDetector(
                onTap: () =>
                    launchUrl(Uri.parse('mailto:$contactEmail')),
                child: _row(Icons.email, contactEmail,
                    color: AppColors.primary),
              ),
            ],
          ],
        ),
      );

  Widget _row(IconData icon, String text,
          {Color color = AppColors.darkGrey}) =>
      Row(children: [
        Icon(icon, size: 18, color: AppColors.grey),
        const SizedBox(width: 8),
        Expanded(
            child: Text(text,
                style: TextStyle(
                    fontSize: 15,
                    color: color,
                    fontWeight: color == AppColors.primary
                        ? FontWeight.bold
                        : FontWeight.normal))),
      ]);

  Widget _locked() => Container(
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: Colors.grey.shade100,
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: AppColors.lightGrey),
        ),
        child: Column(
          children: [
            const Icon(Icons.lock, size: 44, color: AppColors.grey),
            const SizedBox(height: 12),
            const Text('Contact Details Locked',
                style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                    color: Colors.black87)),
            const SizedBox(height: 8),
            Text(
              isLoggedIn
                  ? 'Subscribe to view contact details for this listing'
                  : 'Login and subscribe to view contact details',
              textAlign: TextAlign.center,
              style:
                  const TextStyle(color: AppColors.darkGrey, fontSize: 13),
            ),
            const SizedBox(height: 16),
            CustomButton(
              text: isLoggedIn ? 'Subscribe Now' : 'Login to Continue',
              onPressed: onSubscribeTap,
              icon: isLoggedIn ? Icons.star : Icons.login,
            ),
            if (isLoggedIn)
              const Padding(
                padding: EdgeInsets.only(top: 8),
                child: Text('Plans from K1,000/day',
                    style: TextStyle(
                        color: AppColors.grey, fontSize: 12)),
              ),
          ],
        ),
      );
}import 'package:flutter/material.dart';
import '../constants/app_colors.dart';

class CategoryCard extends StatelessWidget {
  final String title;
  final IconData icon;
  final int count;
  final Color color;
  final VoidCallback onTap;

  const CategoryCard({
    super.key, required this.title, required this.icon,
    required this.count, required this.color, required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(12),
          boxShadow: [
            BoxShadow(
                color: Colors.black.withOpacity(0.08),
                blurRadius: 8,
                offset: const Offset(0, 2))
          ],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              width: 58,
              height: 58,
              decoration: BoxDecoration(
                  color: color.withOpacity(0.15),
                  shape: BoxShape.circle),
              child: Icon(icon, color: color, size: 26),
            ),
            const SizedBox(height: 10),
            Text(title,
                style: const TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 14,
                    color: Colors.black87),
                textAlign: TextAlign.center),
            const SizedBox(height: 4),
            Text('Browse →',
                style: TextStyle(
                    fontSize: 11,
                    color: color,
                    fontWeight: FontWeight.w500)),
          ],
        ),
      ),
    );
  }
}import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:provider/provider.dart';
import 'firebase_options.dart';
import 'providers/auth_provider.dart';
import 'providers/listing_provider.dart';
import 'providers/subscription_provider.dart';
import 'constants/app_colors.dart';
import 'screens/splash_screen.dart';
import 'screens/auth/login_screen.dart';
import 'screens/auth/register_screen.dart';
import 'screens/home/home_screen.dart';
import 'screens/jobs/jobs_screen.dart';
import 'screens/jobs/job_details_screen.dart';
import 'screens/jobs/post_job_screen.dart';
import 'screens/houses/houses_screen.dart';
import 'screens/houses/house_details_screen.dart';
import 'screens/houses/post_house_screen.dart';
import 'screens/products/products_screen.dart';
import 'screens/products/product_details_screen.dart';
import 'screens/products/post_product_screen.dart';
import 'screens/other_items/other_items_screen.dart';
import 'screens/other_items/other_item_details_screen.dart';
import 'screens/other_items/post_other_item_screen.dart';
import 'screens/subscription/subscription_screen.dart';
import 'screens/payment/payment_proof_screen.dart';
import 'screens/boost/boost_listing_screen.dart';
import 'screens/verify/verify_account_screen.dart';
import 'screens/chat/chat_list_screen.dart';
import 'screens/chat/chat_screen.dart';
import 'screens/profile/profile_screen.dart';
import 'screens/saved/saved_listings_screen.dart';
import 'screens/notifications/notifications_screen.dart';
import 'screens/reports/reports_screen.dart';
import 'screens/settings/settings_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
      options: DefaultFirebaseOptions.currentPlatform);
  runApp(const MwayilinkApp());
}

class MwayilinkApp extends StatelessWidget {
  const MwayilinkApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => AuthProvider()),
        ChangeNotifierProvider(create: (_) => ListingProvider()),
        ChangeNotifierProvider(create: (_) => SubscriptionProvider()),
      ],
      child: MaterialApp(
        title: 'Mwayilink',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          primaryColor: AppColors.primary,
          colorScheme: ColorScheme.fromSeed(
              seedColor: AppColors.primary,
              primary: AppColors.primary,
              secondary: AppColors.accent),
          appBarTheme: const AppBarTheme(
              backgroundColor: AppColors.primary,
              foregroundColor: Colors.white,
              elevation: 0,
              centerTitle: true),
          useMaterial3: true,
        ),
        initialRoute: '/',
        onGenerateRoute: _generateRoute,
      ),
    );
  }

  Route<dynamic> _generateRoute(RouteSettings s) {
    switch (s.name) {
      case '/': return _r(const SplashScreen());
      case '/login': return _r(const LoginScreen());
      case '/register': return _r(const RegisterScreen());
      case '/home': return _r(const HomeScreen());
      case '/jobs': return _r(const JobsScreen());
      case '/job-details':
        final a = s.arguments as Map<String, dynamic>;
        return _r(JobDetailsScreen(jobId: a['jobId']));
      case '/post-job': return _r(const PostJobScreen());
      case '/houses': return _r(const HousesScreen());
      case '/house-details':
        final a = s.arguments as Map<String, dynamic>;
        return _r(HouseDetailsScreen(houseId: a['houseId']));
      case '/post-house': return _r(const PostHouseScreen());
      case '/products': return _r(const ProductsScreen());
      case '/product-details':
        final a = s.arguments as Map<String, dynamic>;
        return _r(ProductDetailsScreen(productId: a['productId']));
      case '/post-product': return _r(const PostProductScreen());
      case '/other-items': return _r(const OtherItemsScreen());
      case '/other-item-details':
        final a = s.arguments as Map<String, dynamic>;
        return _r(OtherItemDetailsScreen(itemId: a['itemId']));
      case '/post-other-item': return _r(const PostOtherItemScreen());
      case '/subscription': return _r(const SubscriptionScreen());
      case '/payment-proof':
        final a = s.arguments as Map<String, dynamic>;
        return _r(PaymentProofScreen(
          paymentType: a['paymentType'],
          amount: a['amount'],
          listingId: a['listingId'],
        ));
      case '/boost-listing':
        final a = s.arguments as Map<String, dynamic>;
        return _r(BoostListingScreen(
            listingId: a['listingId'], collection: a['collection']));
      case '/verify-account': return _r(const VerifyAccountScreen());
      case '/chat-list': return _r(const ChatListScreen());
      case '/chat':
        final a = s.arguments as Map<String, dynamic>;
        return _r(ChatScreen(
          chatId: a['chatId'], recipientId: a['recipientId'],
          recipientName: a['recipientName'],
        ));
      case '/profile': return _r(const ProfileScreen());
      case '/saved': return _r(const SavedListingsScreen());
      case '/notifications': return _r(const NotificationsScreen());
      case '/reports': return _r(const ReportsScreen());
      case '/settings': return _r(const SettingsScreen());
      default: return _r(Scaffold(
          body: Center(child: Text('Route not found: ${s.name}'))));
    }
  }

  MaterialPageRoute _r(Widget w) =>
      MaterialPageRoute(builder: (_) => w);
}import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import '../constants/app_colors.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});
  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen>
    with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl =
      AnimationController(vsync: this, duration: const Duration(milliseconds: 1400))
        ..forward();

  @override
  void initState() {
    super.initState();
    Future.delayed(const Duration(seconds: 3), _navigate);
  }

  void _navigate() {
    if (!mounted) return;
    final user = FirebaseAuth.instance.currentUser;
    Navigator.pushReplacementNamed(
        context, user != null ? '/home' : '/login');
  }

  @override
  void dispose() { _ctrl.dispose(); super.dispose(); }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.primary,
      body: Center(
        child: FadeTransition(
          opacity: Tween<double>(begin: 0, end: 1)
              .animate(CurvedAnimation(parent: _ctrl, curve: Curves.easeIn)),
          child: ScaleTransition(
            scale: Tween<double>(begin: 0.5, end: 1)
                .animate(CurvedAnimation(
                    parent: _ctrl, curve: Curves.elasticOut)),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  width: 120, height: 120,
                  decoration: BoxDecoration(
                    color: Colors.white,
                    shape: BoxShape.circle,
                    boxShadow: [BoxShadow(
                        color: Colors.black.withOpacity(0.25),
                        blurRadius: 24)],
                  ),
                  child: const Icon(Icons.storefront,
                      size: 68, color: AppColors.primary),
                ),
                const SizedBox(height: 24),
                const Text('Mwayilink',
                    style: TextStyle(
                        color: Colors.white,
                        fontSize: 36,
                        fontWeight: FontWeight.bold,
                        letterSpacing: 1.5)),
                const SizedBox(height: 8),
                const Text("Malawi's Marketplace",
                    style: TextStyle(color: Colors.white70, fontSize: 16)),
                const SizedBox(height: 48),
                const CircularProgressIndicator(
                    color: Colors.white, strokeWidth: 2),
              ],
            ),
          ),
        ),
      ),
    );
  }
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../constants/app_colors.dart';
import '../../providers/auth_provider.dart';
import '../../widgets/custom_button.dart';
import '../../widgets/custom_text_field.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});
  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _formKey = GlobalKey<FormState>();
  final _emailCtrl = TextEditingController();
  final _passCtrl = TextEditingController();
  bool _hide = true;

  @override
  void dispose() { _emailCtrl.dispose(); _passCtrl.dispose(); super.dispose(); }

  Future<void> _login() async {
    if (!_formKey.currentState!.validate()) return;
    final ok = await context.read<AuthProvider>().login(
        email: _emailCtrl.text.trim(), password: _passCtrl.text);
    if (!mounted) return;
    if (ok) {
      Navigator.pushReplacementNamed(context, '/home');
    } else {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
        content: Text(context.read<AuthProvider>().error ?? 'Login failed'),
        backgroundColor: AppColors.error,
      ));
    }
  }

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();
    return Scaffold(
      backgroundColor: AppColors.background,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Form(
            key: _formKey,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const SizedBox(height: 40),
                Center(
                  child: Column(children: [
                    Container(
                      width: 80, height: 80,
                      decoration: const BoxDecoration(
                          color: AppColors.primary, shape: BoxShape.circle),
                      child: const Icon(Icons.storefront,
                          size: 44, color: Colors.white),
                    ),
                    const SizedBox(height: 14),
                    const Text('Mwayilink',
                        style: TextStyle(
                            fontSize: 28,
                            fontWeight: FontWeight.bold,
                            color: AppColors.primary)),
                    const Text("Malawi's Marketplace",
                        style: TextStyle(color: AppColors.grey, fontSize: 14)),
                  ]),
                ),
                const SizedBox(height: 40),
                const Text('Welcome Back!',
                    style: TextStyle(
                        fontSize: 24, fontWeight: FontWeight.bold)),
                const SizedBox(height: 6),
                const Text('Sign in to continue',
                    style: TextStyle(color: AppColors.grey)),
                const SizedBox(height: 28),
                CustomTextField(
                  label: 'Email Address', hint: 'Enter your email',
                  controller: _emailCtrl,
                  prefixIcon: Icons.email_outlined,
                  keyboardType: TextInputType.emailAddress,
                  validator: (v) {
                    if (v == null || v.isEmpty) return 'Email is required';
                    if (!v.contains('@')) return 'Enter a valid email';
                    return null;
                  },
                ),
                const SizedBox(height: 16),
                CustomTextField(
                  label: 'Password', hint: 'Enter your password',
                  controller: _passCtrl,
                  prefixIcon: Icons.lock_outline,
                  obscureText: _hide,
                  suffix: IconButton(
                    icon: Icon(_hide ? Icons.visibility : Icons.visibility_off,
                        color: AppColors.grey),
                    onPressed: () => setState(() => _hide = !_hide),
                  ),
                  validator: (v) {
                    if (v == null || v.isEmpty) return 'Password is required';
                    if (v.length < 6) return 'Min 6 characters';
                    return null;
                  },
                ),
                Align(
                  alignment: Alignment.centerRight,
                  child: TextButton(
                    onPressed: () {},
                    child: const Text('Forgot Password?',
                        style: TextStyle(color: AppColors.primary)),
                  ),
                ),
                const SizedBox(height: 16),
                CustomButton(
                    text: 'Login', onPressed: _login,
                    isLoading: auth.isLoading),
                const SizedBox(height: 12),
                CustomButton(
                  text: 'Create Account', isOutlined: true,
                  onPressed: () =>
                      Navigator.pushReplacementNamed(context, '/register'),
                ),
                const SizedBox(height: 12),
                Center(
                  child: TextButton(
                    onPressed: () {
                      context.read<AuthProvider>().continueAsGuest();
                      Navigator.pushReplacementNamed(context, '/home');
                    },
                    child: const Text('Browse as Guest →',
                        style: TextStyle(color: AppColors.grey)),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../constants/app_colors.dart';
import '../../providers/auth_provider.dart';
import '../../widgets/custom_button.dart';
import '../../widgets/custom_text_field.dart';

class RegisterScreen extends StatefulWidget {
  const RegisterScreen({super.key});
  @override
  State<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  final _formKey = GlobalKey<FormState>();
  final _nameCtrl = TextEditingController();
  final _emailCtrl = TextEditingController();
  final _phoneCtrl = TextEditingController();
  final _passCtrl = TextEditingController();
  final _confirmCtrl = TextEditingController();
  bool _hidePass = true, _hideConfirm = true;

  @override
  void dispose() {
    for (final c in [_nameCtrl, _emailCtrl, _phoneCtrl, _passCtrl, _confirmCtrl]) {
      c.dispose();
    }
    super.dispose();
  }

  Future<void> _register() async {
    if (!_formKey.currentState!.validate()) return;
    final ok = await context.read<AuthProvider>().register(
      email: _emailCtrl.text.trim(), password: _passCtrl.text,
      name: _nameCtrl.text.trim(), phone: _phoneCtrl.text.trim(),
    );
    if (!mounted) return;
    if (ok) {
      Navigator.pushReplacementNamed(context, '/home');
    } else {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
        content: Text(context.read<AuthProvider>().error ?? 'Registration failed'),
        backgroundColor: AppColors.error,
      ));
    }
  }

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
          title: const Text('Create Account'),
          backgroundColor: Colors.transparent,
          foregroundColor: Colors.black, elevation: 0),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text('Join Mwayilink',
                  style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
              const SizedBox(height: 6),
              const Text('Create your account to post & browse listings',
                  style: TextStyle(color: AppColors.grey)),
              const SizedBox(height: 28),
              CustomTextField(
                label: 'Full Name *', hint: 'John Banda',
                controller: _nameCtrl, prefixIcon: Icons.person_outline,
                validator: (v) =>
                    v == null || v.isEmpty ? 'Name is required' : null,
              ),
              const SizedBox(height: 14),
              CustomTextField(
                label: 'Phone Number *', hint: '0999123456',
                controller: _phoneCtrl, prefixIcon: Icons.phone_outlined,
                keyboardType: TextInputType.phone,
                validator: (v) =>
                    v == null || v.length < 10 ? 'Enter valid phone number' : null,
              ),
              const SizedBox(height: 14),
              CustomTextField(
                label: 'Email Address *', hint: 'john@example.com',
                controller: _emailCtrl, prefixIcon: Icons.email_outlined,
                keyboardType: TextInputType.emailAddress,
                validator: (v) {
                  if (v == null || v.isEmpty) return 'Email required';
                  if (!v.contains('@')) return 'Enter valid email';
                  return null;
                },
              ),
              const SizedBox(height: 14),
              CustomTextField(
                label: 'Password *', hint: 'Min 6 characters',
                controller: _passCtrl, prefixIcon: Icons.lock_outline,
                obscureText: _hidePass,
                suffix: IconButton(
                  icon: Icon(_hidePass ? Icons.visibility : Icons.visibility_off,
                      color: AppColors.grey),
                  onPressed: () => setState(() => _hidePass = !_hidePass),
                ),
                validator: (v) => v == null || v.length < 6
                    ? 'Minimum 6 characters' : null,
              ),
              const SizedBox(height: 14),
              CustomTextField(
                label: 'Confirm Password *', hint: 'Re-enter password',
                controller: _confirmCtrl, prefixIcon: Icons.lock_outline,
                obscureText: _hideConfirm,
                suffix: IconButton(
                  icon: Icon(
                      _hideConfirm ? Icons.visibility : Icons.visibility_off,
                      color: AppColors.grey),
                  onPressed: () => setState(() => _hideConfirm = !_hideConfirm),
                ),
                validator: (v) =>
                    v != _passCtrl.text ? 'Passwords do not match' : null,
              ),
              const SizedBox(height: 28),
              CustomButton(
                  text: 'Create Account', onPressed: _register,
                  isLoading: auth.isLoading),
              const SizedBox(height: 14),
              Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                const Text('Already have an account? ',
                    style: TextStyle(color: AppColors.grey)),
                GestureDetector(
                  onTap: () =>
                      Navigator.pushReplacementNamed(context, '/login'),
                  child: const Text('Login',
                      style: TextStyle(
                          color: AppColors.primary,
                          fontWeight: FontWeight.bold)),
                ),
              ]),
              const SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../constants/app_colors.dart';
import '../../constants/app_strings.dart';
import '../../providers/auth_provider.dart';
import '../../widgets/category_card.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});
  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  String _district = 'All Districts';

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        title: const Row(children: [
          Icon(Icons.storefront, color: Colors.white),
          SizedBox(width: 8),
          Text('Mwayilink',
              style: TextStyle(fontWeight: FontWeight.bold)),
        ]),
        actions: [
          IconButton(
              icon: const Icon(Icons.search),
              onPressed: () {}),
          IconButton(
              icon: const Icon(Icons.notifications_outlined),
              onPressed: () =>
                  Navigator.pushNamed(context, '/notifications')),
          if (auth.isLoggedIn)
            IconButton(
                icon: const CircleAvatar(
                    radius: 13,
                    backgroundColor: Colors.white24,
                    child: Icon(Icons.person, size: 17, color: Colors.white)),
                onPressed: () => Navigator.pushNamed(context, '/profile'))
          else
            TextButton(
                onPressed: () =>
                    Navigator.pushReplacementNamed(context, '/login'),
                child: const Text('Login',
                    style: TextStyle(color: Colors.white))),
        ],
      ),
      body: RefreshIndicator(
        onRefresh: () async => setState(() {}),
        child: SingleChildScrollView(
          physics: const AlwaysScrollableScrollPhysics(),
          child: Column(
            children: [
              _banner(auth),
              _districtFilter(),
              _categories(context),
              if (auth.isLoggedIn) _postBanner(context),
              _whySection(),
              const SizedBox(height: 100),
            ],
          ),
        ),
      ),
      floatingActionButton: auth.isLoggedIn
          ? FloatingActionButton.extended(
              onPressed: () => _postSheet(context),
              backgroundColor: AppColors.accent,
              icon: const Icon(Icons.add, color: Colors.white),
              label: const Text('Post',
                  style: TextStyle(color: Colors.white)))
          : null,
      bottomNavigationBar: _bottomNav(context, auth),
    );
  }

  Widget _banner(AuthProvider auth) => Container(
        padding: const EdgeInsets.fromLTRB(20, 20, 20, 20),
        decoration: const BoxDecoration(
          gradient: LinearGradient(
              colors: [AppColors.primary, Color(0xFF2E7D32)],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              auth.isLoggedIn
                  ? 'Hello, ${auth.user?.name.split(' ').first}! 👋'
                  : 'Welcome to Mwayilink! 👋',
              style: const TextStyle(
                  color: Colors.white,
                  fontSize: 20,
                  fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 4),
            const Text("Malawi's #1 Marketplace",
                style: TextStyle(color: Colors.white70, fontSize: 13)),
            if (auth.isLoggedIn && !auth.hasActiveSubscription) ...[
              const SizedBox(height: 14),
              GestureDetector(
                onTap: () =>
                    Navigator.pushNamed(context, '/subscription'),
                child: Container(
                  padding: const EdgeInsets.symmetric(
                      horizontal: 14, vertical: 10),
                  decoration: BoxDecoration(
                      color: AppColors.accent,
                      borderRadius: BorderRadius.circular(8)),
                  child: const Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(Icons.lock_open, color: Colors.white, size: 16),
                      SizedBox(width: 6),
                      Text('Subscribe to unlock contacts',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 13,
                              fontWeight: FontWeight.bold)),
                    ],
                  ),
                ),
              ),
            ],
          ],
        ),
      );

  Widget _districtFilter() => SizedBox(
        height: 48,
        child: ListView(
          scrollDirection: Axis.horizontal,
          padding: const EdgeInsets.symmetric(
              horizontal: 16, vertical: 6),
          children: AppStrings.districts.take(12).map((d) {
            final sel = _district == d;
            return Padding(
              padding: const EdgeInsets.only(right: 8),
              child: GestureDetector(
                onTap: () => setState(() => _district = d),
                child: Container(
                  padding: const EdgeInsets.symmetric(
                      horizontal: 14, vertical: 5),
                  decoration: BoxDecoration(
                    color: sel ? AppColors.primary : Colors.white,
                    borderRadius: BorderRadius.circular(20),
                    border: Border.all(
                        color: sel
                            ? AppColors.primary
                            : AppColors.lightGrey),
                  ),
                  child: Text(d,
                      style: TextStyle(
                          color: sel ? Colors.white : AppColors.darkGrey,
                          fontSize: 13,
                          fontWeight: sel
                              ? FontWeight.bold
                              : FontWeight.normal)),
                ),
              ),
            );
          }).toList(),
        ),
      );

  Widget _categories(BuildContext context) => Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Browse Categories',
                style: TextStyle(
                    fontSize: 18, fontWeight: FontWeight.bold)),
            const SizedBox(height: 14),
            GridView.count(
              crossAxisCount: 2,
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              crossAxisSpacing: 12,
              mainAxisSpacing: 12,
              childAspectRatio: 1.25,
              children: [
                CategoryCard(
                    title: 'Jobs', icon: Icons.work_outline,
                    count: 0, color: AppColors.primary,
                    onTap: () => Navigator.pushNamed(context, '/jobs')),
                CategoryCard(
                    title: 'Houses', icon: Icons.home_outlined,
                    count: 0, color: AppColors.accent,
                    onTap: () =>
                        Navigator.pushNamed(context, '/houses')),
                CategoryCard(
                    title: 'Farm Products', icon: Icons.agriculture,
                    count: 0, color: const Color(0xFF66BB6A),
                    onTap: () =>
                        Navigator.pushNamed(context, '/products')),
                CategoryCard(
                    title: 'Other Items',
                    icon: Icons.category_outlined,
                    count: 0, color: const Color(0xFF42A5F5),
                    onTap: () =>
                        Navigator.pushNamed(context, '/other-items')),
              ],
            ),
          ],
        ),
      );

  Widget _postBanner(BuildContext context) => Container(
        margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          gradient: const LinearGradient(
              colors: [AppColors.accent, Color(0xFFFF7043)],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight),
          borderRadius: BorderRadius.circular(12),
        ),
        child: Row(children: [
          const Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Post a Listing',
                    style: TextStyle(
                        color: Colors.white,
                        fontSize: 17,
                        fontWeight: FontWeight.bold)),
                SizedBox(height: 4),
                Text('Reach thousands of buyers\nPosting fee: K2,000',
                    style: TextStyle(color: Colors.white70, fontSize: 12)),
              ],
            ),
          ),
          ElevatedButton(
            onPressed: () => _postSheet(context),
            style: ElevatedButton.styleFrom(
                backgroundColor: Colors.white,
                foregroundColor: AppColors.accent),
            child: const Text('Post Now'),
          ),
        ]),
      );

  Widget _whySection() => Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Why Mwayilink?',
                style: TextStyle(
                    fontSize: 18, fontWeight: FontWeight.bold)),
            const SizedBox(height: 14),
            Row(children: [
              _tile('🏢', 'All Districts', 'Nationwide coverage'),
              const SizedBox(width: 12),
              _tile('🔒', 'Secure', 'Verified listings'),
            ]),
            const SizedBox(height: 12),
            Row(children: [
              _tile('💬', 'Chat', 'Direct messaging'),
              const SizedBox(width: 12),
              _tile('⚡', 'Fast', 'Real-time updates'),
            ]),
          ],
        ),
      );

  Widget _tile(String emoji, String title, String sub) => Expanded(
        child: Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(12),
            boxShadow: [
              BoxShadow(
                  color: Colors.black.withOpacity(0.05), blurRadius: 6)
            ],
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(emoji, style: const TextStyle(fontSize: 22)),
              const SizedBox(height: 6),
              Text(title,
                  style: const TextStyle(
                      fontWeight: FontWeight.bold, fontSize: 14)),
              Text(sub,
                  style: const TextStyle(
                      color: AppColors.grey, fontSize: 12)),
            ],
          ),
        ),
      );

  void _postSheet(BuildContext context) {
    showModalBottomSheet(
      context: context,
      shape: const RoundedRectangleBorder(
          borderRadius:
              BorderRadius.vertical(top: Radius.circular(20))),
      builder: (ctx) => Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Text('What would you like to post?',
                style: TextStyle(
                    fontSize: 17, fontWeight: FontWeight.bold)),
            const SizedBox(height: 6),
            const Text('Posting fee: K2,000',
                style: TextStyle(color: AppColors.grey, fontSize: 13)),
            const SizedBox(height: 16),
            _opt(ctx, Icons.work, 'Job Listing', '/post-job'),
            _opt(ctx, Icons.home, 'House / Property', '/post-house'),
            _opt(ctx, Icons.agriculture, 'Farm Product', '/post-product'),
            _opt(ctx, Icons.category, 'Other Item', '/post-other-item'),
          ],
        ),
      ),
    );
  }

  ListTile _opt(BuildContext ctx, IconData icon, String t, String r) =>
      ListTile(
        leading: Container(
          padding: const EdgeInsets.all(8),
          decoration: BoxDecoration(
              color: AppColors.primaryLight,
              borderRadius: BorderRadius.circular(8)),
          child: Icon(icon, color: AppColors.primary),
        ),
        title: Text(t),
        trailing:
            const Icon(Icons.arrow_forward_ios, size: 14),
        onTap: () {
          Navigator.pop(ctx);
          Navigator.pushNamed(context, r);
        },
      );

  BottomNavigationBar _bottomNav(
      BuildContext context, AuthProvider auth) =>
      BottomNavigationBar(
        selectedItemColor: AppColors.primary,
        unselectedItemColor: AppColors.grey,
        type: BottomNavigationBarType.fixed,
        items: const [
          BottomNavigationBarItem(
              icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(
              icon: Icon(Icons.chat_bubble_outline), label: 'Chats'),
          BottomNavigationBarItem(
              icon: Icon(Icons.bookmark_outline), label: 'Saved'),
          BottomNavigationBarItem(
              icon: Icon(Icons.person_outline), label: 'Profile'),
        ],
        onTap: (i) {
          switch (i) {
            case 1: Navigator.pushNamed(context, '/chat-list'); break;
            case 2: Navigator.pushNamed(context, '/saved'); break;
            case 3:
              Navigator.pushNamed(
                  context, auth.isLoggedIn ? '/profile' : '/login');
              break;
          }
        },
      );
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../constants/app_colors.dart';
import '../../constants/app_strings.dart';
import '../../models/job_model.dart';
import '../../providers/auth_provider.dart';
import '../../services/firestore_service.dart';
import '../../widgets/listing_card.dart';

class JobsScreen extends StatefulWidget {
  const JobsScreen({super.key});
  @override
  State<JobsScreen> createState() => _JobsScreenState();
}

class _JobsScreenState extends State<JobsScreen> {
  final _service = FirestoreService();
  String _district = 'All Districts';
  String _type = 'All';
  final _types = ['All', 'Full-time', 'Part-time', 'Contract', 'Internship'];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        title: const Text('Jobs'),
        actions: [
          IconButton(
              icon: const Icon(Icons.add_circle_outline),
              onPressed: () =>
                  Navigator.pushNamed(context, '/post-job')),
        ],
      ),
      body: Column(children: [
        _filters(),
        Expanded(
          child: StreamBuilder<List<JobModel>>(
            stream: _service.getJobs(
                district: _district == 'All Districts' ? null : _district),
            builder: (_, snap) {
              if (snap.connectionState == ConnectionState.waiting) {
                return const Center(
                    child: CircularProgressIndicator(
                        color: AppColors.primary));
              }
              final jobs = snap.data ?? [];
              if (jobs.isEmpty) return _empty();
              return ListView.builder(
                padding: const EdgeInsets.all(16),
                itemCount: jobs.length,
                itemBuilder: (_, i) {
                  final j = jobs[i];
                  return ListingCard(
                    id: j.id, title: j.title,
                    subtitle: j.company, price: j.salary,
                    district: j.district,
                    imageUrl: j.imageUrls.isNotEmpty
                        ? j.imageUrls.first : null,
                    isBoosted: j.isBoosted, postedAt: j.postedAt,
                    categoryIcon: Icons.work,
                    onTap: () => Navigator.pushNamed(
                        context, '/job-details',
                        arguments: {'jobId': j.id}),
                  );
                },
              );
            },
          ),
        ),
      ]),
    );
  }

  Widget _filters() => Container(
        color: Colors.white,
        padding: const EdgeInsets.symmetric(
            horizontal: 16, vertical: 8),
        child: Row(children: [
          Expanded(
            child: DropdownButton<String>(
              value: _district, isExpanded: true,
              underline: const SizedBox(),
              icon: const Icon(Icons.keyboard_arrow_down),
              items: AppStrings.districts
                  .map((d) => DropdownMenuItem(
                      value: d,
                      child: Text(d,
                          style: const TextStyle(fontSize: 13),
                          overflow: TextOverflow.ellipsis)))
                  .toList(),
              onChanged: (v) => setState(() => _district = v!),
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: DropdownButton<String>(
              value: _type, isExpanded: true,
              underline: const SizedBox(),
              icon: const Icon(Icons.keyboard_arrow_down),
              items: _types
                  .map((t) => DropdownMenuItem(
                      value: t,
                      child: Text(t,
                          style: const TextStyle(fontSize: 13))))
                  .toList(),
              onChanged: (v) => setState(() => _type = v!),
            ),
          ),
        ]),
      );

  Widget _empty() => Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.work_off, size: 60, color: AppColors.grey),
            const SizedBox(height: 16),
            const Text('No jobs found',
                style: TextStyle(
                    fontSize: 18, fontWeight: FontWeight.bold)),
            const SizedBox(height: 8),
            const Text('Be the first to post a job!',
                style: TextStyle(color: AppColors.grey)),
            const SizedBox(height: 20),
            ElevatedButton.icon(
              onPressed: () =>
                  Navigator.pushNamed(context, '/post-job'),
              icon: const Icon(Icons.add),
              label: const Text('Post a Job'),
            ),
          ],
        ),
      );
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:timeago/timeago.dart' as timeago;
import '../../constants/app_colors.dart';
import '../../models/job_model.dart';
import '../../providers/auth_provider.dart';
import '../../services/firestore_service.dart';
import '../../widgets/contact_lock_widget.dart';
import '../../widgets/custom_button.dart';

class JobDetailsScreen extends StatelessWidget {
  final String jobId;
  const JobDetailsScreen({super.key, required this.jobId});

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();
    final svc = FirestoreService();

    return FutureBuilder<JobModel?>(
      future: svc.getJob(jobId),
      builder: (_, snap) {
        if (snap.connectionState == ConnectionState.waiting) {
          return const Scaffold(
              body: Center(
                  child: CircularProgressIndicator(
                      color: AppColors.primary)));
        }
        final job = snap.data;
        if (job == null) {
          return Scaffold(
              appBar: AppBar(),
              body: const Center(child: Text('Job not found')));
        }

        return Scaffold(
          backgroundColor: AppColors.background,
          body: CustomScrollView(slivers: [
            SliverAppBar(
              expandedHeight: job.imageUrls.isNotEmpty ? 240 : 100,
              pinned: true,
              backgroundColor: AppColors.primary,
              actions: [
                IconButton(
                    icon: const Icon(Icons.bookmark_border),
                    onPressed: () {
                      if (!auth.isLoggedIn) {
                        Navigator.pushNamed(context, '/login');
                        return;
                      }
                      svc.toggleSavedListing(auth.user!.id, jobId);
                    }),
              ],
              flexibleSpace: FlexibleSpaceBar(
                background: job.imageUrls.isNotEmpty
                    ? CachedNetworkImage(
                        imageUrl: job.imageUrls.first,
                        fit: BoxFit.cover)
                    : Container(
                        color: AppColors.primaryLight,
                        child: const Icon(Icons.work,
                            size: 80, color: AppColors.primary)),
              ),
            ),
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    if (job.isBoosted)
                      _badge('⚡ BOOSTED', AppColors.accent),
                    const SizedBox(height: 8),
                    Text(job.title,
                        style: const TextStyle(
                            fontSize: 22,
                            fontWeight: FontWeight.bold)),
                    const SizedBox(height: 6),
                    Row(children: [
                      const Icon(Icons.business,
                          size: 16, color: AppColors.grey),
                      const SizedBox(width: 4),
                      Text(job.company,
                          style: const TextStyle(
                              fontSize: 16,
                              color: AppColors.darkGrey)),
                    ]),
                    const SizedBox(height: 10),
                    Wrap(spacing: 8, runSpacing: 8, children: [
                      _chip(Icons.location_on, job.district),
                      _chip(Icons.work_outline, job.jobType),
                      _chip(Icons.category, job.category),
                      _chip(Icons.schedule,
                          timeago.format(job.postedAt)),
                    ]),
                    const SizedBox(height: 16),
                    Container(
                      padding: const EdgeInsets.all(14),
                      decoration: BoxDecoration(
                          color: AppColors.primaryLight,
                          borderRadius: BorderRadius.circular(8)),
                      child: Row(children: [
                        const Icon(Icons.payments_outlined,
                            color: AppColors.primary),
                        const SizedBox(width: 10),
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Text('Salary',
                                style: TextStyle(
                                    color: AppColors.grey,
                                    fontSize: 12)),
                            Text(job.salary,
                                style: const TextStyle(
                                    color: AppColors.primary,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 18)),
                          ],
                        ),
                      ]),
                    ),
                    const SizedBox(height: 20),
                    _section('Job Description', job.description),
                    _section('Requirements', job.requirements),
                    const SizedBox(height: 20),
                    ContactLockWidget(
                      isSubscribed: auth.hasActiveSubscription,
                      contactName: job.contactName,
                      contactPhone: job.contactPhone,
                      contactEmail: job.contactEmail,
                      isLoggedIn: auth.isLoggedIn,
                      onSubscribeTap: () => Navigator.pushNamed(context,
                          auth.isLoggedIn ? '/subscription' : '/login'),
                    ),
                    const SizedBox(height: 12),
                    if (auth.isLoggedIn &&
                        job.postedById != auth.user?.id)
                      CustomButton(
                        text: 'Send Message',
                        icon: Icons.chat_bubble_outline,
                        isOutlined: true,
                        onPressed: () => Navigator.pushNamed(context,
                            '/chat',
                            arguments: {
                              'chatId':
                                  '${auth.user?.id}_${job.postedById}',
                              'recipientId': job.postedById,
                              'recipientName': job.postedByName,
                            }),
                      ),
                    const SizedBox(height: 80),
                  ],
                ),
              ),
            ),
          ]),
        );
      },
    );
  }

  Widget _badge(String text, Color color) => Container(
        padding:
            const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
        margin: const EdgeInsets.only(bottom: 4),
        decoration: BoxDecoration(
            color: color.withOpacity(0.15),
            borderRadius: BorderRadius.circular(4)),
        child: Text(text,
            style: TextStyle(
                color: color,
                fontWeight: FontWeight.bold,
                fontSize: 12)));

  Widget _chip(IconData icon, String text) => Container(
        padding: const EdgeInsets.symmetric(
            horizontal: 10, vertical: 5),
        decoration: BoxDecoration(
            color: Colors.grey.shade100,
            borderRadius: BorderRadius.circular(20)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          Icon(icon, size: 13, color: AppColors.grey),
          const SizedBox(width: 4),
          Text(text,
              style: const TextStyle(
                  fontSize: 12, color: AppColors.darkGrey)),
        ]));

  Widget _section(String title, String body) => Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title,
              style: const TextStyle(
                  fontSize: 16, fontWeight: FontWeight.bold)),
          const SizedBox(height: 6),
          Text(body,
              style: const TextStyle(fontSize: 14, height: 1.65)),
          const SizedBox(height: 16),
        ],
      );
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../constants/app_colors.dart';
import '../../constants/app_strings.dart';
import '../../models/job_model.dart';
import '../../providers/auth_provider.dart';
import '../../services/firestore_service.dart';
import '../../widgets/custom_button.dart';
import '../../widgets/custom_text_field.dart';

class PostJobScreen extends StatefulWidget {
  const PostJobScreen({super.key});
  @override
  State<PostJobScreen> createState() => _PostJobScreenState();
}

class _PostJobScreenState extends State<PostJobScreen> {
  final _formKey = GlobalKey<FormState>();
  final _svc = FirestoreService();
  final _titleCtrl = TextEditingController();
  final _compCtrl = TextEditingController();
  final _descCtrl = TextEditingController();
  final _reqCtrl = TextEditingController();
  final _salCtrl = TextEditingController();
  final _cNameCtrl = TextEditingController();
  final _cPhCtrl = TextEditingController();
  final _cEmailCtrl = TextEditingController();
  String _jobType = 'Full-time';
  String _cat = 'General';
  String _district = 'Lilongwe';
  bool _loading = false;

  @override
  void dispose() {
    for (final c in [
      _titleCtrl, _compCtrl, _descCtrl, _reqCtrl, _salCtrl,
      _cNameCtrl, _cPhCtrl, _cEmailCtrl
    ]) { c.dispose(); }
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(title: const Text('Post a Job')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              _notice('K2,000', 'Post a job listing'),
              const SizedBox(height: 20),
              CustomTextField(
                  label: 'Job Title *', hint: 'e.g. Software Developer',
                  controller: _titleCtrl,
                  validator: (v) => v!.isEmpty ? 'Required' : null),
              const SizedBox(height: 14),
              CustomTextField(
                  label: 'Company / Organization *',
                  hint: 'e.g. ABC Company Ltd',
                  controller: _compCtrl,
                  validator: (v) => v!.isEmpty ? 'Required' : null),
              const SizedBox(height: 14),
              CustomDropdown(
                  label: 'Job Type *',
                  value: _jobType,
                  items: const [
                    'Full-time', 'Part-time', 'Contract',
                    'Internship', 'Remote'
                  ],
                  onChanged: (v) => setState(() => _jobType = v!)),
              const SizedBox(height: 14),
              CustomDropdown(
                  label: 'Category *',
                  value: _cat,
                  items: const [
                    'General', 'IT/Technology', 'Agriculture',
                    'Teaching', 'Healthcare', 'Engineering',
                    'Finance', 'Marketing', 'Hospitality', 'NGO'
                  ],
                  onChanged: (v) => setState(() => _cat = v!)),
              const SizedBox(height: 14),
              CustomDropdown(
                  label: 'District *',
                  value: _district,
                  items: AppStrings.districts.skip(1).toList(),
                  onChanged: (v) => setState(() => _district = v!)),
              const SizedBox(height: 14),
              CustomTextField(
                  label: 'Salary / Pay *',
                  hint: 'e.g. K150,000/month',
                  controller: _salCtrl,
                  validator: (v) => v!.isEmpty ? 'Required' : null),
              const SizedBox(height: 14),
              CustomTextField(
                  label: 'Job Description *',
                  hint: 'Describe roles & responsibilities...',
                  controller: _descCtrl,
                  maxLines: 5,
                  validator: (v) => v!.isEmpty ? 'Required' : null),
              const SizedBox(height: 14),
              CustomTextField(
                  label: 'Requirements *',
                  hint: 'Qualifications, experience needed...',
                  controller: _reqCtrl,
                  maxLines: 4,
                  validator: (v) => v!.isEmpty ? 'Required' : null),
              const SizedBox(height: 20),
              const Divider(),
              const SizedBox(height: 8),
              const Align(
                alignment: Alignment.centerLeft,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Contact Information',
                        style: TextStyle(
                            fontSize: 16, fontWeight: FontWeight.bold)),
                    SizedBox(height: 4),
                    Text(
                        '🔒 Shown to subscribers only',
                        style: TextStyle(
                            color: AppColors.grey, fontSize: 12)),
                  ],
                ),
              ),
              const SizedBox(height: 14),
              CustomTextField(
                  label: 'Contact Name *', hint: 'Your name or HR name',
                  controller: _cNameCtrl,
                  prefixIcon: Icons.person_outline,
                  validator: (v) => v!.isEmpty ? 'Required' : null),
              const SizedBox(height: 14),
              CustomTextField(
                  label: 'Contact Phone *', hint: '0999123456',
                  controller: _cPhCtrl,
                  prefixIcon: Icons.phone_outlined,
                  keyboardType: TextInputType.phone,
                  validator: (v) => v!.isEmpty ? 'Required' : null),
              const SizedBox(height: 14),
              CustomTextField(
                  label: 'Contact Email (Optional)',
                  hint: 'hr@company.com',
                  controller: _cEmailCtrl,
                  prefixIcon: Icons.email_outlined,
                  keyboardType: TextInputType.emailAddress),
              const SizedBox(height: 28),
              CustomButton(
                  text: 'Continue to Payment (K2,000)',
                  onPressed: _submit, isLoading: _loading,
                  icon: Icons.payment),
              const SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }

  Widget _notice(String amount, String type) => Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: AppColors.accentLight,
          borderRadius: BorderRadius.circular(8),
          border: Border.all(color: AppColors.accent.withOpacity(0.4)),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(children: [
              const Icon(Icons.info_outline, color: AppColors.accent),
              const SizedBox(width: 8),
              Text('Fee: $amount  |  $type',
                  style: const TextStyle(
                      fontWeight: FontWeight.bold,
                      color: AppColors.accent)),
            ]),
            const SizedBox(height: 8),
            Text(AppStrings.paymentInstructions(amount),
                style: const TextStyle(
                    fontSize: 12, color: AppColors.darkGrey)),
          ],
        ),
      );

  Future<void> _submit() async {
    if (!_formKey.currentState!.validate()) return;
    final auth = context.read<AuthProvider>();
    if (!auth.isLoggedIn) {
      Navigator.pushNamed(context, '/login');
      return;
    }
    setState(() => _loading = true);
    try {
      final id = await _svc.postJob(JobModel(
        id: '', title: _titleCtrl.text.trim(),
        company: _compCtrl.text.trim(),
        description: _descCtrl.text.trim(),
        requirements: _reqCtrl.text.trim(),
        salary: _salCtrl.text.trim(), district: _district,
        jobType: _jobType, category: _cat,
        contactName: _cNameCtrl.text.trim(),
        contactPhone: _cPhCtrl.text.trim(),
        contactEmail: _cEmailCtrl.text.trim(),
        postedById: auth.user!.id,
        postedByName: auth.user!.name,
        postedAt: DateTime.now(),
      ));
      if (!mounted) return;
      setState(() => _loading = false);
      Navigator.pushReplacementNamed(context, '/payment-proof',
          arguments: {
            'paymentType': 'post_listing',
            'amount': 'K2,000',
            'listingId': id,
          });
    } catch (e) {
      setState(() => _loading = false);
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          content: Text('Error: $e'),
          backgroundColor: AppColors.error));
    }
  }
}import 'package:flutter/material.dart';
import '../../constants/app_colors.dart';
import '../../constants/app_strings.dart';
import '../../models/house_model.dart';
import '../../services/firestore_service.dart';
import '../../widgets/listing_card.dart';

class HousesScreen extends StatefulWidget {
  const HousesScreen({super.key});
  @override
  State<HousesScreen> createState() => _HousesScreenState();
}

class _HousesScreenState extends State<HousesScreen> {
  final _svc = FirestoreService();
  String _district = 'All Districts';
  String _type = 'All';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        title: const Text('Houses & Properties'),
        actions: [
          IconButton(
              icon: const Icon(Icons.add_circle_outline),
              onPressed: () =>
                  Navigator.pushNamed(context, '/post-house')),
        ],
      ),
      body: Column(children: [
        Container(
          color: Colors.white,
          padding: const EdgeInsets.symmetric(
              horizontal: 16, vertical: 8),
          child: Row(children: [
            Expanded(
              child: DropdownButton<String>(
                value: _district, isExpanded: true,
                underline: const SizedBox(),
                items: AppStrings.districts
                    .map((d) => DropdownMenuItem(
                        value: d,
                        child: Text(d,
                            style: const TextStyle(fontSize: 13),
                            overflow: TextOverflow.ellipsis)))
                    .toList(),
                onChanged: (v) => setState(() => _district = v!),
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: DropdownButton<String>(
                value: _type, isExpanded: true,
                underline: const SizedBox(),
                items: const ['All', 'For Rent', 'For Sale']
                    .map((t) => DropdownMenuItem(
                        value: t, child: Text(t)))
                    .toList(),
                onChanged: (v) => setState(() => _type = v!),
              ),
            ),
          ]),
        ),
        Expanded(
          child: StreamBuilder<List<HouseModel>>(
            stream: _svc.getHouses(
                district: _district == 'All Districts'
                    ? null : _district,
                type: _type == 'All' ? null : _type),
            builder: (_, snap) {
              if (snap.connectionState == ConnectionState.waiting) {
                return const Center(
                    child: CircularProgressIndicator(
                        color: AppColors.primary));
              }
              final houses = snap.data ?? [];
              if (houses.isEmpty) {
                return Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Icon(Icons.home_work_outlined,
                          size: 60, color: AppColors.grey),
                      const SizedBox(height: 16),
                      const Text('No houses found',
                          style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold)),
                      const SizedBox(height: 20),
                      ElevatedButton.icon(
                        onPressed: () => Navigator.pushNamed(
                            context, '/post-house'),
                        icon: const Icon(Icons.add),
                        label: const Text('Post a House'),
                      ),
                    ],
                  ),
                );
              }
              return ListView.builder(
                padding: const EdgeInsets.all(16),
                itemCount: houses.length,
                itemBuilder: (_, i) {
                  final h = houses[i];
                  return ListingCard(
                    id: h.id, title: h.title,
                    subtitle:
                        '${h.bedrooms} bed • ${h.bathrooms} bath • ${h.priceType}',
                    price: h.price, district: h.district,
                    imageUrl: h.imageUrls.isNotEmpty
                        ? h.imageUrls.first : null,
                    isBoosted: h.isBoosted, postedAt: h.postedAt,
                    categoryIcon: Icons.home,
                    onTap: () => Navigator.pushNamed(
                        context, '/house-details',
                        arguments: {'houseId': h.id}),
                  );
                },
              );
            },
          ),
        ),
      ]),
    );
  }
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:timeago/timeago.dart' as timeago;
import '../../constants/app_colors.dart';
import '../../models/house_model.dart';
import '../../providers/auth_provider.dart';
import '../../services/firestore_service.dart';
import '../../widgets/contact_lock_widget.dart';
import '../../widgets/custom_button.dart';

class HouseDetailsScreen extends StatelessWidget {
  final String houseId;
  const HouseDetailsScreen({super.key, required this.houseId});

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();
    final svc = FirestoreService();

    return FutureBuilder<HouseModel?>(
      future: svc.getHouse(houseId),
      builder: (_, snap) {
        if (snap.connectionState == ConnectionState.waiting) {
          return const Scaffold(
              body: Center(
                  child: CircularProgressIndicator(
                      color: AppColors.primary)));
        }
        final h = snap.data;
        if (h == null) {
          return Scaffold(
              appBar: AppBar(),
              body: const Center(child: Text('House not found')));
        }

        return Scaffold(
          backgroundColor: AppColors.background,
          body: CustomScrollView(slivers: [
            SliverAppBar(
              expandedHeight: h.imageUrls.isNotEmpty ? 250 : 100,
              pinned: true, backgroundColor: AppColors.primary,
              actions: [
                IconButton(
                    icon: const Icon(Icons.bookmark_border),
                    onPressed: () {
                      if (!auth.isLoggedIn) {
                        Navigator.pushNamed(context, '/login');
                        return;
                      }
                      svc.toggleSavedListing(
                          auth.user!.id, houseId);
                    }),
              ],
              flexibleSpace: FlexibleSpaceBar(
                background: h.imageUrls.isNotEmpty
                    ? CachedNetworkImage(
                        imageUrl: h.imageUrls.first, fit: BoxFit.cover)
                    : Container(
                        color: AppColors.accentLight,
                        child: const Icon(Icons.home,
                            size: 80, color: AppColors.accent)),
              ),
            ),
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    if (h.isBoosted)
                      _tag('⚡ BOOSTED', AppColors.accent),
                    Row(
                        mainAxisAlignment:
                            MainAxisAlignment.spaceBetween,
                        children: [
                          Expanded(
                              child: Text(h.title,
                                  style: const TextStyle(
                                      fontSize: 22,
                                      fontWeight: FontWeight.bold))),
                          Container(
                            padding: const EdgeInsets.symmetric(
                                horizontal: 10, vertical: 4),
                            decoration: BoxDecoration(
                                color: h.priceType == 'For Sale'
                                    ? AppColors.primaryLight
                                    : AppColors.accentLight,
                                borderRadius:
                                    BorderRadius.circular(6)),
                            child: Text(h.priceType,
                                style: TextStyle(
                                    color: h.priceType == 'For Sale'
                                        ? AppColors.primary
                                        : AppColors.accent,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 12)),
                          ),
                        ]),
                    const SizedBox(height: 6),
                    Text('${h.price}',
                        style: const TextStyle(
                            fontSize: 24,
                            fontWeight: FontWeight.bold,
                            color: AppColors.primary)),
                    const SizedBox(height: 10),
                    Wrap(spacing: 8, runSpacing: 6, children: [
                      _chip(Icons.bed, '${h.bedrooms} Bedrooms'),
                      _chip(Icons.bathtub_outlined,
                          '${h.bathrooms} Bathrooms'),
                      _chip(Icons.home, h.houseType),
                      _chip(Icons.location_on, h.district),
                      _chip(
                          Icons.schedule, timeago.format(h.postedAt)),
                    ]),
                    const SizedBox(height: 14),
                    if (h.address.isNotEmpty) ...[
                      const Text('Address',
                          style: TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 15)),
                      const SizedBox(height: 4),
                      Text(h.address,
                          style: const TextStyle(
                              fontSize: 14, color: AppColors.darkGrey)),
                      const SizedBox(height: 14),
                    ],
                    const Text('Description',
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 15)),
                    const SizedBox(height: 4),
                    Text(h.description,
                        style: const TextStyle(
                            fontSize: 14, height: 1.65)),
                    if (h.amenities.isNotEmpty) ...[
                      const SizedBox(height: 14),
                      const Text('Amenities',
                          style: TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 15)),
                      const SizedBox(height: 8),
                      Wrap(
                        spacing: 8, runSpacing: 8,
                        children: h.amenities
                            .map((a) => Chip(
                                label: Text(a, style: const TextStyle(fontSize: 12)),
                                backgroundColor: AppColors.primaryLight))
                            .toList(),
                      ),
                    ],
                    const SizedBox(height: 20),
                    ContactLockWidget(
                      isSubscribed: auth.hasActiveSubscription,
                      contactName: h.contactName,
                      contactPhone: h.contactPhone,
                      contactEmail: h.contactEmail,
                      isLoggedIn: auth.isLoggedIn,
                      onSubscribeTap: () => Navigator.pushNamed(
                          context,
                          auth.isLoggedIn ? '/subscription' : '/login'),
                    ),
                    const SizedBox(height: 12),
                    if (auth.isLoggedIn &&
                        h.postedById != auth.user?.id)
                      CustomButton(
                        text: 'Message Owner',
                        icon: Icons.chat_bubble_outline,
                        isOutlined: true,
                        onPressed: () => Navigator.pushNamed(
                            context, '/chat',
                            arguments: {
                              'chatId':
                                  '${auth.user?.id}_${h.postedById}',
                              'recipientId': h.postedById,
                              'recipientName': h.postedByName,
                            }),
                      ),
                    const SizedBox(height: 80),
                  ],
                ),
              ),
            ),
          ]),
        );
      },
    );
  }

  Widget _tag(String t, Color c) => Container(
      margin: const EdgeInsets.only(bottom: 6),
      padding:
          const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
          color: c.withOpacity(0.15),
          borderRadius: BorderRadius.circular(4)),
      child: Text(t,
          style: TextStyle(
              color: c, fontWeight: FontWeight.bold, fontSize: 12)));

  Widget _chip(IconData icon, String text) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        decoration: BoxDecoration(
            color: Colors.grey.shade100,
            borderRadius: BorderRadius.circular(20)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          Icon(icon, size: 13, color: AppColors.grey),
          const SizedBox(width: 4),
          Text(text,
              style: const TextStyle(
                  fontSize: 12, color: AppColors.darkGrey)),
        ]));
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../constants/app_colors.dart';
import '../../constants/app_strings.dart';
import '../../models/house_model.dart';
import '../../providers/auth_provider.dart';
import '../../services/firestore_service.dart';
import '../../widgets/custom_button.dart';
import '../../widgets/custom_text_field.dart';

class PostHouseScreen extends StatefulWidget {
  const PostHouseScreen({super.key});
  @override
  State<PostHouseScreen> createState() => _PostHouseScreenState();
}

class _PostHouseScreenState extends State<PostHouseScreen> {
  final _formKey = GlobalKey<FormState>();
  final _svc = FirestoreService();
  final _titleCtrl = TextEditingController();
  final _descCtrl = TextEditingController();
  final _priceCtrl = TextEditingController();
  final _addrCtrl = TextEditingController();
  final _cNameCtrl = TextEditingController();
  final _cPhCtrl = TextEditingController();
  final _cEmailCtrl = TextEditingController();

  String _priceType = 'For Rent';
  String _houseType = 'House';
  String _district = 'Lilongwe';
  int _beds = 1, _baths = 1;
  bool _loading = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(title: const Text('Post a House')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Form(
          key: _formKey,
          child: Column(children: [
            _payNotice(),
            const SizedBox(height: 20),
            CustomTextField(
                label: 'Title *', hint: 'e.g. 3 Bedroom House in Area 49',
                controller: _titleCtrl,
                validator: (v) => v!.isEmpty ? 'Required' : null),
            const SizedBox(height: 14),
            CustomDropdown(
                label: 'Listing Type *', value: _priceType,
                items: const ['For Rent', 'For Sale'],
                onChanged: (v) => setState(() => _priceType = v!)),
            const SizedBox(height: 14),
            CustomDropdown(
                label: 'House Type *', value: _houseType,
                items: const [
                  'House', 'Apartment', 'Townhouse',
                  'Studio', 'Villa', 'Office Space', 'Plot/Land'
                ],
                onChanged: (v) => setState(() => _houseType = v!)),
            const SizedBox(height: 14),
            CustomDropdown(
                label: 'District *', value: _district,
                items: AppStrings.districts.skip(1).toList(),
                onChanged: (v) => setState(() => _district = v!)),
            const SizedBox(height: 14),
            CustomTextField(
                label: 'Price *',
                hint: _priceType == 'For Rent'
                    ? 'e.g. K50,000/month' : 'e.g. K5,000,000',
                controller: _priceCtrl,
                validator: (v) => v!.isEmpty ? 'Required' : null),
            const SizedBox(height: 14),
            Row(children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text('Bedrooms',
                        style: TextStyle(
                            fontSize: 14, fontWeight: FontWeight.w500)),
                    const SizedBox(height: 6),
                    Row(children: [
                      IconButton(
                          onPressed: () =>
                              setState(() => _beds = (_beds - 1).clamp(0, 10)),
                          icon: const Icon(Icons.remove_circle_outline)),
                      Text('$_beds',
                          style: const TextStyle(
                              fontSize: 18, fontWeight: FontWeight.bold)),
                      IconButton(
                          onPressed: () =>
                              setState(() => _beds = (_beds + 1).clamp(0, 10)),
                          icon: const Icon(Icons.add_circle_outline,
                              color: AppColors.primary)),
                    ]),
                  ],
                ),
              ),
              const SizedBox(width: 16),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text('Bathrooms',
                        style: TextStyle(
                            fontSize: 14, fontWeight: FontWeight.w500)),
                    const SizedBox(height: 6),
                    Row(children: [
                      IconButton(
                          onPressed: () =>
                              setState(() => _baths = (_baths - 1).clamp(0, 10)),
                          icon: const Icon(Icons.remove_circle_outline)),
                      Text('$_baths',
                          style: const TextStyle(
                              fontSize: 18, fontWeight: FontWeight.bold)),
                      IconButton(
                          onPressed: () =>
                              setState(() => _baths = (_baths + 1).clamp(0, 10)),
                          icon: const Icon(Icons.add_circle_outline,
                              color: AppColors.primary)),
                    ]),
                  ],
                ),
              ),
            ]),
            const SizedBox(height: 14),
            CustomTextField(
                label: 'Address / Location Details',
                hint: 'e.g. Area 49, Off Mchinji Road',
                controller: _addrCtrl),
            const SizedBox(height: 14),
            CustomTextField(
                label: 'Description *',
                hint: 'Describe the property...',
                controller: _descCtrl, maxLines: 4,
                validator: (v) => v!.isEmpty ? 'Required' : null),
            const SizedBox(height: 20),
            const Divider(),
            const Align(
              alignment: Alignment.centerLeft,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Contact Info',
                      style: TextStyle(
                          fontSize: 16, fontWeight: FontWeight.bold)),
                  Text('🔒 Shown to subscribers only',
                      style: TextStyle(
                          color: AppColors.grey, fontSize: 12)),
                ],
              ),
            ),
            const SizedBox(height: 14),
            CustomTextField(
                label: 'Your Name *', controller: _cNameCtrl,
                prefixIcon: Icons.person_outline,
                validator: (v) => v!.isEmpty ? 'Required' : null),
            const SizedBox(height: 14),
            CustomTextField(
                label: 'Phone Number *', controller: _cPhCtrl,
                prefixIcon: Icons.phone_outlined,
                keyboardType: TextInputType.phone,
                validator: (v) => v!.isEmpty ? 'Required' : null),
            const SizedBox(height: 14),
            CustomTextField(
                label: 'Email (Optional)', controller: _cEmailCtrl,
                prefixIcon: Icons.email_outlined,
                keyboardType: TextInputType.emailAddress),
            const SizedBox(height: 28),
            CustomButton(
                text: 'Continue to Payment (K2,000)',
                onPressed: _submit, isLoading: _loading,
                icon: Icons.payment),
            const SizedBox(height: 40),
          ]),
        ),
      ),
    );
  }

  Widget _payNotice() => Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: AppColors.accentLight,
          borderRadius: BorderRadius.circular(8),
          border: Border.all(color: AppColors.accent.withOpacity(0.4)),
        ),
        child: Row(children: [
          const Icon(Icons.info_outline, color: AppColors.accent),
          const SizedBox(width: 8),
          const Expanded(
            child: Text('Posting fee: K2,000 — Pay after submitting',
                style: TextStyle(
                    fontSize: 13, color: AppColors.darkGrey)),
          ),
        ]),
      );

  Future<void> _submit() async {
    if (!_formKey.currentState!.validate()) return;
    final auth = context.read<AuthProvider>();
    if (!auth.isLoggedIn) {
      Navigator.pushNamed(context, '/login');
      return;
    }
    setState(() => _loading = true);
    try {
      final id = await _svc.postHouse(HouseModel(
        id: '', title: _titleCtrl.text.trim(),
        description: _descCtrl.text.trim(),
        price: _priceCtrl.text.trim(),
        priceType: _priceType, houseType: _houseType,
        bedrooms: _beds, bathrooms: _baths,
        district: _district, address: _addrCtrl.text.trim(),
        contactName: _cNameCtrl.text.trim(),
        contactPhone: _cPhCtrl.text.trim(),
        contactEmail: _cEmailCtrl.text.trim(),
        postedById: auth.user!.id,
        postedByName: auth.user!.name,
        postedAt: DateTime.now(),
      ));
      if (!mounted) return;
      setState(() => _loading = false);
      Navigator.pushReplacementNamed(context, '/payment-proof',
          arguments: {
            'paymentType': 'post_listing',
            'amount': 'K2,000', 'listingId': id,
          });
    } catch (e) {
      setState(() => _loading = false);
      ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Error: $e'), backgroundColor: AppColors.error));
    }
  }
}import 'package:flutter/material.dart';
import '../../constants/app_colors.dart';
import '../../constants/app_strings.dart';
import '../../models/product_model.dart';
import '../../services/firestore_service.dart';
import '../../widgets/listing_card.dart';

class ProductsScreen extends StatefulWidget {
  const ProductsScreen({super.key});
  @override
  State<ProductsScreen> createState() => _ProductsScreenState();
}

class _ProductsScreenState extends State<ProductsScreen> {
  final _svc = FirestoreService();
  String _district = 'All Districts';
  String _cat = 'All';
  final _cats = ['All', 'Maize', 'Vegetables', 'Fruits', 'Livestock',
    'Poultry', 'Rice', 'Beans', 'Groundnuts', 'Other Crops'];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(title: const Text('Farm Products'),
          actions: [
            IconButton(icon: const Icon(Icons.add_circle_outline),
                onPressed: () => Navigator.pushNamed(context, '/post-product')),
          ]),
      body: Column(children: [
        Container(
          color: Colors.white,
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
          child: Row(children: [
            Expanded(child: DropdownButton<String>(
              value: _district, isExpanded: true, underline: const SizedBox(),
              items: AppStrings.districts.map((d) => DropdownMenuItem(
                  value: d, child: Text(d, style: const TextStyle(fontSize: 13),
                      overflow: TextOverflow.ellipsis))).toList(),
              onChanged: (v) => setState(() => _district = v!),
            )),
            const SizedBox(width: 12),
            Expanded(child: DropdownButton<String>(
              value: _cat, isExpanded: true, underline: const SizedBox(),
              items: _cats.map((c) => DropdownMenuItem(value: c,
                  child: Text(c, style: const TextStyle(fontSize: 13)))).toList(),
              onChanged: (v) => setState(() => _cat = v!),
            )),
          ]),
        ),
        Expanded(
          child: StreamBuilder<List<ProductModel>>(
            stream: _svc.getProducts(
              district: _district == 'All Districts' ? null : _district,
              category: _cat == 'All' ? null : _cat,
            ),
            builder: (_, snap) {
              if (snap.connectionState == ConnectionState.waiting) {
                return const Center(child: CircularProgressIndicator(color: AppColors.primary));
              }
              final items = snap.data ?? [];
              if (items.isEmpty) return Center(child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.agriculture, size: 60, color: AppColors.grey),
                  const SizedBox(height: 16),
                  const Text('No products found'),
                  const SizedBox(height: 20),
                  ElevatedButton.icon(
                    onPressed: () => Navigator.pushNamed(context, '/post-product'),
                    icon: const Icon(Icons.add), label: const Text('Post a Product')),
                ],
              ));
              return ListView.builder(
                padding: const EdgeInsets.all(16), itemCount: items.length,
                itemBuilder: (_, i) {
                  final p = items[i];
                  return ListingCard(
                    id: p.id, title: p.title,
                    subtitle: '${p.category} • ${p.quantity} ${p.unit}',
                    price: '${p.price}/${p.unit}', district: p.district,
                    imageUrl: p.imageUrls.isNotEmpty ? p.imageUrls.first : null,
                    isBoosted: p.isBoosted, postedAt: p.postedAt,
                    categoryIcon: Icons.agriculture,
                    onTap: () => Navigator.pushNamed(context, '/product-details',
                        arguments: {'productId': p.id}),
                  );
                },
              );
            },
          ),
        ),
      ]),
    );
  }
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:cached_network_image/cached_network_image.dart';
import '../../constants/app_colors.dart';
import '../../models/product_model.dart';
import '../../providers/auth_provider.dart';
import '../../services/firestore_service.dart';
import '../../widgets/contact_lock_widget.dart';
import '../../widgets/custom_button.dart';

class ProductDetailsScreen extends StatelessWidget {
  final String productId;
  const ProductDetailsScreen({super.key, required this.productId});

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();
    final svc = FirestoreService();

    return FutureBuilder<ProductModel?>(
      future: svc.getProduct(productId),
      builder: (_, snap) {
        if (snap.connectionState == ConnectionState.waiting) {
          return const Scaffold(body: Center(
              child: CircularProgressIndicator(color: AppColors.primary)));
        }
        final p = snap.data;
        if (p == null) {
          return Scaffold(appBar: AppBar(),
              body: const Center(child: Text('Product not found')));
        }
        return Scaffold(
          backgroundColor: AppColors.background,
          body: CustomScrollView(slivers: [
            SliverAppBar(
              expandedHeight: p.imageUrls.isNotEmpty ? 250 : 100,
              pinned: true, backgroundColor: AppColors.primary,
              flexibleSpace: FlexibleSpaceBar(
                background: p.imageUrls.isNotEmpty
                    ? CachedNetworkImage(imageUrl: p.imageUrls.first, fit: BoxFit.cover)
                    : Container(color: const Color(0xFFC8E6C9),
                        child: const Icon(Icons.agriculture, size: 80, color: AppColors.primary)),
              ),
            ),
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  if (p.isBoosted)
                    Container(
                      margin: const EdgeInsets.only(bottom: 6),
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                      decoration: BoxDecoration(color: AppColors.accentLight,
                          borderRadius: BorderRadius.circular(4)),
                      child: const Text('⚡ BOOSTED',
                          style: TextStyle(color: AppColors.accent,
                              fontWeight: FontWeight.bold, fontSize: 12)),
                    ),
                  Text(p.title, style: const TextStyle(
                      fontSize: 22, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 8),
                  Row(children: [
                    const Icon(Icons.category, size: 16, color: AppColors.grey),
                    const SizedBox(width: 4),
                    Text('${p.category}  •  ${p.quantity} ${p.unit} available',
                        style: const TextStyle(color: AppColors.darkGrey)),
                  ]),
                  const SizedBox(height: 12),
                  Container(
                    padding: const EdgeInsets.all(14),
                    decoration: BoxDecoration(color: AppColors.primaryLight,
                        borderRadius: BorderRadius.circular(8)),
                    child: Row(children: [
                      const Icon(Icons.attach_money, color: AppColors.primary),
                      const SizedBox(width: 8),
                      Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        const Text('Price', style: TextStyle(color: AppColors.grey, fontSize: 12)),
                        Text('${p.price} / ${p.unit}',
                            style: const TextStyle(color: AppColors.primary,
                                fontWeight: FontWeight.bold, fontSize: 20)),
                      ]),
                    ]),
                  ),
                  const SizedBox(height: 16),
                  const Text('Description', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 6),
                  Text(p.description,
                      style: const TextStyle(fontSize: 14, height: 1.65)),
                  const SizedBox(height: 20),
                  ContactLockWidget(
                    isSubscribed: auth.hasActiveSubscription,
                    contactName: p.contactName, contactPhone: p.contactPhone,
                    contactEmail: p.contactEmail, isLoggedIn: auth.isLoggedIn,
                    onSubscribeTap: () => Navigator.pushNamed(context,
                        auth.isLoggedIn ? '/subscription' : '/login'),
                  ),
                  const SizedBox(height: 80),
                ]),
              ),
            ),
          ]),
        );
      },
    );
  }
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../constants/app_colors.dart';
import '../../constants/app_strings.dart';
import '../../models/product_model.dart';
import '../../providers/auth_provider.dart';
import '../../services/firestore_service.dart';
import '../../widgets/custom_button.dart';
import '../../widgets/custom_text_field.dart';

class PostProductScreen extends StatefulWidget {
  const PostProductScreen({super.key});
  @override
  State<PostProductScreen> createState() => _PostProductScreenState();
}

class _PostProductScreenState extends State<PostProductScreen> {
  final _fk = GlobalKey<FormState>();
  final _svc = FirestoreService();
  final _titleCtrl = TextEditingController();
  final _descCtrl = TextEditingController();
  final _priceCtrl = TextEditingController();
  final _cNameCtrl = TextEditingController();
  final _cPhCtrl = TextEditingController();
  final _cEmailCtrl = TextEditingController();
  String _cat = 'Maize';
  String _unit = 'kg';
  String _district = 'Lilongwe';
  int _qty = 1;
  bool _loading = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(title: const Text('Post Farm Product')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Form(
          key: _fk,
          child: Column(children: [
            Container(
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(color: AppColors.accentLight,
                  borderRadius: BorderRadius.circular(8),
                  border: Border.all(color: AppColors.accent.withOpacity(0.4))),
              child: Row(children: [
                const Icon(Icons.info_outline, color: AppColors.accent),
                const SizedBox(width: 8),
                const Expanded(child: Text('Posting fee: K2,000 — paid after submitting',
                    style: TextStyle(fontSize: 13, color: AppColors.darkGrey))),
              ]),
            ),
            const SizedBox(height: 20),
            CustomTextField(label: 'Product Name *', hint: 'e.g. Hybrid Maize Seeds',
                controller: _titleCtrl,
                validator: (v) => v!.isEmpty ? 'Required' : null),
            const SizedBox(height: 14),
            CustomDropdown(label: 'Category *', value: _cat,
                items: const ['Maize', 'Vegetables', 'Fruits', 'Livestock',
                  'Poultry', 'Rice', 'Beans', 'Groundnuts', 'Other Crops'],
                onChanged: (v) => setState(() => _cat = v!)),
            const SizedBox(height: 14),
            Row(children: [
              Expanded(child: CustomTextField(label: 'Price *', hint: 'e.g. 500',
                  controller: _priceCtrl, keyboardType: TextInputType.number,
                  validator: (v) => v!.isEmpty ? 'Required' : null)),
              const SizedBox(width: 12),
              Expanded(child: CustomDropdown(label: 'Per Unit *', value: _unit,
                  items: const ['kg', 'bag', 'piece', 'litre', 'bundle', 'tray'],
                  onChanged: (v) => setState(() => _unit = v!))),
            ]),
            const SizedBox(height: 14),
            Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Text('Quantity Available', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w500)),
              const SizedBox(height: 6),
              Row(children: [
                IconButton(onPressed: () => setState(() => _qty = (_qty - 1).clamp(1, 9999)),
                    icon: const Icon(Icons.remove_circle_outline)),
                Text('$_qty', style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                IconButton(onPressed: () => setState(() => _qty++),
                    icon: const Icon(Icons.add_circle_outline, color: AppColors.primary)),
              ]),
            ]),
            const SizedBox(height: 14),
            CustomDropdown(label: 'District *', value: _district,
                items: AppStrings.districts.skip(1).toList(),
                onChanged: (v) => setState(() => _district = v!)),
            const SizedBox(height: 14),
            CustomTextField(label: 'Description *', hint: 'Quality, condition, harvest date...',
                controller: _descCtrl, maxLines: 4,
                validator: (v) => v!.isEmpty ? 'Required' : null),
            const SizedBox(height: 20),
            const Divider(),
            const Align(alignment: Alignment.centerLeft, child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Contact Info', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                Text('🔒 Shown to subscribers only', style: TextStyle(color: AppColors.grey, fontSize: 12)),
              ],
            )),
            const SizedBox(height: 14),
            CustomTextField(label: 'Your Name *', controller: _cNameCtrl,
                prefixIcon: Icons.person_outline,
                validator: (v) => v!.isEmpty ? 'Required' : null),
            const SizedBox(height: 14),
            CustomTextField(label: 'Phone Number *', controller: _cPhCtrl,
                prefixIcon: Icons.phone_outlined, keyboardType: TextInputType.phone,
                validator: (v) => v!.isEmpty ? 'Required' : null),
            const SizedBox(height: 14),
            CustomTextField(label: 'Email (Optional)', controller: _cEmailCtrl,
                prefixIcon: Icons.email_outlined, keyboardType: TextInputType.emailAddress),
            const SizedBox(height: 28),
            CustomButton(text: 'Continue to Payment (K2,000)',
                onPressed: _submit, isLoading: _loading, icon: Icons.payment),
            const SizedBox(height: 40),
          ]),
        ),
      ),
    );
  }

  Future<void> _submit() async {
    if (!_fk.currentState!.validate()) return;
    final auth = context.read<AuthProvider>();
    if (!auth.isLoggedIn) { Navigator.pushNamed(context, '/login'); return; }
    setState(() => _loading = true);
    try {
      final id = await _svc.postProduct(ProductModel(
        id: '', title: _titleCtrl.text.trim(), description: _descCtrl.text.trim(),
        price: _priceCtrl.text.trim(), unit: _unit, category: _cat,
        district: _district, contactName: _cNameCtrl.text.trim(),
        contactPhone: _cPhCtrl.text.trim(), contactEmail: _cEmailCtrl.text.trim(),
        postedById: auth.user!.id, postedByName: auth.user!.name,
        postedAt: DateTime.now(), quantity: _qty,
      ));
      if (!mounted) return;
      setState(() => _loading = false);
      Navigator.pushReplacementNamed(context, '/payment-proof',
          arguments: {'paymentType': 'post_listing', 'amount': 'K2,000', 'listingId': id});
    } catch (e) {
      setState(() => _loading = false);
      ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Error: $e'), backgroundColor: AppColors.error));
    }
  }
}import 'package:flutter/material.dart';
import '../../constants/app_colors.dart';
import '../../constants/app_strings.dart';
import '../../models/other_item_model.dart';
import '../../services/firestore_service.dart';
import '../../widgets/listing_card.dart';

class OtherItemsScreen extends StatefulWidget {
  const OtherItemsScreen({super.key});
  @override
  State<OtherItemsScreen> createState() => _OtherItemsScreenState();
}

class _OtherItemsScreenState extends State<OtherItemsScreen> {
  final _svc = FirestoreService();
  String _district = 'All Districts';
  String _cat = 'All';
  final _cats = ['All', 'Electronics', 'Furniture', 'Vehicles',
    'Clothing', 'Books', 'Appliances', 'Tools', 'Other'];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(title: const Text('Other Items'),
          actions: [
            IconButton(icon: const Icon(Icons.add_circle_outline),
                onPressed: () => Navigator.pushNamed(context, '/post-other-item')),
          ]),
      body: Column(children: [
        Container(
          color: Colors.white,
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
          child: Row(children: [
            Expanded(child: DropdownButton<String>(
              value: _district, isExpanded: true, underline: const SizedBox(),
              items: AppStrings.districts.map((d) => DropdownMenuItem(
                  value: d, child: Text(d, style: const TextStyle(fontSize: 13),
                      overflow: TextOverflow.ellipsis))).toList(),
              onChanged: (v) => setState(() => _district = v!),
            )),
            const SizedBox(width: 12),
            Expanded(child: DropdownButton<String>(
              value: _cat, isExpanded: true, underline: const SizedBox(),
              items: _cats.map((c) => DropdownMenuItem(value: c,
                  child: Text(c, style: const TextStyle(fontSize: 13)))).toList(),
              onChanged: (v) => setState(() => _cat = v!),
            )),
          ]),
        ),
        Expanded(
          child: StreamBuilder<List<OtherItemModel>>(
            stream: _svc.getOtherItems(
              district: _district == 'All Districts' ? null : _district,
              category: _cat == 'All' ? null : _cat,
            ),
            builder: (_, snap) {
              if (snap.connectionState == ConnectionState.waiting) {
                return const Center(child: CircularProgressIndicator(color: AppColors.primary));
              }
              final items = snap.data ?? [];
              if (items.isEmpty) return Center(child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.category_outlined, size: 60, color: AppColors.grey),
                  const SizedBox(height: 16),
                  const Text('No items found'),
                  const SizedBox(height: 20),
                  ElevatedButton.icon(
                    onPressed: () => Navigator.pushNamed(context, '/post-other-item'),
                    icon: const Icon(Icons.add), label: const Text('Post an Item')),
                ],
              ));
              return ListView.builder(
                padding: const EdgeInsets.all(16), itemCount: items.length,
                itemBuilder: (_, i) {
                  final it = items[i];
                  return ListingCard(
                    id: it.id, title: it.title,
                    subtitle: '${it.category} • ${it.condition}',
                    price: it.price, district: it.district,
                    imageUrl: it.imageUrls.isNotEmpty ? it.imageUrls.first : null,
                    isBoosted: it.isBoosted, postedAt: it.postedAt,
                    categoryIcon: Icons.category,
                    onTap: () => Navigator.pushNamed(context, '/other-item-details',
                        arguments: {'itemId': it.id}),
                  );
                },
              );
            },
          ),
        ),
      ]),
    );
  }
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:cached_network_image/cached_network_image.dart';
import '../../constants/app_colors.dart';
import '../../models/other_item_model.dart';
import '../../providers/auth_provider.dart';
import '../../services/firestore_service.dart';
import '../../widgets/contact_lock_widget.dart';
import '../../widgets/custom_button.dart';

class OtherItemDetailsScreen extends StatelessWidget {
  final String itemId;
  const OtherItemDetailsScreen({super.key, required this.itemId});

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();
    final svc = FirestoreService();

    return FutureBuilder<OtherItemModel?>(
      future: svc.getOtherItem(itemId),
      builder: (_, snap) {
        if (snap.connectionState == ConnectionState.waiting) {
          return const Scaffold(body: Center(
              child: CircularProgressIndicator(color: AppColors.primary)));
        }
        final it = snap.data;
        if (it == null) {
          return Scaffold(appBar: AppBar(),
              body: const Center(child: Text('Item not found')));
        }
        return Scaffold(
          backgroundColor: AppColors.background,
          body: CustomScrollView(slivers: [
            SliverAppBar(
              expandedHeight: it.imageUrls.isNotEmpty ? 250 : 100,
              pinned: true, backgroundColor: AppColors.primary,
              flexibleSpace: FlexibleSpaceBar(
                background: it.imageUrls.isNotEmpty
                    ? CachedNetworkImage(imageUrl: it.imageUrls.first, fit: BoxFit.cover)
                    : Container(color: Colors.blue.shade50,
                        child: const Icon(Icons.category, size: 80, color: Colors.blue)),
              ),
            ),
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  if (it.isBoosted)
                    Container(margin: const EdgeInsets.only(bottom: 6),
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                      decoration: BoxDecoration(color: AppColors.accentLight,
                          borderRadius: BorderRadius.circular(4)),
                      child: const Text('⚡ BOOSTED', style: TextStyle(
                          color: AppColors.accent, fontWeight: FontWeight.bold, fontSize: 12))),
                  Text(it.title, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 8),
                  Row(children: [
                    _tag(it.category, Colors.blue),
                    const SizedBox(width: 8),
                    _tag(it.condition, it.condition == 'New' ? AppColors.primary : AppColors.grey),
                  ]),
                  const SizedBox(height: 12),
                  Text(it.price, style: const TextStyle(
                      fontSize: 24, fontWeight: FontWeight.bold, color: AppColors.primary)),
                  const SizedBox(height: 16),
                  const Text('Description', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 6),
                  Text(it.description, style: const TextStyle(fontSize: 14, height: 1.65)),
                  const SizedBox(height: 20),
                  ContactLockWidget(
                    isSubscribed: auth.hasActiveSubscription,
                    contactName: it.contactName, contactPhone: it.contactPhone,
                    contactEmail: it.contactEmail, isLoggedIn: auth.isLoggedIn,
                    onSubscribeTap: () => Navigator.pushNamed(context,
                        auth.isLoggedIn ? '/subscription' : '/login'),
                  ),
                  const SizedBox(height: 12),
                  if (auth.isLoggedIn && it.postedById != auth.user?.id)
                    CustomButton(
                      text: 'Send Message', icon: Icons.chat_bubble_outline,
                      isOutlined: true,
                      onPressed: () => Navigator.pushNamed(context, '/chat', arguments: {
                        'chatId': '${auth.user?.id}_${it.postedById}',
                        'recipientId': it.postedById, 'recipientName': it.postedByName,
                      }),
                    ),
                  const SizedBox(height: 80),
                ]),
              ),
            ),
          ]),
        );
      },
    );
  }

  Widget _tag(String text, Color color) => Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(color: color.withOpacity(0.1),
          borderRadius: BorderRadius.circular(12)),
      child: Text(text, style: TextStyle(color: color, fontSize: 12, fontWeight: FontWeight.w600)));
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../constants/app_colors.dart';
import '../../constants/app_strings.dart';
import '../../models/other_item_model.dart';
import '../../providers/auth_provider.dart';
import '../../services/firestore_service.dart';
import '../../widgets/custom_button.dart';
import '../../widgets/custom_text_field.dart';

class PostOtherItemScreen extends StatefulWidget {
  const PostOtherItemScreen({super.key});
  @override
  State<PostOtherItemScreen> createState() => _PostOtherItemScreenState();
}

class _PostOtherItemScreenState extends State<PostOtherItemScreen> {
  final _fk = GlobalKey<FormState>();
  final _svc = FirestoreService();
  final _titleCtrl = TextEditingController();
  final _descCtrl = TextEditingController();
  final _priceCtrl = TextEditingController();
  final _cNameCtrl = TextEditingController();
  final _cPhCtrl = TextEditingController();
  final _cEmailCtrl = TextEditingController();
  String _cat = 'Electronics', _condition = 'Used', _district = 'Lilongwe';
  bool _loading = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(title: const Text('Post Other Item')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Form(key: _fk, child: Column(children: [
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(color: AppColors.accentLight,
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: AppColors.accent.withOpacity(0.4))),
            child: Row(children: [
              const Icon(Icons.info_outline, color: AppColors.accent),
              const SizedBox(width: 8),
              const Expanded(child: Text('Posting fee: K2,000',
                  style: TextStyle(fontSize: 13, color: AppColors.darkGrey))),
            ]),
          ),
          const SizedBox(height: 20),
          CustomTextField(label: 'Item Title *', hint: 'e.g. Samsung TV 43 inch',
              controller: _titleCtrl, validator: (v) => v!.isEmpty ? 'Required' : null),
          const SizedBox(height: 14),
          CustomDropdown(label: 'Category *', value: _cat,
              items: const ['Electronics', 'Furniture', 'Vehicles', 'Clothing',
                'Books', 'Appliances', 'Tools', 'Sports', 'Other'],
              onChanged: (v) => setState(() => _cat = v!)),
          const SizedBox(height: 14),
          CustomDropdown(label: 'Condition *', value: _condition,
              items: const ['New', 'Used', 'Refurbished'],
              onChanged: (v) => setState(() => _condition = v!)),
          const SizedBox(height: 14),
          CustomTextField(label: 'Price *', hint: 'e.g. K50,000',
              controller: _priceCtrl, keyboardType: TextInputType.number,
              validator: (v) => v!.isEmpty ? 'Required' : null),
          const SizedBox(height: 14),
          CustomDropdown(label: 'District *', value: _district,
              items: AppStrings.districts.skip(1).toList(),
              onChanged: (v) => setState(() => _district = v!)),
          const SizedBox(height: 14),
          CustomTextField(label: 'Description *', hint: 'Describe your item...',
              controller: _descCtrl, maxLines: 4,
              validator: (v) => v!.isEmpty ? 'Required' : null),
          const SizedBox(height: 20),
          const Divider(),
          const Align(alignment: Alignment.centerLeft, child: Text(
              'Contact Info (🔒 subscribers only)',
              style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold))),
          const SizedBox(height: 14),
          CustomTextField(label: 'Your Name *', controller: _cNameCtrl,
              prefixIcon: Icons.person_outline,
              validator: (v) => v!.isEmpty ? 'Required' : null),
          const SizedBox(height: 14),
          CustomTextField(label: 'Phone Number *', controller: _cPhCtrl,
              prefixIcon: Icons.phone_outlined, keyboardType: TextInputType.phone,
              validator: (v) => v!.isEmpty ? 'Required' : null),
          const SizedBox(height: 14),
          CustomTextField(label: 'Email (Optional)', controller: _cEmailCtrl,
              prefixIcon: Icons.email_outlined, keyboardType: TextInputType.emailAddress),
          const SizedBox(height: 28),
          CustomButton(text: 'Continue to Payment (K2,000)',
              onPressed: _submit, isLoading: _loading, icon: Icons.payment),
          const SizedBox(height: 40),
        ])),
      ),
    );
  }

  Future<void> _submit() async {
    if (!_fk.currentState!.validate()) return;
    final auth = context.read<AuthProvider>();
    if (!auth.isLoggedIn) { Navigator.pushNamed(context, '/login'); return; }
    setState(() => _loading = true);
    try {
      final id = await _svc.postOtherItem(OtherItemModel(
        id: '', title: _titleCtrl.text.trim(), description: _descCtrl.text.trim(),
        price: _priceCtrl.text.trim(), category: _cat, condition: _condition,
        district: _district, contactName: _cNameCtrl.text.trim(),
        contactPhone: _cPhCtrl.text.trim(), contactEmail: _cEmailCtrl.text.trim(),
        postedById: auth.user!.id, postedByName: auth.user!.name,
        postedAt: DateTime.now(),
      ));
      if (!mounted) return;
      setState(() => _loading = false);
      Navigator.pushReplacementNamed(context, '/payment-proof',
          arguments: {'paymentType': 'post_listing', 'amount': 'K2,000', 'listingId': id});
    } catch (e) {
      setState(() => _loading = false);
      ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Error: $e'), backgroundColor: AppColors.error));
    }
  }
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../constants/app_colors.dart';
import '../../constants/app_strings.dart';
import '../../providers/auth_provider.dart';
import '../../widgets/custom_button.dart';

class SubscriptionScreen extends StatefulWidget {
  const SubscriptionScreen({super.key});
  @override
  State<SubscriptionScreen> createState() => _SubscriptionScreenState();
}

class _SubscriptionScreenState extends State<SubscriptionScreen> {
  String _plan = 'monthly';

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();

    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(title: const Text('Subscription Plans')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(children: [
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              gradient: const LinearGradient(
                  colors: [AppColors.primary, Color(0xFF2E7D32)]),
              borderRadius: BorderRadius.circular(12),
            ),
            child: const Column(children: [
              Icon(Icons.star, color: Colors.amber, size: 44),
              SizedBox(height: 10),
              Text('Unlock All Contact Details', textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white, fontSize: 20,
                      fontWeight: FontWeight.bold)),
              SizedBox(height: 8),
              Text('View phone numbers & emails for all listings.',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white70, fontSize: 14)),
            ]),
          ),
          const SizedBox(height: 20),
          const Align(alignment: Alignment.centerLeft,
              child: Text('Benefits:', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold))),
          const SizedBox(height: 10),
          ...[
            'View all contact details (phone & email)',
            'Access Jobs, Houses, Products & More contacts',
            'Unlimited contact views during subscription',
            'Direct call & email from listings',
          ].map((b) => Padding(
            padding: const EdgeInsets.only(bottom: 8),
            child: Row(children: [
              const Icon(Icons.check_circle, color: AppColors.primary, size: 20),
              const SizedBox(width: 10),
              Expanded(child: Text(b, style: const TextStyle(fontSize: 14))),
            ]),
          )),
          const SizedBox(height: 20),
          const Align(alignment: Alignment.centerLeft,
              child: Text('Choose a Plan:', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold))),
          const SizedBox(height: 12),
          _plan_('daily', 'Daily', AppStrings.dailySubFee, '1 Day', Icons.today),
          const SizedBox(height: 10),
          _plan_('weekly', 'Weekly', AppStrings.weeklySubFee, '7 Days', Icons.view_week),
          const SizedBox(height: 10),
          _plan_('monthly', 'Monthly', AppStrings.monthlySubFee, '30 Days', Icons.calendar_month, popular: true),
          const SizedBox(height: 20),
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(color: AppColors.accentLight,
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: AppColors.accent.withOpacity(0.4))),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Row(children: [
                Icon(Icons.payment, color: AppColors.accent),
                SizedBox(width: 8),
                Text('Payment Instructions', style: TextStyle(
                    fontWeight: FontWeight.bold, color: AppColors.accent)),
              ]),
              const SizedBox(height: 10),
              Text(AppStrings.paymentInstructions(_amount()),
                  style: const TextStyle(fontSize: 13, height: 1.6)),
            ]),
          ),
          const SizedBox(height: 20),
          CustomButton(
            text: 'Subscribe — ${_amount()}',
            icon: Icons.lock_open,
            onPressed: auth.isLoggedIn
                ? () => Navigator.pushNamed(context, '/payment-proof', arguments: {
                    'paymentType': 'subscription',
                    'amount': _amount(), 'listingId': null,
                  })
                : () => Navigator.pushNamed(context, '/login'),
          ),
          const SizedBox(height: 40),
        ]),
      ),
    );
  }

  Widget _plan_(String plan, String title, String price, String dur,
      IconData icon, {bool popular = false}) {
    final sel = _plan == plan;
    return GestureDetector(
      onTap: () => setState(() => _plan = plan),
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: sel ? AppColors.primaryLight : Colors.white,
          borderRadius: BorderRadius.circular(10),
          border: Border.all(
              color: sel ? AppColors.primary : AppColors.lightGrey,
              width: sel ? 2 : 1),
        ),
        child: Row(children: [
          Container(width: 48, height: 48,
            decoration: BoxDecoration(
                color: sel ? AppColors.primary : AppColors.lightGrey,
                shape: BoxShape.circle),
            child: Icon(icon, color: sel ? Colors.white : AppColors.grey)),
          const SizedBox(width: 14),
          Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Row(children: [
              Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
              if (popular) ...[
                const SizedBox(width: 8),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                  decoration: BoxDecoration(color: AppColors.accent,
                      borderRadius: BorderRadius.circular(10)),
                  child: const Text('POPULAR', style: TextStyle(
                      color: Colors.white, fontSize: 10, fontWeight: FontWeight.bold)),
                ),
              ],
            ]),
            Text(dur, style: const TextStyle(color: AppColors.grey, fontSize: 13)),
          ])),
          Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
            Text(price, style: const TextStyle(
                fontSize: 18, fontWeight: FontWeight.bold, color: AppColors.primary)),
            if (sel) const Icon(Icons.check_circle, color: AppColors.primary, size: 18),
          ]),
        ]),
      ),
    );
  }

  String _amount() => _plan == 'daily'
      ? AppStrings.dailySubFee
      : _plan == 'weekly'
          ? AppStrings.weeklySubFee
          : AppStrings.monthlySubFee;
}import 'dart:io';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../constants/app_colors.dart';
import '../../constants/app_strings.dart';
import '../../models/payment_model.dart';
import '../../models/subscription_model.dart';
import '../../providers/auth_provider.dart';
import '../../services/firestore_service.dart';
import '../../services/storage_service.dart';
import '../../widgets/custom_button.dart';

class PaymentProofScreen extends StatefulWidget {
  final String paymentType, amount;
  final String? listingId;
  const PaymentProofScreen({super.key, required this.paymentType,
      required this.amount, this.listingId});

  @override
  State<PaymentProofScreen> createState() => _PaymentProofScreenState();
}

class _PaymentProofScreenState extends State<PaymentProofScreen> {
  final _db = FirestoreService();
  final _storage = StorageService();
  File? _proof;
  String _payNumber = AppStrings.paymentNumber1;
  bool _loading = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(title: const Text('Upload Payment Proof')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          // Summary Card
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(color: AppColors.primaryLight,
                borderRadius: BorderRadius.circular(10),
                border: Border.all(color: AppColors.primary)),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Text('Payment Summary', style: TextStyle(
                  fontWeight: FontWeight.bold, fontSize: 15, color: AppColors.primary)),
              const SizedBox(height: 10),
              _row('Type', _label()),
              _row('Amount', widget.amount),
              _row('Status', '⏳ Pending Admin Approval'),
            ]),
          ),
          const SizedBox(height: 20),
          const Text('Pay To:', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
          const SizedBox(height: 10),
          _numCard(AppStrings.paymentNumber1, 'Airtel Money'),
          const SizedBox(height: 8),
          _numCard(AppStrings.paymentNumber2, 'TNM Mpamba'),
          const SizedBox(height: 20),
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(color: Colors.blue.shade50,
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: Colors.blue.shade200)),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Row(children: [
                Icon(Icons.info, color: Colors.blue),
                SizedBox(width: 8),
                Text('How to Pay', style: TextStyle(
                    fontWeight: FontWeight.bold, color: Colors.blue)),
              ]),
              const SizedBox(height: 10),
              Text(AppStrings.paymentInstructions(widget.amount),
                  style: const TextStyle(fontSize: 13, height: 1.6)),
            ]),
          ),
          const SizedBox(height: 20),
          const Text('Upload Proof of Payment:',
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
          const SizedBox(height: 10),
          GestureDetector(
            onTap: _pickImg,
            child: Container(
              width: double.infinity, height: 200,
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(
                    color: _proof != null ? AppColors.primary : AppColors.lightGrey,
                    width: 2),
              ),
              child: _proof != null
                  ? ClipRRect(borderRadius: BorderRadius.circular(10),
                      child: Image.file(_proof!, fit: BoxFit.cover))
                  : const Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                      Icon(Icons.upload_file, size: 50, color: AppColors.grey),
                      SizedBox(height: 8),
                      Text('Tap to upload screenshot',
                          style: TextStyle(color: AppColors.grey)),
                      Text('JPG, PNG supported',
                          style: TextStyle(color: AppColors.grey, fontSize: 12)),
                    ]),
            ),
          ),
          if (_proof != null) ...[
            const SizedBox(height: 8),
            TextButton.icon(
              onPressed: _pickImg,
              icon: const Icon(Icons.refresh),
              label: const Text('Change Image'),
            ),
          ],
          const SizedBox(height: 16),
          // ADMIN APPROVAL NOTE
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(color: Colors.orange.shade50,
                borderRadius: BorderRadius.circular(8)),
            child: const Row(children: [
              Icon(Icons.admin_panel_settings, color: Colors.orange),
              SizedBox(width: 8),
              Expanded(
                // ADMIN APPROVAL POINT:
                // Admin sees payment in Firebase 'payments' collection
                // Admin sets status = 'approved' to activate listing/subscription
                child: Text(
                  'Your payment will be reviewed by admin within 24 hours. '
                  'You will receive a notification upon approval.',
                  style: TextStyle(fontSize: 12, color: Colors.orange),
                ),
              ),
            ]),
          ),
          const SizedBox(height: 20),
          CustomButton(
            text: 'Submit Payment Proof',
            onPressed: _proof != null ? _submit : null,
            isLoading: _loading, icon: Icons.send,
          ),
          const SizedBox(height: 40),
        ]),
      ),
    );
  }

  Widget _row(String l, String v) => Padding(
      padding: const EdgeInsets.only(bottom: 5),
      child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
        Text(l, style: const TextStyle(color: AppColors.grey)),
        Text(v, style: const TextStyle(fontWeight: FontWeight.bold)),
      ]));

  Widget _numCard(String num, String net) {
    final sel = _payNumber == num;
    return GestureDetector(
      onTap: () => setState(() => _payNumber = num),
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: sel ? AppColors.primaryLight : Colors.white,
          borderRadius: BorderRadius.circular(8),
          border: Border.all(color: sel ? AppColors.primary : AppColors.lightGrey),
        ),
        child: Row(children: [
          Icon(Icons.phone, color: sel ? AppColors.primary : AppColors.grey),
          const SizedBox(width: 12),
          Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(num, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
            Text(net, style: const TextStyle(color: AppColors.grey, fontSize: 12)),
          ])),
          if (sel) const Icon(Icons.check_circle, color: AppColors.primary),
        ]),
      ),
    );
  }

  Future<void> _pickImg() async {
    showModalBottomSheet(context: context, builder: (ctx) => Padding(
      padding: const EdgeInsets.all(20),
      child: Column(mainAxisSize: MainAxisSize.min, children: [
        ListTile(
          leading: const Icon(Icons.photo_library), title: const Text('Gallery'),
          onTap: () async {
            Navigator.pop(ctx);
            final f = await _storage.pickImage();
            if (f != null) setState(() => _proof = f);
          },
        ),
        ListTile(
          leading: const Icon(Icons.camera_alt), title: const Text('Camera'),
          onTap: () async {
            Navigator.pop(ctx);
            final f = await _storage.pickImage(fromCamera: true);
            if (f != null) setState(() => _proof = f);
          },
        ),
      ]),
    ));
  }

  Future<void> _submit() async {
    final auth = context.read<AuthProvider>();
    if (!auth.isLoggedIn) return;
    setState(() => _loading = true);
    try {
      final url = await _storage.uploadPaymentProof(_proof!, auth.user!.id);

      // ADMIN APPROVAL POINT: Record appears in Firebase 'payments' collection
      // Admin reviews and changes status to 'approved' or 'rejected'
      await _db.createPayment(PaymentModel(
        id: '', userId: auth.user!.id, paymentType: widget.paymentType,
        amount: widget.amount, status: 'pending',
        paymentProofUrl: url, paymentNumber: _payNumber,
        listingId: widget.listingId, createdAt: DateTime.now(),
      ));

      if (widget.paymentType == 'subscription') {
        await _db.createSubscription(SubscriptionModel(
          id: '', userId: auth.user!.id,
          plan: widget.amount == AppStrings.dailySubFee ? 'daily'
              : widget.amount == AppStrings.weeklySubFee ? 'weekly' : 'monthly',
          amount: widget.amount, status: 'pending',
          paymentProofUrl: url, paymentNumber: _payNumber,
          createdAt: DateTime.now(),
        ));
      }

      await _db.createNotification(
        userId: auth.user!.id, title: 'Payment Submitted ✅',
        body: 'Your payment of ${widget.amount} is under review. '
            'You\'ll be notified once approved.',
        type: 'payment',
      );

      if (!mounted) return;
      setState(() => _loading = false);
      showDialog(
        context: context, barrierDismissible: false,
        builder: (ctx) => AlertDialog(
          icon: const Icon(Icons.check_circle, color: AppColors.primary, size: 60),
          title: const Text('Submitted!'),
          content: const Text(
              'Payment proof submitted. Admin will review within 24 hours.',
              textAlign: TextAlign.center),
          actions: [ElevatedButton(
            onPressed: () {
              Navigator.pop(ctx);
              Navigator.pushReplacementNamed(context, '/home');
            },
            child: const Text('Go Home'),
          )],
        ),
      );
    } catch (e) {
      setState(() => _loading = false);
      ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Error: $e'), backgroundColor: AppColors.error));
    }
  }

  String _label() {
    switch (widget.paymentType) {
      case 'subscription': return 'Subscription';
      case 'post_listing': return 'Post Listing';
      case 'boost': return 'Boost Listing';
      case 'verify': return 'Account Verification';
      default: return widget.paymentType;
    }
  }
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../constants/app_colors.dart';
import '../../constants/app_strings.dart';
import '../../providers/auth_provider.dart';
import '../../widgets/custom_button.dart';

class BoostListingScreen extends StatelessWidget {
  final String listingId, collection;
  const BoostListingScreen({super.key, required this.listingId, required this.collection});

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(title: const Text('Boost Listing')),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Container(
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              gradient: const LinearGradient(
                  colors: [AppColors.accent, Color(0xFFFF7043)]),
              borderRadius: BorderRadius.circular(12),
            ),
            child: const Column(children: [
              Icon(Icons.rocket_launch, color: Colors.white, size: 44),
              SizedBox(height: 12),
              Text('Boost Your Listing', textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white, fontSize: 20,
                      fontWeight: FontWeight.bold)),
              SizedBox(height: 8),
              Text('Your listing will appear at the TOP of search results\n'
                  'and reach more potential buyers!',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white70, fontSize: 13)),
            ]),
          ),
          const SizedBox(height: 24),
          const Text('Boost Benefits:', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
          const SizedBox(height: 12),
          ...[
            '⚡ Appear at top of all listings',
            '👁️ 3x more visibility',
            '🎯 Reach more buyers',
            '🏷️ Special BOOSTED badge on your listing',
          ].map((b) => Padding(
            padding: const EdgeInsets.only(bottom: 10),
            child: Row(children: [
              const SizedBox(width: 4),
              Text(b, style: const TextStyle(fontSize: 14)),
            ]),
          )),
          const SizedBox(height: 24),
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(color: AppColors.accentLight,
                borderRadius: BorderRadius.circular(10),
                border: Border.all(color: AppColors.accent.withOpacity(0.4))),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Row(children: [
                Icon(Icons.local_offer, color: AppColors.accent),
                SizedBox(width: 8),
                Text('Boost Fee: K5,000', style: TextStyle(
                    fontWeight: FontWeight.bold, color: AppColors.accent, fontSize: 16)),
              ]),
              const SizedBox(height: 10),
              Text(AppStrings.paymentInstructions('K5,000'),
                  style: const TextStyle(fontSize: 13, height: 1.6)),
            ]),
          ),
          const Spacer(),
          // ADMIN APPROVAL POINT: After boost payment approved,
          // admin calls boostListing(collection, listingId) in Firebase
          CustomButton(
            text: 'Boost Now — K5,000',
            icon: Icons.rocket_launch,
            color: AppColors.accent,
            onPressed: auth.isLoggedIn
                ? () => Navigator.pushNamed(context, '/payment-proof', arguments: {
                    'paymentType': 'boost',
                    'amount': 'K5,000',
                    'listingId': listingId,
                  })
                : () => Navigator.pushNamed(context, '/login'),
          ),
          const SizedBox(height: 20),
        ]),
      ),
    );
  }
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../constants/app_colors.dart';
import '../../constants/app_strings.dart';
import '../../providers/auth_provider.dart';
import '../../widgets/custom_button.dart';

class VerifyAccountScreen extends StatelessWidget {
  const VerifyAccountScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();

    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(title: const Text('Verify Account')),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              gradient: const LinearGradient(
                  colors: [Color(0xFF1565C0), Color(0xFF0288D1)]),
              borderRadius: BorderRadius.circular(12),
            ),
            child: Column(children: [
              const Icon(Icons.verified, color: Colors.amber, size: 50),
              const SizedBox(height: 12),
              const Text('Get Verified ✓', style: TextStyle(
                  color: Colors.white, fontSize: 22, fontWeight: FontWeight.bold)),
              const SizedBox(height: 8),
              const Text('Build trust with buyers and sellers.\n'
                  'Verified accounts get a blue badge.',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white70, fontSize: 14)),
              if (auth.isVerified) ...[
                const SizedBox(height: 12),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                  decoration: BoxDecoration(color: Colors.green,
                      borderRadius: BorderRadius.circular(20)),
                  child: const Text('✓ Already Verified',
                      style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                ),
              ],
            ]),
          ),
          const SizedBox(height: 24),
          const Text('Verification Benefits:', style: TextStyle(
              fontSize: 16, fontWeight: FontWeight.bold)),
          const SizedBox(height: 12),
          ...[
            '✓ Blue verified badge on your profile',
            '✓ Trusted seller/employer status',
            '✓ Listings highlighted with verified tag',
            '✓ Higher visibility in search results',
            '✓ Build credibility with buyers',
          ].map((b) => Padding(
            padding: const EdgeInsets.only(bottom: 10),
            child: Text(b, style: const TextStyle(fontSize: 14)),
          )),
          const SizedBox(height: 24),
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(color: Colors.blue.shade50,
                borderRadius: BorderRadius.circular(10),
                border: Border.all(color: Colors.blue.shade200)),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Row(children: [
                Icon(Icons.verified_user, color: Colors.blue),
                SizedBox(width: 8),
                Text('Verification Fee: K15,000', style: TextStyle(
                    fontWeight: FontWeight.bold, color: Colors.blue, fontSize: 16)),
              ]),
              const SizedBox(height: 10),
              Text(AppStrings.paymentInstructions('K15,000'),
                  style: const TextStyle(fontSize: 13, height: 1.6)),
            ]),
          ),
          const Spacer(),
          if (!auth.isVerified)
          // ADMIN APPROVAL POINT: After verify payment approved,
          // admin sets users/{userId} → isVerified=true in Firebase
            CustomButton(
              text: 'Get Verified — K15,000',
              icon: Icons.verified,
              color: Colors.blue,
              onPressed: auth.isLoggedIn
                  ? () => Navigator.pushNamed(context, '/payment-proof', arguments: {
                      'paymentType': 'verify', 'amount': 'K15,000', 'listingId': null,
                    })
                  : () => Navigator.pushNamed(context, '/login'),
            ),
          const SizedBox(height: 20),
        ]),
      ),
    );
  }
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:timeago/timeago.dart' as timeago;
import '../../constants/app_colors.dart';
import '../../models/message_model.dart';
import '../../providers/auth_provider.dart';
import '../../services/firestore_service.dart';

class ChatListScreen extends StatelessWidget {
  const ChatListScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();

    if (!auth.isLoggedIn) {
      return Scaffold(
        appBar: AppBar(title: const Text('Messages')),
        body: Center(
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
            const Icon(Icons.chat_bubble_outline, size: 60, color: AppColors.grey),
            const SizedBox(height: 16),
            const Text('Login to view messages'),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: () => Navigator.pushNamed(context, '/login'),
              child: const Text('Login'),
            ),
          ]),
        ),
      );
    }

    final svc = FirestoreService();
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(title: const Text('Messages')),
      body: StreamBuilder<List<ChatModel>>(
        stream: svc.getUserChats(auth.user!.id),
        builder: (_, snap) {
          if (snap.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator(color: AppColors.primary));
          }
          final chats = snap.data ?? [];
          if (chats.isEmpty) {
            return const Center(
              child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                Icon(Icons.chat_bubble_outline, size: 60, color: AppColors.grey),
                SizedBox(height: 16),
                Text('No messages yet', style: TextStyle(fontSize: 18)),
                SizedBox(height: 8),
                Text('Start a conversation from any listing!',
                    style: TextStyle(color: AppColors.grey)),
              ]),
            );
          }
          return ListView.separated(
            itemCount: chats.length,
            separatorBuilder: (_, __) => const Divider(height: 1),
            itemBuilder: (_, i) {
              final chat = chats[i];
              final otherId = chat.participants
                  .firstWhere((p) => p != auth.user!.id, orElse: () => '');
              final otherName = chat.participantNames[otherId] ?? 'User';

              return ListTile(
                contentPadding: const EdgeInsets.symmetric(
                    horizontal: 16, vertical: 8),
                leading: CircleAvatar(
                  backgroundColor: AppColors.primaryLight,
                  child: Text(otherName[0].toUpperCase(),
                      style: const TextStyle(
                          color: AppColors.primary, fontWeight: FontWeight.bold)),
                ),
                title: Text(otherName,
                    style: const TextStyle(fontWeight: FontWeight.bold)),
                subtitle: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    if (chat.relatedListingTitle != null)
                      Text('Re: ${chat.relatedListingTitle}',
                          style: const TextStyle(
                              color: AppColors.primary,
                              fontSize: 11,
                              fontWeight: FontWeight.w500)),
                    Text(chat.lastMessage,
                        maxLines: 1, overflow: TextOverflow.ellipsis,
                        style: const TextStyle(color: AppColors.darkGrey, fontSize: 13)),
                  ],
                ),
                trailing: Text(
                  timeago.format(chat.lastMessageAt),
                  style: const TextStyle(fontSize: 11, color: AppColors.grey),
                ),
                onTap: () => Navigator.pushNamed(context, '/chat', arguments: {
                  'chatId': chat.id,
                  'recipientId': otherId,
                  'recipientName': otherName,
                }),
              );
            },
          );
        },
      ),
    );
  }
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../constants/app_colors.dart';
import '../../models/message_model.dart';
import '../../providers/auth_provider.dart';
import '../../services/firestore_service.dart';

class ChatScreen extends StatefulWidget {
  final String chatId, recipientId, recipientName;
  const ChatScreen({super.key, required this.chatId,
      required this.recipientId, required this.recipientName});

  @override
  State<ChatScreen> createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  final _svc = FirestoreService();
  final _msgCtrl = TextEditingController();
  final _scrollCtrl = ScrollController();

  @override
  void dispose() {
    _msgCtrl.dispose();
    _scrollCtrl.dispose();
    super.dispose();
  }

  Future<void> _send(AuthProvider auth) async {
    final text = _msgCtrl.text.trim();
    if (text.isEmpty) return;
    _msgCtrl.clear();
    await _svc.sendMessage(
      senderId: auth.user!.id, senderName: auth.user!.name,
      recipientId: widget.recipientId, recipientName: widget.recipientName,
      content: text,
    );
    if (_scrollCtrl.hasClients) {
      _scrollCtrl.animateTo(_scrollCtrl.position.maxScrollExtent + 80,
          duration: const Duration(milliseconds: 300), curve: Curves.easeOut);
    }
  }

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();

    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        title: Row(children: [
          CircleAvatar(
            radius: 18, backgroundColor: Colors.white24,
            child: Text(widget.recipientName[0].toUpperCase(),
                style: const TextStyle(fontWeight: FontWeight.bold, color: Colors.white)),
          ),
          const SizedBox(width: 10),
          Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(widget.recipientName,
                style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
            const Text('Online', style: TextStyle(fontSize: 11, color: Colors.white70)),
          ]),
        ]),
      ),
      body: Column(children: [
        // Subscription notice if no subscription
        if (!auth.hasActiveSubscription)
          Container(
            padding: const EdgeInsets.all(10),
            color: AppColors.accentLight,
            child: Row(children: [
              const Icon(Icons.lock, color: AppColors.accent, size: 16),
              const SizedBox(width: 8),
              const Expanded(child: Text(
                  'Subscribe to see phone numbers in chat',
                  style: TextStyle(color: AppColors.accent, fontSize: 12))),
              TextButton(
                onPressed: () => Navigator.pushNamed(context, '/subscription'),
                child: const Text('Subscribe', style: TextStyle(
                    color: AppColors.accent, fontWeight: FontWeight.bold, fontSize: 12)),
              ),
            ]),
          ),

        // Messages
        Expanded(
          child: StreamBuilder<List<MessageModel>>(
            stream: _svc.getChatMessages(widget.chatId),
            builder: (_, snap) {
              if (snap.connectionState == ConnectionState.waiting) {
                return const Center(child: CircularProgressIndicator(color: AppColors.primary));
              }
              final msgs = snap.data ?? [];
              if (msgs.isEmpty) {
                return const Center(
                  child: Text('Start the conversation!',
                      style: TextStyle(color: AppColors.grey)),
                );
              }
              return ListView.builder(
                controller: _scrollCtrl,
                padding: const EdgeInsets.all(16),
                itemCount: msgs.length,
                itemBuilder: (_, i) {
                  final msg = msgs[i];
                  final isMe = msg.senderId == auth.user?.id;
                  return Align(
                    alignment: isMe ? Alignment.centerRight : Alignment.centerLeft,
                    child: Container(
                      margin: const EdgeInsets.only(bottom: 10),
                      constraints: BoxConstraints(
                          maxWidth: MediaQuery.of(context).size.width * 0.75),
                      padding: const EdgeInsets.symmetric(
                          horizontal: 14, vertical: 10),
                      decoration: BoxDecoration(
                        color: isMe ? AppColors.primary : Colors.white,
                        borderRadius: BorderRadius.only(
                          topLeft: const Radius.circular(16),
                          topRight: const Radius.circular(16),
                          bottomLeft: Radius.circular(isMe ? 16 : 4),
                          bottomRight: Radius.circular(isMe ? 4 : 16),
                        ),
                        boxShadow: [BoxShadow(
                            color: Colors.black.withOpacity(0.06),
                            blurRadius: 4)],
                      ),
                      child: Column(
                        crossAxisAlignment: isMe
                            ? CrossAxisAlignment.end : CrossAxisAlignment.start,
                        children: [
                          Text(msg.content,
                              style: TextStyle(
                                  color: isMe ? Colors.white : Colors.black87,
                                  fontSize: 14)),
                          const SizedBox(height: 4),
                          Text(
                            '${msg.sentAt.hour.toString().padLeft(2, '0')}:'
                            '${msg.sentAt.minute.toString().padLeft(2, '0')}',
                            style: TextStyle(
                                color: isMe ? Colors.white60 : AppColors.grey,
                                fontSize: 10),
                          ),
                        ],
                      ),
                    ),
                  );
                },
              );
            },
          ),
        ),

        // Input
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
          decoration: const BoxDecoration(
            color: Colors.white,
            boxShadow: [BoxShadow(color: Colors.black12, blurRadius: 8)],
          ),
          child: Row(children: [
            Expanded(
              child: TextField(
                controller: _msgCtrl,
                decoration: InputDecoration(
                  hintText: 'Type a message...',
                  border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(24),
                      borderSide: BorderSide.none),
                  filled: true,
                  fillColor: AppColors.background,
                  contentPadding: const EdgeInsets.symmetric(
                      horizontal: 16, vertical: 10),
                ),
                maxLines: null,
                textInputAction: TextInputAction.newline,
              ),
            ),
            const SizedBox(width: 8),
            GestureDetector(
              onTap: () => _send(auth),
              child: Container(
                width: 44, height: 44,
                decoration: const BoxDecoration(
                    color: AppColors.primary, shape: BoxShape.circle),
                child: const Icon(Icons.send, color: Colors.white, size: 20),
              ),
            ),
          ]),
        ),
      ]),
    );
  }
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:intl/intl.dart';
import '../../constants/app_colors.dart';
import '../../providers/auth_provider.dart';
import '../../widgets/custom_button.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();
    if (!auth.isLoggedIn) {
      return Scaffold(appBar: AppBar(title: const Text('Profile')),
          body: Center(child: Column(
            mainAxisAlignment: MainAxisAlignment.center, children: [
              const Text('Please login to view profile'),
              const SizedBox(height: 16),
              ElevatedButton(
                  onPressed: () => Navigator.pushNamed(context, '/login'),
                  child: const Text('Login')),
            ],
          )));
    }
    final user = auth.user!;

    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(title: const Text('My Profile'), actions: [
        IconButton(icon: const Icon(Icons.settings),
            onPressed: () => Navigator.pushNamed(context, '/settings')),
      ]),
      body: SingleChildScrollView(
        child: Column(children: [
          // Header
          Container(
            padding: const EdgeInsets.all(24),
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                  colors: [AppColors.primary, Color(0xFF2E7D32)]),
            ),
            child: Column(children: [
              CircleAvatar(
                radius: 44, backgroundColor: Colors.white24,
                backgroundImage: user.profileImageUrl != null
                    ? NetworkImage(user.profileImageUrl!) : null,
                child: user.profileImageUrl == null
                    ? Text(user.name[0].toUpperCase(),
                        style: const TextStyle(
                            fontSize: 36, color: Colors.white,
                            fontWeight: FontWeight.bold))
                    : null,
              ),
              const SizedBox(height: 12),
              Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                Text(user.name, style: const TextStyle(
                    color: Colors.white, fontSize: 20,
                    fontWeight: FontWeight.bold)),
                if (user.isVerified) ...[
                  const SizedBox(width: 6),
                  const Icon(Icons.verified, color: Colors.amber, size: 20),
                ],
              ]),
              const SizedBox(height: 4),
              Text(user.email,
                  style: const TextStyle(color: Colors.white70)),
              const SizedBox(height: 4),
              Text(user.phone,
                  style: const TextStyle(color: Colors.white70)),
              const SizedBox(height: 12),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
                decoration: BoxDecoration(
                  color: user.hasActiveSubscription
                      ? Colors.amber : Colors.white24,
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Row(mainAxisSize: MainAxisSize.min, children: [
                  Icon(
                    user.hasActiveSubscription
                        ? Icons.star : Icons.star_border,
                    color: user.hasActiveSubscription
                        ? Colors.white : Colors.white70,
                    size: 16,
                  ),
                  const SizedBox(width: 6),
                  Text(
                    user.hasActiveSubscription
                        ? 'Active Subscriber'
                        : 'No Active Subscription',
                    style: TextStyle(
                      color: user.hasActiveSubscription
                          ? Colors.white : Colors.white70,
                      fontSize: 13, fontWeight: FontWeight.bold,
                    ),
                  ),
                ]),
              ),
              if (user.hasActiveSubscription &&
                  user.subscriptionExpiry != null) ...[
                const SizedBox(height: 6),
                Text(
                  'Expires: ${DateFormat('dd MMM yyyy').format(user.subscriptionExpiry!)}',
                  style: const TextStyle(color: Colors.white70, fontSize: 12),
                ),
              ],
            ]),
          ),

          // Menu Items
          Padding(
            padding: const EdgeInsets.all(16),
            child: Column(children: [
              _tile(context, Icons.work, 'My Listings', '/jobs'),
              _tile(context, Icons.bookmark, 'Saved Listings', '/saved'),
              _tile(context, Icons.star, 'Subscription', '/subscription'),
              _tile(context, Icons.verified, 'Verify Account', '/verify-account'),
              _tile(context, Icons.payment, 'Payment History', '/reports'),
              _tile(context, Icons.notifications, 'Notifications', '/notifications'),
              _tile(context, Icons.help, 'Help & Support', '/reports'),
              _tile(context, Icons.settings, 'Settings', '/settings'),
              const SizedBox(height: 20),
              CustomButton(
                text: 'Logout', isOutlined: true,
                color: AppColors.error, icon: Icons.logout,
                onPressed: () async {
                  await auth.logout();
                  if (context.mounted) {
                    Navigator.pushReplacementNamed(context, '/login');
                  }
                },
              ),
              const SizedBox(height: 40),
            ]),
          ),
        ]),
      ),
    );
  }

  Widget _tile(BuildContext ctx, IconData icon, String title, String route) =>
      Card(
        margin: const EdgeInsets.only(bottom: 8),
        elevation: 0,
        child: ListTile(
          leading: Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
                color: AppColors.primaryLight,
                borderRadius: BorderRadius.circular(8)),
            child: Icon(icon, color: AppColors.primary, size: 22),
          ),
          title: Text(title),
          trailing: const Icon(Icons.arrow_forward_ios, size: 14),
          onTap: () => Navigator.pushNamed(ctx, route),
        ),
      );
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../constants/app_colors.dart';
import '../../providers/auth_provider.dart';
import '../../widgets/custom_button.dart';

class SavedListingsScreen extends StatelessWidget {
  const SavedListingsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();

    if (!auth.isLoggedIn) {
      return Scaffold(
        appBar: AppBar(title: const Text('Saved Listings')),
        body: Center(child: Column(
          mainAxisAlignment: MainAxisAlignment.center, children: [
            const Icon(Icons.bookmark_border, size: 60, color: AppColors.grey),
            const SizedBox(height: 16),
            const Text('Login to see saved listings'),
            const SizedBox(height: 16),
            CustomButton(text: 'Login', width: 160,
                onPressed: () => Navigator.pushNamed(context, '/login')),
          ],
        )),
      );
    }

    final savedIds = auth.user?.savedListings ?? [];

    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(title: const Text('Saved Listings')),
      body: savedIds.isEmpty
          ? Center(child: Column(
              mainAxisAlignment: MainAxisAlignment.center, children: [
                const Icon(Icons.bookmark_border, size: 60, color: AppColors.grey),
                const SizedBox(height: 16),
                const Text('No saved listings yet',
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                const SizedBox(height: 8),
                const Text('Tap the bookmark icon on any listing to save it.',
                    style: TextStyle(color: AppColors.grey),
                    textAlign: TextAlign.center),
                const SizedBox(height: 20),
                CustomButton(text: 'Browse Listings', width: 200,
                    onPressed: () => Navigator.pushReplacementNamed(context, '/home')),
              ],
            ))
          : ListView.builder(
              padding: const EdgeInsets.all(16),
              itemCount: savedIds.length,
              itemBuilder: (_, i) => Card(
                margin: const EdgeInsets.only(bottom: 12),
                child: ListTile(
                  leading: const Icon(Icons.bookmark, color: AppColors.primary),
                  title: Text('Saved Listing #${i + 1}'),
                  subtitle: Text(savedIds[i],
                      style: const TextStyle(fontSize: 12, color: AppColors.grey)),
                  trailing: IconButton(
                    icon: const Icon(Icons.delete_outline, color: AppColors.error),
                    onPressed: () {/* remove save */},
                  ),
                ),
              ),
            ),
    );
  }
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:timeago/timeago.dart' as timeago;
import '../../constants/app_colors.dart';
import '../../providers/auth_provider.dart';
import '../../services/firestore_service.dart';

class NotificationsScreen extends StatelessWidget {
  const NotificationsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();

    if (!auth.isLoggedIn) {
      return Scaffold(
        appBar: AppBar(title: const Text('Notifications')),
        body: const Center(child: Text('Login to view notifications')),
      );
    }

    final svc = FirestoreService();
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(title: const Text('Notifications')),
      body: StreamBuilder<List<Map<String, dynamic>>>(
        stream: svc.getUserNotifications(auth.user!.id),
        builder: (_, snap) {
          if (snap.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator(color: AppColors.primary));
          }
          final notifs = snap.data ?? [];
          if (notifs.isEmpty) {
            return const Center(child: Column(
              mainAxisAlignment: MainAxisAlignment.center, children: [
                Icon(Icons.notifications_none, size: 60, color: AppColors.grey),
                SizedBox(height: 16),
                Text('No notifications yet',
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                SizedBox(height: 8),
                Text('We\'ll notify you of approvals and updates.',
                    style: TextStyle(color: AppColors.grey)),
              ],
            ));
          }
          return ListView.separated(
            itemCount: notifs.length,
            separatorBuilder: (_, __) => const Divider(height: 1),
            itemBuilder: (_, i) {
              final n = notifs[i];
              final isRead = n['isRead'] ?? false;
              return ListTile(
                contentPadding: const EdgeInsets.all(16),
                tileColor: isRead ? null : AppColors.primaryLight.withOpacity(0.3),
                leading: Container(
                  width: 44, height: 44,
                  decoration: BoxDecoration(
                    color: _notifColor(n['type']).withOpacity(0.1),
                    shape: BoxShape.circle,
                  ),
                  child: Icon(_notifIcon(n['type']),
                      color: _notifColor(n['type'])),
                ),
                title: Text(n['title'] ?? '',
                    style: TextStyle(
                        fontWeight: isRead
                            ? FontWeight.normal : FontWeight.bold)),
                subtitle: Column(
                  crossAxisAlignment: CrossAxisAlignment.start, children: [
                    const SizedBox(height: 4),
                    Text(n['body'] ?? '',
                        style: const TextStyle(fontSize: 13)),
                    const SizedBox(height: 4),
                    Text(
                      timeago.format((n['createdAt'] as dynamic)?.toDate()
                          ?? DateTime.now()),
                      style: const TextStyle(
                          fontSize: 11, color: AppColors.grey),
                    ),
                  ],
                ),
                onTap: () => svc.markNotificationRead(n['id']),
              );
            },
          );
        },
      ),
    );
  }

  Color _notifColor(String? type) {
    switch (type) {
      case 'payment': return AppColors.primary;
      case 'subscription': return Colors.amber;
      case 'message': return Colors.blue;
      default: return AppColors.grey;
    }
  }

  IconData _notifIcon(String? type) {
    switch (type) {
      case 'payment': return Icons.payment;
      case 'subscription': return Icons.star;
      case 'message': return Icons.chat;
      default: return Icons.notifications;
    }
  }
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../constants/app_colors.dart';
import '../../providers/auth_provider.dart';
import '../../services/firestore_service.dart';
import '../../widgets/custom_button.dart';
import '../../widgets/custom_text_field.dart';

class ReportsScreen extends StatefulWidget {
  const ReportsScreen({super.key});
  @override
  State<ReportsScreen> createState() => _ReportsScreenState();
}

class _ReportsScreenState extends State<ReportsScreen> {
  final _svc = FirestoreService();
  final _descCtrl = TextEditingController();
  String _cat = 'Technical Issue';
  bool _submitted = false, _loading = false;

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(title: const Text('Help & Support')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          // Help options
          const Text('Quick Help', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
          const SizedBox(height: 12),
          _helpCard('📱', 'Payment Issues', 'Problems with payment proof'),
          _helpCard('🔒', 'Subscription Not Working', 'Contact info still locked'),
          _helpCard('📋', 'Listing Not Approved', 'Listing pending too long'),
          _helpCard('💬', 'Chat Issues', 'Messages not sending'),
          const SizedBox(height: 24),
          const Text('Send a Report', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
          const SizedBox(height: 12),
          if (_submitted)
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(color: AppColors.primaryLight,
                  borderRadius: BorderRadius.circular(8)),
              child: const Row(children: [
                Icon(Icons.check_circle, color: AppColors.primary),
                SizedBox(width: 10),
                Expanded(child: Text('Report submitted! We\'ll get back to you soon.')),
              ]),
            )
          else ...[
            CustomDropdown(
              label: 'Category', value: _cat,
              items: const ['Technical Issue', 'Payment Problem',
                'Subscription Issue', 'Listing Issue', 'Chat Problem', 'Other'],
              onChanged: (v) => setState(() => _cat = v!),
            ),
            const SizedBox(height: 14),
            CustomTextField(
              label: 'Describe your issue *',
              hint: 'Please describe what happened...',
              controller: _descCtrl, maxLines: 5,
            ),
            const SizedBox(height: 20),
            CustomButton(
              text: 'Submit Report', isLoading: _loading,
              icon: Icons.send,
              onPressed: () async {
                if (_descCtrl.text.isEmpty) return;
                if (!auth.isLoggedIn) {
                  Navigator.pushNamed(context, '/login');
                  return;
                }
                setState(() => _loading = true);
                await _svc.submitReport(
                  userId: auth.user!.id, category: _cat,
                  description: _descCtrl.text.trim(),
                );
                setState(() { _loading = false; _submitted = true; });
              },
            ),
          ],
          const SizedBox(height: 24),
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(color: Colors.grey.shade100,
                borderRadius: BorderRadius.circular(8)),
            child: const Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('Contact Us', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 15)),
              SizedBox(height: 8),
              Row(children: [
                Icon(Icons.email, size: 16, color: AppColors.grey),
                SizedBox(width: 6),
                Text('support@mwayilink.com'),
              ]),
              SizedBox(height: 6),
              Row(children: [
                Icon(Icons.phone, size: 16, color: AppColors.grey),
                SizedBox(width: 6),
                Text('0984658754'),
              ]),
            ]),
          ),
          const SizedBox(height: 40),
        ]),
      ),
    );
  }

  Widget _helpCard(String emoji, String title, String sub) => Card(
    margin: const EdgeInsets.only(bottom: 10), elevation: 0,
    child: ListTile(
      leading: Text(emoji, style: const TextStyle(fontSize: 24)),
      title: Text(title, style: const TextStyle(fontWeight: FontWeight.w500)),
      subtitle: Text(sub, style: const TextStyle(fontSize: 12, color: AppColors.grey)),
      trailing: const Icon(Icons.arrow_forward_ios, size: 14),
      onTap: () {},
    ),
  );
}import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../constants/app_colors.dart';
import '../../providers/auth_provider.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});
  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  bool _notificationsEnabled = true;
  bool _darkMode = false;
  bool _emailAlerts = true;

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(title: const Text('Settings')),
      body: ListView(padding: const EdgeInsets.all(16), children: [
        _section('Notifications'),
        _toggle('Push Notifications', _notificationsEnabled,
            (v) => setState(() => _notificationsEnabled = v)),
        _toggle('Email Alerts', _emailAlerts,
            (v) => setState(() => _emailAlerts = v)),
        const SizedBox(height: 16),
        _section('Appearance'),
        _toggle('Dark Mode', _darkMode,
            (v) => setState(() => _darkMode = v)),
        const SizedBox(height: 16),
        _section('Account'),
        if (auth.isLoggedIn) ...[
          _item('Edit Profile', Icons.person_outline,
              () => Navigator.pushNamed(context, '/profile')),
          _item('Subscription', Icons.star_outline,
              () => Navigator.pushNamed(context, '/subscription')),
          _item('Verify Account', Icons.verified_outlined,
              () => Navigator.pushNamed(context, '/verify-account')),
          _item('Privacy Policy', Icons.privacy_tip_outlined,
              () => {}),
          _item('Terms of Service', Icons.description_outlined, () => {}),
          const SizedBox(height: 16),
          _item('Logout', Icons.logout, () async {
            await auth.logout();
            if (context.mounted) {
              Navigator.pushReplacementNamed(context, '/login');
            }
          }, color: AppColors.error),
        ] else ...[
          _item('Login / Register', Icons.login,
              () => Navigator.pushNamed(context, '/login')),
        ],
        const SizedBox(height: 24),
        const Center(child: Column(children: [
          Text('Mwayilink v1.0.0',
              style: TextStyle(color: AppColors.grey, fontSize: 12)),
          SizedBox(height: 4),
          Text("© 2024 Mwayilink — Malawi's Marketplace",
              style: TextStyle(color: AppColors.grey, fontSize: 12)),
        ])),
        const SizedBox(height: 40),
      ]),
    );
  }

  Widget _section(String title) => Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Text(title, style: const TextStyle(
          fontSize: 13, fontWeight: FontWeight.bold,
          color: AppColors.grey, letterSpacing: 0.8)));

  Widget _toggle(String title, bool val, void Function(bool) onChanged) =>
      Container(
        margin: const EdgeInsets.only(bottom: 8),
        decoration: BoxDecoration(color: Colors.white,
            borderRadius: BorderRadius.circular(8)),
        child: SwitchListTile(
          title: Text(title),
          value: val, onChanged: onChanged,
          activeColor: AppColors.primary,
        ),
      );

  Widget _item(String title, IconData icon, VoidCallback onTap,
      {Color? color}) =>
      Container(
        margin: const EdgeInsets.only(bottom: 8),
        decoration: BoxDecoration(color: Colors.white,
            borderRadius: BorderRadius.circular(8)),
        child: ListTile(
          leading: Icon(icon, color: color ?? AppColors.darkGrey, size: 22),
          title: Text(title,
              style: TextStyle(color: color ?? Colors.black87)),
          trailing: const Icon(Icons.arrow_forward_ios, size: 14),
          onTap: onTap,
        ),
      );
}rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Users: read own data, write own data
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
      // Admin can write all user docs (for subscription approval)
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }
    
    // Listings: public read, auth write
    match /jobs/{jobId} {
      allow read: if true; // Guest browsing allowed
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
        (resource.data.postedById == request.auth.uid || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true);
    }
    
    match /houses/{houseId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
        (resource.data.postedById == request.auth.uid || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true);
    }
    
    match /products/{productId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
        (resource.data.postedById == request.auth.uid || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true);
    }
    
    match /other_items/{itemId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
        (resource.data.postedById == request.auth.uid || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true);
    }
    
    // Payments: user sees own, admin sees all
    match /payments/{paymentId} {
      allow read: if request.auth != null && 
        (resource.data.userId == request.auth.uid || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true);
      allow create: if request.auth != null;
      // Only admin can approve/reject payments
      allow update: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }
    
    // Subscriptions: same as payments
    match /subscriptions/{subId} {
      allow read: if request.auth != null && 
        (resource.data.userId == request.auth.uid || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true);
      allow create: if request.auth != null;
      allow update: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }
    
    // Messages & Chats
    match /chats/{chatId} {
      allow read, write: if request.auth != null && 
        request.auth.uid in resource.data.participants;
      allow create: if request.auth != null;
    }
    
    match /messages/{msgId} {
      allow read, write: if request.auth != null;
    }
    
    // Notifications
    match /notifications/{notifId} {
      allow read, write: if request.auth != null && 
        resource.data.userId == request.auth.uid;
      allow create: if request.auth != null;
    }
    
    // Reports
    match /reports/{reportId} {
      allow create: if request.auth != null;
      allow read: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }
  }
}