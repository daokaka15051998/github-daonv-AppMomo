import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.viewText}>
        <Text style={styles.hiText}>Xin chào!</Text>
        <Text style={styles.hiText}>NGUYỄN VIẾT ĐẠO</Text>
        <Text style={styles.hiText}>0356827873</Text>
      </View>
      <View style={styles.from}>

        <TextInput style={styles.inputPassWord} />

        <TouchableOpacity onPress={() =>alert("Đăng Nhập")} style={styles.btnLogin}>
          <Text style={styles.btnLoginText}>ĐĂNG NHẬP</Text>
          
        </TouchableOpacity>

      </View>
      <View style={styles.action}>
        
        <TouchableOpacity style={styles.btnAction}>
          <Text style={styles.btnAction1}>QUÊN MẬT KHẨU</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnAction}>
          <Text style={styles.btnAction2}>THOÁT TÀI KHOẢN</Text>
        </TouchableOpacity>

      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0006d',
    alignItems: 'center',
    paddingTop: 100,
  },
  hiText: {
    color: "#fff",
    marginTop: 10,
  },
  nameText: {
    fontSize: 15,

  },
  viewText: {
    textAlign: 'center',
    alignItems: 'center',
  },
  inputPassWord: {
    marginTop: 20,
    height: 40,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 25,
  },
  btnLogin: {
    backgroundColor: 'red',
    height: 50,
    marginTop: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: 'center',
  },
  btnLoginText:{
    
    color: "#fff",
  },
  action:{
    marginTop:50,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  
  btnAction1:{
    color: "#fff",
    justifyContent:'space-evenly'
  },
  btnAction2:{ 
    color: "#fff",
  }
});
