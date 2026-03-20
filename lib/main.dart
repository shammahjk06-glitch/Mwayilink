import 'package:flutter/material.dart';
import 'home_screen.dart';

void main() {
  runApp(MwayilinkApp());
}

class MwayilinkApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Mwayilink',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: HomeScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}
